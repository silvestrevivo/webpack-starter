# WebPack-starter

This is a code boilerplate built with WebPack which it could be used as starter project template. It
contains Babel to compile _ES6_ to _ES5_ as well as _CSS_ and _SASS_ loaders. It comes ready to
install dependencies for _React_ and _ReactDom_. It refreshs automatically through the scripts from
the package.json file and _BrowserSync_ plugin. CSS files come with autoprefixer updated following
[caniuse][1] and using _Postcss_. It comes provided with ESLint and Prettier too, following rules
and stylesheet of [Airbnb][2].

## How to use it

This template is based on _npm package_, thus to run it, download the repo to your local computer
and then in the folder of your project:

    $ npm install

    $ npm start

The project will load on the server localhost:3000 using _BrowserSync_. Other usefull commands to
know:

```
$ npm run build                 It runs WebPack as the most simple way to compile
$ npm run watch                 It runs WebPack in watch mode
$ npm run prod                  it compiles the bundle.js to send to production
```

## Modules installed

* Babel, babel-core, babel-loader, babel-preset-env, babel-preset-react

* Browser-sync, browser-sync-webpack-plugin

* Style-loader, css-loader, sass-loader, node-sass.

* Normalize.css

* Postcss-loader, lost, rucksack-css, cssnano, autoprefixer, browserslist.

* Extract-text-webpack-plugin.

* Webpack-dev-server.

* Jquery.

* React and ReactDom.

* ESLint and Prettier.

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
[2]: https://github.com/airbnb/javascript
