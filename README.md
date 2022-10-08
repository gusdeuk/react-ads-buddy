![El Pixelista logo](https://www.elpixelista.com/xtras/cdn/banner1.png)

# ADS BUDDY
Welcome to ADS Buddy.
Here you will find tutorials, documentation, assets, and everything you may need in order to master the Apollo Design System.

## General Built-In Features > Built on Rocket Starter Boilerplate
- Base reference App configuration made with Create React App / Webpack / React 18+
- Well organized and intuitive folder structure
- Multiple layout support to display different Views / Navigation components
- Content Pages / Views, Error pages, Components, Simple Redux Store, Styles, custom SVG icon compoinents and more
- PWA basic setup ready / manifest / iconset / workbox configuration
- CSS Animation Libs + React Transition events working together, supporting both custom CSS In/Out animations styles and events
- Simple JSX functional components with JS (TSX and typescript available)

- Prettier basic configuration (.prettierrc)
- Dot .env file for react global variables and other CRA options

> https://create-react-app.dev/
>
> https://reactcommunity.org/react-transition-group/
>
> https://web.dev/learn/pwa/

---

## Styling Features
- 100% CSS-in-JS free! We use just standard classes using  CSS / SCSS files
- Angular / Vue style friendly scoped external SCSS / CSS files
- CSS Modules Library: We use this dependency to avoid classnames conflicts adding smart compiled CSS classes scoping everithing at component level
- Global SCSS definitions available to declare non-scoped classes(available across the whole DOM, like fonts, etc) in a organized and safer way. Always using SCSS
- Basic global helper classes and CSS utilities
- **We do not use CSS-in-JS. See You Tube link below if you are interested why.**

> https://github.com/css-modules/css-modules
>
> https://www.youtube.com/watch?v=NMiEREulVLc
---

## Routing Related Features
- React Router **[v5]**
- Multiple layouts based on nested routes
- Basic guard rotection for routes: Example reading isLogged state stored globally + navigation reject based on that state
- Webpack code splitting in chunks: Separated compiled CSS /JS per each route
> https://v5.reactrouter.com/

---

## Helpers and Dependencies
- React Device Detect Utils for conditional renderings based on device type
- Axios Http Client Library
- Testing utilities with React Testing Library
- PWA features available using Workbox service worker library, a set of modules that simplify common service worker routing and caching
- Redux Toolkit for global state management using selector/dispatch
- React Chartjs-2 using ChartsJs **[v3.8]**
- Faker Js: Generate fake but realistic data for testing and development
- React Teleporter utility to move React components in the same React tree
- React Lottie Animation Player: LottieFiles.com provides all the tools that you need to create, edit, test and display vector based animations.

> https://redux-toolkit.js.org/
>
> https://react-chartjs-2.js.org/
>
> https://developer.chrome.com/docs/workbox/
>
> https://testing-library.com/docs/react-testing-library/intro/
>
> https://axios-http.com/
>
> https://github.com/mifi/react-lottie-player
>
> https://fakerjs.dev/
>
> https://github.com/duskload/react-device-detect
>
> https://github.com/gregberge/react-teleporter

---

## Miscelaneous Stuff
- New Smart PWA Install detection events component: messaging for good PWA engage user flows
- New Web App Update detection events component: messaging for easy refresh / clean browser cache
- New Mobile Bottom Nav Component as responsive addition working side by side with ADS Navigation component
- Base web font family embedded across the DOM tree, ready to use at trhe root level
- Latest React Material UI (MUI) component library **[v5]**
- MUI theme configuration file + SCSS structure to override styles as needed
- MUI custom styling strategy: base theme config + global SCSS overrides structure using component classes (Stylyng using Emotion for MUI is also installed just in case)
- Apollo ADS React Library (Custom UI Library with style customizations over several MUI v4 components)

> https://mui.com/
>
> https://ads-react.apollo.iqvia.io/


---
## Demo URL
[https://ads-buddy.web.app](https://ads-buddy.web.app/)