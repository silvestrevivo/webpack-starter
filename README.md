# webpack-starter
This is a boilerplate code built with WebPack which it could be used as starter project template. It contains Babel to compile ES6 to ES5 as well as CSS and SASS loaders. It comes ready to install dependencies for React and ReactDom. It refreshs automatcly through the scripts from the package.json file.

## description
This template is based on npm package, thus to run it, download the repo to your local computer and then in the folder of your project:
```
$ npm init //it reads all the dependencies and downloads the node_modules

$ npm start //it runs the server on http://localhost:1234/

$ npm prod //it compiles the bundle.js to send to production
```
If you find problems to load one of the dependencies:
```
$ npm install react react-dom //install the react and react-dom dependencies

$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
  //install the babel loaders to compile ES6 => ES5

$ npm install webpack webpack-dev-server --save-dev //install webpack dependencies

$ npm install style-loader css-loader --save-dev //install css and style-loader

$ npm install node-sass sass-loader --save-dev //install sass-loader
```

## installing `jquery`
#### `new updates comming soon`
