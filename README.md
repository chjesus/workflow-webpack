# Workflow using Webpack

## Requirements to run the project

- NodeJs => v10.18.0;
- NPM => v6.13.4;

## How to use it:

1. clone the project
2. `cd nameFolder`
3. `npm install`
4. `npm run start`

## Considerations

- Files to work in developement mode are in: `src`
- The webpack.config.js file is to configure webpack.

## Scripts created

- Delete and create the project in production:

  - It starts with: `npm run buid'`

- start a local server for development:

  - It starts with: `npm run start`

- Deploy to gh-pages:
  - edit package.json: `homepage: url`
  - it starts with: `npm run deploy`

## Folder structure:

```
├── .babelrc
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── webpack.config.js
├── node_modules
├── dist
│   ├── fonts
│   ├── img
│   ├── css
│   │  └── style.css
│   ├── js
│   │   └── main.js
│   └── index.html
└── src
    ├── components
    ├── fonts
    ├── img
    ├── sass
    │   ├── base
    │   ├── components
    │   ├── layouts
    │   ├── themes
    │   ├── utilities
    │   ├── views
    │   └── style.scss
    ├── index.html
    └── main.js
```
