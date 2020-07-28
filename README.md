# Coding Challenge using Webpack

## Requirements to run the project

- NodeJs v12.18.3;
- NPM v6.14.6;

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

## Folder structure:

```
├── .babelrc
├── .gitignore
|── package-lock.json
├── package.json
├── README.md
├── webpack.config.js
├── node_modules
├── dist
|   ├── fonts
|   ├── img
│   ├── css
|   |   └── style.css
│   ├── js
|   |   └── main.js
│   └── index.html
└── src
    ├── components
    ├── fonts
    ├── img
    |── pug
    |   └── components
    ├── sass
    |   └── components
    ├── index.pug
    └── app.js
```
