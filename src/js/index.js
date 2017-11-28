// here goes all you want import to the index.html through index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TweenLite } from 'gsap';
import 'normalize.css/normalize.css';
import '../sass/style.sass';

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

    const header = $('h1');
    TweenLite.to(header, 1, { opacity: 3, y: 0 });
});

class App extends Component {
    render() {
        return <h1>starter template based on webpack</h1>;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
