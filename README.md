# Web Development Portfolio

A responsive portfolio website built with semantic HTML, a shared external stylesheet, and JavaScript. It includes a home page, a project enquiry page, and a contact page.

The portfolio identifies Khensani Maluleke as a web development student and describes the responsive portfolio and its JavaScript enhancements.

## Open and preview

1. Open this folder in Visual Studio Code: **File → Open Folder**.
2. Open `index.html` to edit the page and `css/style.css` to edit its design.
3. Open `index.html` in a browser to preview the site.
4. Genuine desktop, tablet, and mobile previews are included in `docs/screenshots/` and listed below.

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
- **Enquiry form:** collects name, email, enquiry type, optional date, and details. Native validation and required consent run before JavaScript submits the form with AJAX to FormSubmit, which emails it to the configured recipient.
- **Contact form:** collects name, email, message type, and message. Native validation and required consent run before JavaScript submits it with AJAX to FormSubmit.
- **Map:** responsive, interactive OpenStreetMap embed centered on Johannesburg as a clearly labelled example. Replace the coordinates and labels with the organisation's actual location.
- **SEO:** descriptive title and meta description, canonical URL, keywords, headings, robots directives, and sitemap are included. Project image assets use descriptive names and are responsive; the artwork is decorative, so empty alt text is intentional.
- **Security and privacy:** form submission sends the details to FormSubmit over HTTPS for email delivery to ST10528937@myemeris.edu.za. FormSubmit states that it retains submissions for up to 30 days; read its [privacy information](https://formsubmit.co/privacy). Each form has a required consent checkbox. The map is an external OpenStreetMap embed.

### Part Three setup still needed

1. Review the bio, skills, and project descriptions in `index.html` and edit them if you want different wording; change the recipient address in `contact.html` if needed.
2. Change the map coordinates and description to the correct organisation location, or remove the map if it is not relevant.
3. Review the feedback and changes recorded in `CHANGELOG.md`. The Part 1 non-submission cannot be corrected retroactively.
4. A harmless setup test has requested FormSubmit activation. Open the activation email sent to ST10528937@myemeris.edu.za and confirm the address once. The setup test was not delivered. After confirmation, submissions from both forms can be sent by email. Check spam if the activation message is delayed.

## Responsive screenshot evidence

Responsive browser screenshots of the published portfolio:

| View | Suggested viewport | Screenshot file |
| --- | ---: | --- |
| Desktop | 1529 × 959 | [`desktop.jpg`](docs/screenshots/desktop.jpg) |
| Tablet | 768 × 1024 | [`tablet.jpg`](docs/screenshots/tablet.jpg) |
| Mobile | 390 × 844 | [`mobile.jpg`](docs/screenshots/mobile.jpg) |

The desktop image records the browser window at its available desktop size. The tablet and mobile views use Chrome's responsive preview at the stated viewport dimensions.

## Part Two feedback and corrections

The marker feedback recorded that Part 1 was not submitted and that only one page was present. The multiple-page issue is addressed with separate `enquiry.html` and `contact.html` pages, sharing the responsive stylesheet and JavaScript. A missed Part 1 submission cannot be corrected retroactively. Part 2 rubric marks and corrections are recorded in the changelog.

## References

- MDN Web Docs.. [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids).
- MDN Web Docs.. [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox).
- MDN Web Docs.. [Media queries](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries).
- MDN Web Docs.. [Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images).
- MDN Web Docs.. [CSS specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascade/Specificity).
- W3C Web Accessibility Initiative.. [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/understanding/).
- MDN Web Docs.. [HTML form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation).
- MDN Web Docs.. [JavaScript event handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Events).
- MDN Web Docs.. [The HTML dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).
- Google Search Central.. [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- OpenStreetMap.. [Copyright and attribution](https://www.openstreetmap.org/copyright).
- No client-side libraries, web fonts, or third-party image assets are used. FormSubmit is the external form delivery service.
- The two abstract project illustrations were created for this starter project and are examples to replace with genuine project images if available.
- Font stack: locally available system sans-serif fonts.

## GitHub submission

The project is published in the public repository [khensimckay/project-2](https://github.com/khensimckay/project-2). The live website is available at [khensimckay.github.io/project-2](https://khensimckay.github.io/project-2/). The home page, [enquiry page](https://khensimckay.github.io/project-2/enquiry.html), and [contact page](https://khensimckay.github.io/project-2/contact.html) are included. Submit the repository link to your Learning Management System.







