# vue-starter

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```


### How to set up Jest and Vue Test Utils for unit testing

At the time of writing this article RdVue was built with **Vue 2.6.12** and because of this, specific versions of these packages will be required.

To get started with Jest install with 
```
npm install --save-dev jest@28
```

You will need Babel Jest and a few other dependencies in order to use ES6 features
```
npm install --save-dev babel-jest@28 @babel/core @babel/preset-env
```

You will now need to configure jest to use babel-jest as a transform for JS files.

Create a file called `jest.config.js` in the root of the project and add the following contents. This is will let Jest know how to interpret the JS and ES6 features and tells Jest to ignore tests found in the node_modules and .rdvue folder. 

```
/** @type {import('jest').Config} */

module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "json"],
  transform: {
    "\\.js$": "babel-jest"
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ["<rootDir>/.rdvue/", "<rootDir>/node_modules/"]
};

```

Also update the babel.config.js file to add the babel/preset-env to the presets array. 

```
module.exports = {
  presets: [
    '@vue/app',
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ]
}
```


**Typescript**

To allow for Typescript support, install the ts-jest package and add it as a transform for ts files. 

```
npm install --save-dev ts-jest@28
```

Update the moduleFileExtensions array and transform object in the Jest config file to add the ts extension and ts-jest transformer. 

```
moduleFileExtensions: ["js", "ts", "json"]
```

```
"\\.ts$": "ts-jest"
```


At this point the Jest config file should look like below. 

```
/** @type {import('jest').Config} */

module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "\\.js$": "babel-jest",
    "\\.ts$": "ts-jest"
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ["<rootDir>/.rdvue/", "<rootDir>/node_modules/"]
};
```


Now that Jest is now set up to run unit tests for JS and TS, now to add support for Vue components. To do this, install the [Vue Test Utils](https://github.com/vuejs/vue-test-utils/) package for Vue 2 and it's peer dependency `vue-template-compiler` whose version should match the version of Vue being used. 

```
npm install --save-dev @vue/test-utils@1 vue-template-compiler@2.6.12
```

For versions of Jest greater than 28, JSDom will need to be installed manually to be used as the test environment. 

```
npm i --save-dev jest-environment-jsdom@28
```

In order for Jest to be able to test the `.vue` files, add the vue2-jest Transformer and Babel Core bridge.

```
npm install --save-dev @vue/vue2-jest@28 babel-core@7.0.0-bridge.0
```

Update the Jest config file to add the `vue` extension, set the vue transformer for Vue files, update the test regex to specify the tests files and update the test environment that Jest will use. 

The final `jest.config.js` file will look like the file below. 

```
/** @type {import('jest').Config} */

module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "json", "ts", "vue"],
  transform: {
    "\\.js$": "babel-jest",
    "\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue2-jest"
  },
  testEnvironment: 'jsdom',
  testRegex: ['.*\\.spec\\.js$'],
  testMatch: undefined,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ["<rootDir>/.rdvue/", "<rootDir>/node_modules/"]
};
```

After these configurations, update the package.json unit test script to run jest to execute tests. 

```
"test:unit": "jest --no-cache --watchAll"
```

The `--watchAll` flag is optional and allows jest to keep running the tests when test files are updated. 


**NOTE**
If there is any JSON parsing errors complaining about the tslint.json or tsconfig.json files, use [JSON Lint](https://jsonlint.com/) to debug the files. 





### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# rd-buefy [Plugin] 

### Prerequisites

Create a **_.npmrc_** file in the root of your generated project with with following:

`@realdecoy:registry=https://npm.pkg.github.com`

`//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_AUTH_TOKEN_HERE>`

Your token should have the following scopes:  
- read:packages

# Design System

### Prerequisites

Create a **_.env.local_** file in the root of the Design System folder (found in your node_modules) with the following:

`GIT_TOKEN=<PERSONAL_ACCESS_TOKEN>`

### Serving Design System App

<!-- > To serve the design system web app run the following command:  -->
``` 
npm run serve:design-system
```


