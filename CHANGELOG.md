# Changelog

## 2026-11-08 — Part Three: functionality, forms, SEO, and publishing

- Personalised the portfolio with the name Khensani Maluleke and a student bio grounded in the project brief; replaced sample project placeholders with descriptions of the completed portfolio and its JavaScript enhancements.
- Added responsive project search with live result counts, status announcements, and filtering across project titles, descriptions, and keywords.
- Added keyboard-operable project image lightboxes using the native dialog element, including Escape, close button, backdrop click, and visible focus styling.
- Added the interactive OpenStreetMap embed and map link. It is labelled as a Johannesburg example and must be changed to the organisation's real location.
- Added the enquiry form with name, email, service, and date fields; native validation and client-side response summary. It does not transmit or store data because this project has no backend.
- Added the contact form with name, email, message type, and message validation. Submission prepares a message to the user-provided recipient in the visitor's configured email app; delivery depends on the visitor reviewing and sending it.
- Added live current year, title, description, keywords, canonical and robots metadata, `robots.txt`, and `sitemap.xml`.
- Applied Part 2 feedback: the marker noted that only one page was present, so separate `enquiry.html` and `contact.html` pages were added. Both pages use the shared stylesheet, shared JavaScript, responsive navigation, page-specific metadata, and sitemap entries.
- Recorded the marker's note that Part 1 was not submitted. This cannot be remedied retroactively in the Part 3 code; no claim has been made that it was submitted.
- The rubric recorded 2/10 for external stylesheet use, with the comment “Only one page present.” The new enquiry and contact pages now use the shared stylesheet.
- Other recorded Part 2 scores included: default CSS 2/5, layout 2/5, typography 2/5, breakpoints 5/10, responsive images 0/5, README 2/5, changelog 2/5, references 2/5, and descriptive commits 2/5. This update retains responsive image sources, adds per-page SEO, documents implementation and setup, expands references and changelog, and is published as separate descriptive commits.
- Navigation scored 4/5 and pseudo-classes 4/10; responsive navigation is shared across all three pages and identifies the active page, while hover, focus, and lightbox states are styled.
- Updated README with the features, privacy/security notes, setup items, references, and known static-hosting limits.
- Captured genuine desktop (1529 × 959), tablet (768 × 1024), and mobile (390 × 844) responsive previews and added them under `docs/screenshots/` with README links.
- Connected enquiry and contact forms to FormSubmit's AJAX endpoint. Added required consent, clear delivery messages, and a spam honeypot. FormSubmit requires one first submission and an email confirmation before it will deliver messages.

## 2026-10-05 — Part Two: CSS styling and responsive design

- Rebuilt the page with a clear content hierarchy, responsive sections, and a consistent colour and typography system.
- Linked the external stylesheet as `css/style.css`.
- Added tablet and mobile breakpoints using CSS Grid, Flexbox, and relative units.
- Added responsive project artwork with WebP/JPEG sources, `srcset`, `sizes`, intrinsic dimensions, and lazy loading.
- Added keyboard, reduced-motion, dark colour-scheme, increased-contrast, and forced-colour support.
- Added this README, a Part Two reference list, and a responsive screenshot evidence checklist.

## Part One mark feedback

No mark feedback was included in the materials available for this revision. Add the specific feedback and the corresponding correction here when it is provided; do not infer or invent feedback.

