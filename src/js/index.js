//here goes all you want import to the index.html through index.js
import '../sass/style.sass';

let parameters = {
  first: 'template',
  second: 'webpack'
};

const {first, second} = parameters;

const say_Hi = () => {
  console.log(`This is an starter ${first} based on ${second}
  with sass-loader, babel-loader and automatic browser refresh.`);
}

say_Hi();
