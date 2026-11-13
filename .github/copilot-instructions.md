# Repository instructions

## Commands

- Use Node.js 22.12.0 or newer (`package.json`); the deployment workflow currently uses Node.js 24.
- Install the locked dependency set with `npm ci`.
- Build the production site with `npm run build`. This is the available validation command; it type-checks and generates `dist/`.
- Start local development with `astro dev --background`; manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.
- Preview an existing production build with `npm run preview`.
- There are no test or lint scripts, test files, or single-test command. Do not invent test-runner selectors.

## Architecture

- This is a static Astro 7 site styled with Tailwind CSS v4 through the Vite plugin. `src/pages/index.astro` serves German at `/`; `src/pages/en/index.astro` serves English at `/en/`.
- Both pages compose the same `SiteHeader`, `Hero`, and `OpeningHours` components inside `src/layouts/main.astro`. Put site-wide document metadata, alternate-language links, and global stylesheet loading in the layout; keep page files as locale-specific composition entry points.
- `src/i18n/ui.ts` is the canonical translation catalog and defines `Lang` and `UIKey`. `src/i18n/utils.ts` owns locale detection, path conversion, and the typed `useTranslations()` accessor. The Astro i18n configuration in `astro.config.mjs` makes `de` the unprefixed default and prefixes other locales.
- `src/styles/global.css` defines Tailwind theme tokens, which become utilities such as `bg-brand` and `text-ink`. Reuse these semantic tokens instead of inserting unrelated color values in components.
- Deployments run on pushes to `main`: GitHub Actions executes `npm ci` and `npm run build`, then uploads `dist/` via explicit FTPS. Preserve the static-output deployment model.

## Repository conventions

- Pass a required typed `lang: Lang` prop to localized components and obtain copy through `useTranslations(lang)`. When adding a UI key, add its German source value and its English `Record<UIKey, string>` value in the same change.
- Generate internal locale-aware URLs with `getLocalizedPath()` rather than hardcoding `/en` paths. This preserves the default locale’s unprefixed URLs and keeps language switching on the current page.
- In Astro component frontmatter, define a `Props` interface, destructure `Astro.props`, and use `class:list` for conditional classes. `Button.astro` is the shared control for button/link CTA styling.
- Keep accessible semantics present in the components: labeled regions, heading IDs matching `aria-labelledby`, table captions/scopes, and visible focus styles. The layout’s `#main` skip link requires page content to retain the `main id="main"` target.
- The TypeScript configuration is strict. Existing TypeScript and Astro files use tabs for indentation and single quotes.

## Accessibility

- All content, navigation, controls, and functionality must be accessible and usable with screen readers, in every supported language.
- Prefer semantic HTML and native controls; give interactive elements clear accessible names and expose their roles, states, and changes. Provide meaningful text alternatives for non-text content, and hide purely decorative content from assistive technology.
- Ensure dynamic updates are announced when appropriate, and preserve a logical reading and keyboard focus order. Do not rely on visual styling alone to communicate information.

## Responsive design

- Ensure all content and functionality remain usable across screen sizes and devices, including phones, tablets, and desktops.
- Use flexible layouts and appropriately sized touch targets; prevent unintended horizontal overflow and verify changes at narrow and wide viewport sizes.

## Documentation

Consult the Astro documentation before changing the corresponding area:

- Routing, dynamic routes, or middleware: https://docs.astro.build/en/guides/routing/
- Astro components: https://docs.astro.build/en/basics/astro-components/
- Framework components: https://docs.astro.build/en/guides/framework-components/
- Content: https://docs.astro.build/en/guides/content-collections/
- Styling and Tailwind: https://docs.astro.build/en/guides/styling/
- Internationalization: https://docs.astro.build/en/guides/internationalization/
