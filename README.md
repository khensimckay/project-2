# Web Development Portfolio

A single-page portfolio starter built with semantic HTML and an external CSS stylesheet. It is designed to introduce a web developer, describe skills, show selected work, and provide contact information.

> Personal details and project descriptions in square brackets are placeholders. Replace them with accurate information before submitting or publishing the site.

## Open and preview

1. Open this folder in Visual Studio Code: **File → Open Folder**.
2. Open `index.html` to edit the page and `css/style.css` to edit its design.
3. Open `index.html` in a browser to preview the site.
4. For the responsive evidence requested by the assignment, use browser developer tools to view the page at desktop, tablet, and mobile widths. Save genuine screenshots in `docs/screenshots/` and add them to the table below.

## Part Two implementation

- **Layout:** CSS Grid for the hero and project cards; Flexbox for navigation, skills, and calls to action.
- **Responsive breakpoints:** mobile at `42rem` and tablet adjustments at `64rem`. Layouts reflow to a single column on narrow screens.
- **Relative sizing:** `rem`, `%`, `min()`, `clamp()`, and aspect ratios are used for fluid spacing, text, and media.
- **Responsive images:** project artwork includes WebP sources plus JPEG fallbacks, width-based `srcset` candidates, `sizes`, intrinsic dimensions, lazy loading, and decoding hints. The artwork is decorative, so its alternative text is empty.
- **Accessibility:** semantic landmarks, one primary heading, a skip link, keyboard focus indicators, readable contrast, 44px navigation targets, reduced-motion support, increased-contrast styles, forced-colour support, and a dark colour-scheme variant.
- **Typography and visual design:** system font stack, consistent type scale, colour tokens, border, spacing, and restrained shadows.

## Part Three implementation

- **Interactive elements:** project image lightbox supports mouse, Enter, Space, Escape, and click-outside closing; CSS transitions respect reduced-motion preferences.
- **Dynamic content and search:** project cards are filtered as the visitor types, with an announced result count and a clear empty-results state.
- **Enquiry form:** collects name, valid email, service type, and optional date. Browser validation runs before JavaScript displays an enquiry summary. This static demo does not save or send enquiries.
- **Contact form:** collects name, email, message type, and message, validates required fields, then prepares an email using the visitor's email application. Replace `REPLACE_WITH_YOUR_EMAIL@example.com` in `index.html` with the intended recipient before use. Delivery depends on the visitor having a mail application configured.
- **Map:** responsive, interactive OpenStreetMap embed centered on Johannesburg as a clearly labelled example. Replace the coordinates and labels with the organisation's actual location.
- **SEO:** descriptive title and meta description, canonical URL, keywords, headings, robots directives, and sitemap are included. Project image assets use descriptive names and are responsive; the artwork is decorative, so empty alt text is intentional.
- **Security and privacy:** no third-party JavaScript or form data collection is used. The contact form keeps data in the visitor's mail application; the enquiry form only displays a local response. The map is an external OpenStreetMap embed.

### Part Three setup still needed

1. Replace the example name, biography, skills, project details, and contact email in `index.html`.
2. Change the map coordinates and description to the correct organisation location, or remove the map if it is not relevant.
3. Provide the Part Two marker feedback and record the actual changes in `CHANGELOG.md`; feedback was not included in the supplied materials.
4. If enquiries must be delivered without opening a mail application, connect a form service or server endpoint. No endpoint or credentials were supplied, so the current static form does not claim to send data.

## Responsive screenshot evidence

Screenshots have not been captured in this workspace. Add genuine browser screenshots here before submission:

| View | Suggested viewport | Screenshot file |
| --- | ---: | --- |
| Desktop | 1440 × 900 | `docs/screenshots/desktop.png` |
| Tablet | 768 × 1024 | `docs/screenshots/tablet.png` |
| Mobile | 390 × 844 | `docs/screenshots/mobile.png` |

The browser preview available to this coding session blocks local `file://` pages, so I could not capture or verify these images here. Do not treat the filenames above as existing evidence until the screenshots have been added.

## Part One feedback

The brief asks for edits based on Part One mark feedback, but the feedback itself was not included with the materials I received. Add each actual correction here and record it in `CHANGELOG.md` once you have the feedback.

## References

- MDN Web Docs. (n.d.). [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids). Accessed 5 October 2026.
- MDN Web Docs. (n.d.). [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox). Accessed 5 October 2026.
- MDN Web Docs. (n.d.). [Media queries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries). Accessed 5 October 2026.
- MDN Web Docs. (n.d.). [Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images). Accessed 5 October 2026.
- MDN Web Docs. (n.d.). [CSS specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity). Accessed 5 October 2026.
- W3C Web Accessibility Initiative. (n.d.). [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/understanding/). Accessed 5 October 2026.
- MDN Web Docs. (n.d.). [HTML form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation). Accessed 8 November 2026.
- MDN Web Docs. (n.d.). [JavaScript event handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Events). Accessed 8 November 2026.
- MDN Web Docs. (n.d.). [The HTML dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog). Accessed 8 November 2026.
- Google Search Central. (n.d.). [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). Accessed 8 November 2026.
- OpenStreetMap. (n.d.). [Copyright and attribution](https://www.openstreetmap.org/copyright). Accessed 8 November 2026.
- No external libraries, web fonts, or third-party image assets are used.
- The two abstract project illustrations were created for this starter project and are examples to replace with genuine project images if available.
- Font stack: locally available system sans-serif fonts.

## GitHub submission

The project is published in the public repository [khensimckay/project-2](https://github.com/khensimckay/project-2). The live website is available at [khensimckay.github.io/project-2](https://khensimckay.github.io/project-2/). Submit the repository link to your Learning Management System.






