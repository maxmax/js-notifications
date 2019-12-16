### Demo
* [FE https://maxmax.github.io/js-bp-notifications/](https://maxmax.github.io/js-notifications/)
* [BE https://peaceful-escarpment-74489.herokuapp.com/](https://peaceful-escarpment-74489.herokuapp.com/)

### Project structure

````
build/
src/
|- index.js _______________________________ # Application entry
|- components/notificationComponent/index.js _________ # Application components
|- containers/notifications/index.js _________ # Application containers
|- containers/pushNotifications/index.js _________ # Application containers
|- sw.js _______________________________ # Service Worker entry
|- style.scss _____________________________ # Application style using css modules


webpack
|- webpack.config.js _______________________ # common config
|- paths.js ________________________________ # webpack paths needed
|- webpack.common.js _______________________ # common webpack config
|- webpack.dev.js __________________________ # development config
|- webpack.prod.js _________________________ # production config
|- webpack.obfuscated.js _________________________ # obfuscated config

server
|- server.js _______________________ # common
````

### Installation

1- Clone repo

2- `yarn` or `npm install` to install npm packages

3- start dev server using `yarn start` or `npm start`.

3- build and bundling your resources for production `yarn build`.

4- Unit testing `yarn test`.

### Server Push

1- ./node_modules/.bin/web-push generate-vapid-keys
2- add PUBLIC_VAPID_KEY and PRIVATE_VAPID_KEY in env
3- yarn start


### Configuration
* Webpack Config paths based on your file structure you can go to `webpack/paths.js` and modify the source and file names based on your need.
* `webpack/webpack.common.js` config common webpack for both dev and production environments.
* webpack/webpack.dev.js config webpack for dev environment.
* `webpack/webpack.prod.js` config webpack for production environment.
* `/webpack.config.js` main webpack config that merge common and webpack environment based config.
* Prettier config `/.prettierc`.
* Browsers list config `/.browserslistrc`.


#### Technologies used


* [Webpack 4](https://github.com/webpack/webpack)
* [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
* [Jest](https://github.com/facebook/jest) [ Unit test]
* [Eslint](https://github.com/eslint/eslint/) with airbnb config
* [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
* [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader)
* [CSS modules](https://github.com/css-modules/css-modules) [ Isolated style based on each component ]
* [Browsers list](https://github.com/browserslist/browserslist) [ Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env ]
* [Webpack dev serve](https://github.com/webpack/webpack-dev-server)

#### Docs


* [Notification](https://developer.mozilla.org/ru/docs/Web/API/notification)
* [Push API](https://developer.mozilla.org/ru/docs/Web/API/Push_API)
* [Service Worker API](https://developer.mozilla.org/ru/docs/Web/API/Service_Worker_API)
