//import Helpers from './utilites/helpers';
import PokeList from './components/PokePage';



new PokePage({
    id: 'app',
    page: 0
});

// class PokeList {
//     constructor () {
//         this.page = 0;
//     }
//     create () {
//
//         PokeApi.getList(url+'&offset='+this.page).then(
//             (val) => {
//                 document.getElementById('app').innerHTML = new HTML(val.objects).render();
//                 document.getElementById('morePoke').addEventListener('click', (event) => {
//                     this.page++;
//                     PokeApi.getList(url+'&offset='+this.page).then(
//                         (val) => {
//                             document.getElementById('app').innerHTML = new HTML(val.objects).render();
//                         },
//                         (val) => {
//                             console.log('ERROR -->', val);
//                         }
//                     );
//                 }, false);
//             },
//             (val) => {
//                 console.log('ERROR -->', val);
//             }
//         );
//
//
//     }
// }

//new PokeList().create();
