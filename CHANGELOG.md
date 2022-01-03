## Unreleased

### Fix

- 💫 update stylelint config
- 💫 replace deprecated page Load function parameter with url and params
- **dependencies**: 💫 update packages
- **dependencies**: 💫 update packages
- 💫 update feather icons
- 💫 bump cloud build node version to 16
- **dependencies**: 💫 update packages
- **dependencies**: 💫 update packages

### Refactor

- 🏄‍♂️ update blog post template

## 1.1.0 (2021-12-06)

### Feat

- 🐝 merge update from dev\_\_post_routing branch

### Refactor

- 🏄‍♂️ refactor blog templates for cleaner layout based on @matfantinel post
- 💄 update styling
- **layout**: 🏄🏽‍♂️ place header and footer in their own components

### Fix

- **dependencies**: 💫 update packages
- **dependencies**: update packages
- **bannerimage**: 💫 set loading to eager on banner images
- **bannerimage**: 💫 update BannerImage component to use responive image component
- **dependencies**: 💫 update packages
- **dependencies**: 💫 update packages
- **styles.scss**: 💄 add smooth scrolling to html element
- **package.json**: 💫 update default port
- **config/ebsite**: 💫 update config
- 💫 update blog post template
- **dependencies**: 💫 update packages
- **dependencies**: 💫 update packages
- **dependencies**: 💫 update packages
- **blogpostsummary**: ✅ add prefetch to post links
- **dependencies**: 💫 update package
- 💄 tweak styling
- **post**: ✅ correct typo
- 💫 roll back reading-time to 1.4.0 updated BlogPost.svelte
- **dependencies**: 💫 and update packages

## 1.0.0 (2021-09-08)

### Feat

- ✨ add responsive images with low res placeholders and remove imgix dependency

### Fix

- **dependencies**: 💫 update packages
- **seo**: add missing article SchemaOrg
- **seo**: 🤖 add missing article SchemaOrg
- **dependencies**: 💫 update packages

## 0.5.2 (2021-09-02)

### Fix

- **dependencies**: 💫 update package
- 💫 add editor settings
- 💫 update props returned by load functions
- **.env.example**: 💫 update so works out of box with no Imgix setup
- ✅ revert premature commit

## 0.5.1 (2021-08-31)

### Fix

- **seo**: 🤖 add canonical links to all pages
- **dependencies**: 💫 update packages
- **dependencies**: 💫 update package
- **dependencies**: 💫 update package

## 0.5.0 (2021-08-16)

### Fix

- **seo**: ✅ remove duplicate variable
- **dependencies**: 💫 update package
- 🤗 improve accessibility
- **opengraph**: ✅ correct typo
- **dependencies**: 💫 update packages

### Feat

- ✨ add sitemap for static and SSR builds
- ✨ add sitemap for static and SSR builds

### Refactor

- **blogroll**: 🏄🏽‍♂️ small refactor using Tan Li Hau tip

## 0.4.0 (2021-08-04)

### Feat

- ✨ added static (non-responsive) images as fallback so repo works out of the box without Imgix credentials

### Fix

- **dependencies**: 💫 update packages

## 0.3.1 (2021-07-23)

### Fix

- **dependencies**: 💫 update package
- 🐞 removed extra head wrap on SEO components
- 🔧 removed prerender from load functions, since using adapter-static now

## 0.3.0 (2021-07-22)

### Fix

- **contact**: 🔥 set contact page to prerender
- 💫 updated config
- 🔧 switched to static adapter
- **dependencies**: 💫 update packages
- **.nvmrc**: 💫 set neode version to 14
- **dependencies**: 💫 update package

### Feat

- 🤖 added SEO meta generation

## 0.2.2 (2021-07-08)

### Fix

- 📸 updated BannerImage component to use Imgix to source images
- **post**: 🔧 added prerender to post
- **post**: ✅ linted files and fixed some typos
- **post**: 🔧 removed prerender
- **bannerimage**: 💄 tweaked css to avoid CLS
- 📸 linked blog post images to imgix sources
- **gitignore**: ✅ typo
- **dependencies**: 💫 updated packages

### Refactor

- 🏄🏽‍♂️ removed npm-lockfile sinceusing pnpm now

## 0.2.1 (2021-07-05)

### Fix

- 🚧 revert back to report only csp
- **service-worker**: ✅ fixed typo
- 🔧 removed optional chaining in website config file

## 0.2.0 (2021-07-05)

### Feat

- **pwa**: ✨ added pwa capability
- **error**: ⛔️ added default 404 page

### Fix

- **dependencies**: 💫 upgrade packages
- **dependencies**: 💫 update package
- **dependencies**: 💫 update packages

## 0.1.0 (2021-06-24)

### Fix

- 🤖 updated for better SEO integration
- **dependencies**: 💫 update package
- **dependencies**: 💫 update package:
- **styles**: 💄 added style optimsation for touch screen
- **dependencies**: 💫 update packages:
- **layout**: 🐞 ironed out another issue with layout template for non blog post pages
- **package.json**: reset server ports to 3000
- **layout**: 🐞 fixed call of blog post data in layout for non blog-post
- **dependencies**: 💫 update packages
- **dependencies**: 💫 update packages:
- **dependencies**: 💫 update package
- 🔥 optimised scss prepend data only adding varaibles
- 🔥 optimised CSS removing unused selectors
- **Icon**: 🔥 optimised import of icons
- 💫 updated packages
- **package.json**: reset dev and preview server ports to 3000
- **static**: 🤖 added robots.txt
- 🤗 corrected a11y atribute
- 🔧 made all blog posts static
- 💫 added hooks
- **dependencies**: 💫 update package
- **hooks**: 🚧 remove hooks for debugging
- **blogpostsummary**: 🐞 logic fix
- **index**: 🚧 debugging
- **hooks**: 🔐 debugging csp
- **package.json**: 🚧 dev deps to deps
- **hooks**: 🚧 set CSP to report only
- 🚧 temporarily remove security headers
- **index**: 🔧 changed error behaviour
- **rodneylabcredit**: ✅ fixed typo
- **routes**: 🔧 improved robustness
- **hooks**: ✅ fixed typo
- **netlify**: 🔧 updated netlify.toml
- 🔧 set node version to 12.20
- 🔧 updated netlify.toml
- **routes/slug.json**: 🔧 improved code robustness
- **index**: 🤖 added metadecsription
- **hooks**: ✅ updated config
- **post**: 🖋 removed "blog" from blog post paths

### Refactor

- 🛁 moved blog posts from src/content to src/routes for better integration with svelteKit and improved handling of mdsvex
- **styles**: 🛁 removed all variables from global styles and included in separate file

### Feat

- ✨ added some examples to hooks.js for CSP policy
- **routes/slug**: ✨ prerendering blog posts
- **index**: ✨ prerendering home page
- 🔐 added HTTP security headers
- **bannerimage**: 📸 added responsive banner image component
- **bannerimage**: 📸 added responsive banner image component
- 💄 added styling
