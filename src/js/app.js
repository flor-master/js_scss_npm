import PokeApi from './utilites/ajax';
//import HTML from 'tmpl.tmpl';

var url = 'http://pokeapi.co/api/v1/pokemon/?limit=12';

//console.log('-->', HTML);

PokeApi.getList(url).then(
  (val) => {
    console.log('-->', val);
  },
  (val) => {
    console.log('ERROR -->', val);
  }
);
