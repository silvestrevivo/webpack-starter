// here goes all you want import to the index.html through index.js
/* jslint browser: true */ /* global  $ */
import '../sass/style.sass';
import 'normalize.css/normalize.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

$(document).ready(() => {
    const parameters = {
        first: 'template',
        second: 'webpack',
    };

    const { first, second } = parameters;

    const sayHi = () => {
        console.log(`This is an starter ${first} based on ${second}
    with sass-loader, babel-loader and automatic browser refresh.`);
    };

    sayHi();
});

class App extends Component {
    render() {
        return <h1>starter template based on webpack</h1>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
