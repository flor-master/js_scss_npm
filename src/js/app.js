import PokeApi from './utilites/ajax';
import HTML from './tmpl.js';

var url = 'http://pokeapi.co/api/v1/pokemon/?limit=12';



//document.getElementById('app').innerHTML = new HTML().render();






PokeApi.getList(url).then(
    (val) => {
        document.getElementById('app').innerHTML = new HTML(val.objects).render();
        console.log('-->', val.objects[0]);
    },
    (val) => {
        console.log('ERROR -->', val);
    }
);
