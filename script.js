/**
 * @typedef {{
 * year: number;
 * month: number;
 * day: number;
 * }} DateOnly
 */

/**
 * @typedef {{
 * name: string;
 * detail?: string;
 * sourceURL?: string;
 * author?: string;
 * year?: number;
 * license?: string;
 * licenseURL?: string;
 * }} ImageMeta
 */

/**
 * @typedef {{
 * voted?: number | DateOnly;
 * start: number | DateOnly;
 * end?: number | DateOnly;
 * }} PontiffTime
 */

/** TODO: make birth place more detailed */
/**
 * @typedef {{
 * pontiffNo: number;
 * name: string;
 * order: number;
 * pontificate: PontiffTime;
 * secularName: string;
 * birthPlace: string;
 * image: ImageMeta;
 * }} Pontiff
 */

/**
 *
 * @param {Pontiff[]} pontiffs
 */
function callback(pontiffs) {
    
    function renderApp() {
        $("#app-root").html(`
            <section id="search-section">
                <input type="text" id="search-input" placeholder="Search Pontiffs...">
                <button id="search-button">Search</button>
            </section>
            <section id="pontiff-list">
                <!-- Pontiff cards will be dynamically loaded here -->
            </section>
        `);
        displayPontiffs();
        attachEventListeners();
    }

    function displayPontiffs(filter = "") {
        const $pontiffList = $("#pontiff-list");
        $pontiffList.empty();

        const filteredPontiffs = pontiffs.filter((pontiff) =>
            pontiff.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredPontiffs.length === 0) {
            $pontiffList.append(
                "<p>No pontiffs found matching your search.</p>"
            );
            return;
        }

        filteredPontiffs.forEach((pontiff) => {
            const $card = $("<div>").addClass("pontiff-card");
            const papalName = pontiff.name + " " + romanNumeral(pontiff.order);

            const $pontiffImage = $("<img>")
                .attr("src", "./images/" + pontiff.image.name)
                .attr("alt", papalName);

            const $pontiffName = $("<h2>").text(papalName);
            const pontiffStartYear =
                typeof pontiff.pontificate.start === "number"
                    ? pontiff.pontificate.start
                    : pontiff.pontificate.start.year;
            const pontiffEndYear =
                pontiff.pontificate.end === undefined
                    ? "present"
                    : typeof pontiff.pontificate.end === "number"
                    ? pontiff.pontificate.end
                    : pontiff.pontificate.end.year;
            const $pontiffPontificate = $("<p>").html(
                `Pontificate: ${pontiffStartYear}&ndash;${pontiffEndYear}`
            );

            $card.append(
                $(`<div>${pontiff.pontiffNo}</div>`).addClass("pontiff-no"),
                $pontiffImage,
                $pontiffName,
                $pontiffPontificate
            );
            $pontiffList.append($card);
        });
    }

    function attachEventListeners() {
        $("#search-button").on("click", function () {
            displayPontiffs($("#search-input").val()?.toString());
        });

        $("#search-input").on("keyup", function (event) {
            if (event.key === "Enter") {
                displayPontiffs($(this).val()?.toString());
            }
        });
    }

    /**
     *
     * @param {DateOnly | number} date
     * @returns {string}
     */
    function dateString(date) {
        if (typeof date === "number") {
            return date.toString();
        }
        const y = date.year.toString();
        const m = date.month.toString();
        const d = date.day.toString();
        return (
            "0".repeat(Math.max(0, 4 - y.length)) +
            y +
            "-" +
            "0".repeat(Math.max(0, 2 - m.length)) +
            m +
            "-" +
            "0".repeat(Math.max(0, 2 - d.length)) +
            d
        );
    }

    /**
     *
     * @param {number} value
     * @returns {string}
     */
    function romanNumeral(value) {
        let v = value;
        let s = "";
        while (value >= 1000) {
            s += "M";
            v -= 1000;
        }
        switch (Math.floor(v / 100)) {
            case 9:
                s += "CM";
                v -= 900;
                break;
            case 4:
                s += "CD";
                v -= 400;
                break;
            default:
                if (v >= 500) {
                    s += "D";
                    v -= 500;
                }
                while (v >= 100) {
                    s += "C";
                    v -= 100;
                }
                break;
        }
        switch (Math.floor(v / 10)) {
            case 9:
                s += "XC";
                v -= 90;
                break;
            case 4:
                s += "XL";
                v -= 40;
                break;
            default:
                if (v >= 50) {
                    s += "L";
                    v -= 50;
                }
                while (v >= 10) {
                    s += "X";
                    v -= 10;
                }
                break;
        }
        switch (v) {
            case 9:
                s += "IX";
                break;
            case 4:
                s += "IV";
                break;
            default:
                if (v >= 5) {
                    s += "V";
                    v -= 5;
                }
                while (v >= 1) {
                    s += "I";
                    v -= 1;
                }
                break;
        }
        return s;
    }
    renderApp();
}

$.getJSON("pontiffs.json", callback);
