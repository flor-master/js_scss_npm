import PokeApi from './utilites/ajax';
import Helpers from './utilites/helpers';
import HTML from './tmpl.js';

var url = 'http://pokeapi.co/api/v1/pokemon/?limit=12&offset=0';


window.addEventListener('popstate', function(event) {
  updateContent(event.state)
});

console.log('qqqqq');


console.log( new Helpers().getUrl('offset'));
//document.getElementById('app').innerHTML = new HTML().render();

PokeApi.getList(url).then(
    (val) => {
        document.getElementById('app').innerHTML = new HTML(val.objects).render();

        document.getElementById('morePoke').addEventListener('click', (event) => {
            console.log('click');
            history.pushState({'page_id': 1}, '', '/page/2');

        }, false);

    },
    (val) => {
        console.log('ERROR -->', val);
    }
);
