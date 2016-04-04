import PokeApi from '../utilites/ajax';
import TypeList from './TypeList.js';

class PokeList extends PokeApi{

    constructor(params) {
        super(params);
        this.url = 'http://pokeapi.co/api/v1/pokemon/?limit=12&';
        this.params = params;
        this.getData(this.url + 'offset=' + this.params.page )
    }

    getData() {
        super.getList(this.url+'&offset='+this.params.page).then(
            (val) => {
                console.log('SUCCESS', val);
                document.getElementById(this.params.id).innerHTML = this.render(val.objects);
                document.getElementsByTagName('MoreBtn')[0].;
            },
            (val) => {
                console.log('ERROR!', val);
            }
        )
    }
    render(data) {
        return `
                ${data.map(el => `
                    <div class='poke-list__item'>
                        <div class='poke-list__item__img'>
                            <img src='http://pokeapi.co/media/img/${el.pkdx_id}.png' />
                        </div>
                        <h3 class='poke-list__item__title'>${el.name}</h3>
                        ${  new TypeList(el.types).render() }
                    </div>
                `).join('')}    
                `;
    }
}

export default PokeList;
