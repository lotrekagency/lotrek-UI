# Lotrek UI
Lotrek UI is a collection of ready-to-use UI components and micro layouts written in simple HTML & CSS to help you build awesome stuff faster.

Each block is responsive, tested and easy to customize to fit your projects.

To check the demo/docs page please visit:

### https://lotrekagency.github.io/lotrek-UI/


## Table of contents

[Using lotrek UI](#using-lotrek-ui)

[Getting started](#getting-started)

[lotrek-ui.css](#lotrek-ui.css)

[Prerequisities](#prerequisities)

[How to contribute](#how-to-contribute)

[Built with](#built-with)

[Copyright and license](#copyright-and-license)

[TODO](#todo)

### Using lotrek UI
To use this collection of micro-layouts simply copy the HTML code inside `<template>` in the /components/category/name-of-block.vue file, 
and remember to add the lotrek-ui.css stylesheet in your project, which is a very small CSS file (less than 3kb when compressed with GZIP).

### Getting started
The Lotrek UI Kit has ready-to-use HTML blocks with some starter CSS (and JS when needed). 
Each block is written as a component which can be found in the /components/ path.

The demo page is localted in the Demo.vue component file: all you need to do is

`yarn install`

`yarn dev`

Now you should be able to view the demo page on http://localhost:3000/

If you wish to build for production, run:

`yarn build`

/dist/ will have the production files and assets.

### lotrek-ui.css
The CSS bundle file (lotrek-ui.css) to make the raw HTML blocks work is located at the /styles/build/ path.
To build this file simply do the following:

`cd styles`

`yarn css`

### Prerequisities

Node, either npm or yarn. 

rollup.js to build the css dist file.

### How to contribute
To start contributing make your own branch such as feature/myblock starting from master. 
Then add blocks to the collection by making a vue component files in the /components/`<category>` folder. 
Styling is written in SCSS with BEM and mobile-first, so keep naming as clean and faithful to the methodology as possible. All the blocks style files can be found in in the /styles/blocks/`<category>` path, so when adding a new block add a new SCSS file here and remember to import it via main.scss.
Once you're done with your work, submit a pull request.

### Built with
NuxtJS, Vue, rollup.js and some good old HTML, CSS and JS.
Resetting CSS with normalize.css.

### Copyright and license
lotrekagency/lotrek-UI is licensed under the MIT License

### TODO
• Better demo page
• Better readme