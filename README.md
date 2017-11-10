# WebPack-starter

This is a boilerplate code built with WebPack which it could be used as starter project template. It contains Babel to compile *ES6* to *ES5* as well as *CSS* and *SASS* loaders. It comes ready to install dependencies for *React* and *ReactDom*. It refreshs automatically through the scripts from the package.json file. CSS files comes with autoprefixer updated following [caniuse][1].

## How to use it

This template is based on *npm package*, thus to run it, download the repo to your local computer and then in the folder of your project:

    $ npm install  

    $ npm start

The project will load on the server localhost:3000 using *BrowserSync*. Other usefull commands to know:

```
$ npm run build                 It runs WebPack as the most simple way to compile
$ npm run watch                 It runs WebPack in watch mode
$ npm run prod                  it compiles the bundle.js to send to production
```

## Modules installed

  + Babel, babel-core, babel-loader, babel-preset-env, babel-preset-react

  + Browser-sync, browser-sync-webpack-plugin

  + Style-loader, css-loader, sass-loader, node-sass.

  + Normalize.css

  + Postcss-loader, lost, rucksack-css, cssnano, autoprefixer, browserslist.

  + Extract-text-webpack-plugin.

  + Webpack-dev-server.

  + Jquery.

  + React, ReactDom.


## installing Isotope


    $ npm install isotope-layout --D   //it installs Isotope plugin as dependency

Inside of 'webpack.config.js', we have to add:

    resolve: {
            alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout'
          }
        }

In the index.js file you have to add:

    const iso = new Isotope( '.grid', {
      // options...
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // set to the element
        columnWidth: '.grid-sizer',
      }
    });


[1]: http://caniuse.com/
