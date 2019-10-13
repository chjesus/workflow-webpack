# Webpack Workflow

## Este Webpack workflow permite
- Carga y compilar Pug a HTML y minificarlo
- Carga y compilar SCSS a CSS y minificarlo
- Carga tipografias/fonts woff, woff2, ttf & eot
- Carga imagenes Gif, jpg y png y minifica el peso
- Carga archivos SVG

## Requerimientos

- NodeJs > v10.x;
- NPM > v6.4;

## Como usarlo?:

1. Clonar el Proyecto
2. Use ``cd workflow-webpack``
3. ``npm install``
4. ``npm start``

## Consideraciones
- La entrada de tus archivos está dentro de la carpeta: `src`
- El archivo webpack.config.js es para configurar webpack.

## Instalar dependencias de node.js
- Instalar dependencias de node.js: `npm install`

## Scripts creados para dev
- Borra y crea el proyecto en produccion:
  - Se inicia con:  `npm run buid'`

- Iniciar un servidor local para desarrollo:
  - Se inicia con: `npm start`
 
 ## Estructura de la carpeta:

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
