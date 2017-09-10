# webpack-starter
This is a boilerplate code built with WebPack which it could be used as starter project template. It contains Babel to compile ES6 to ES5 as well as CSS and SASS loaders. It comes ready to install dependencies for React and ReactDom. It refreshs automatcly through the scripts from the package.json file. CSS files comes with autoprefixer updated following [caniuse][1].

## description
This template is based on npm package, thus to run it, download the repo to your local computer and then in the folder of your project:
```
$ npm install      //it reads all the dependencies and downloads the node_modules

$ npm start        //it runs the server on [localhost:1234][2]

$ npm run prod     //it compiles the bundle.js to send to production
```
If you find problems to load one of the dependencies:
```
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

                                //install the babel loaders to compile ES6 => ES5

$ npm install webpack webpack-dev-server --save-dev      //install webpack dependency

$ npm install style-loader css-loader --save-dev         //install css and style-loader

$ npm install node-sass sass-loader --save-dev           //install sass-loader
```

## installing `jquery`
```
$ npm install jquery -D   //it installs jquery as dependency
```
In the file where you want to use it, you have to include:
```
import $ from 'jquery'    //this import the library
```

## installing `React`
```
$ npm install react react-dom -D   //it installs React and ReactDom as dependencies
```

#### `new updates comming soon`

[1]: http://caniuse.com/
[2]: http://localhost:1234/
