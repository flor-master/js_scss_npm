import PokeApi from '../utilites/ajax';
import TypeList from './TypeList.js';
import PokeDetail from './PokeDetail.js';

class PokeList extends PokeApi{

    constructor(params) {
        super();
        this.params = params;
        this.limit = 12;
        this.url = 'http://pokeapi.co/api/v1/pokemon/?limit='+this.limit+'&';
    }

    getData(){
        if(this.params.page > 0){
            document.getElementById('more-poke').insertAdjacentHTML('beforeend', this.loader() );
        }
        super.getList(this.url+'&offset='+this.params.page*this.limit).then(
            (val) => {
                this.dataLoad(val);
            },
            (val) => {
                console.log('ERROR!', val);
            }
        )
    }

    dataLoad (val) {
        console.log('SUCCESS', val);
        if ( this.params.page == 0){
            document.getElementById('poke-list').innerHTML = this.tmpl(val.objects);
        } else {
            document.getElementById('poke-list').insertAdjacentHTML('beforeend', this.tmpl(val.objects));
            document.getElementById('more-poke').removeChild( document.getElementById('svg') );
        }
        document.getElementById('more-poke').disabled = false;
        let p = Array.prototype.slice.call(document.getElementsByClassName("poke-list__item"));
        p.map( (el) => {
            el.addEventListener('click', (event) => {
                new PokeDetail({id: event.currentTarget.getAttribute('data-id')}).render();
            } );
        });
    }




    render () {
        this.getData();
        return this.loader();
    }

    loader(){
        return `<svg id="svg" width="40px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring-alt">
                    <circle style="stroke: rgb(163, 163, 163);" cx="50" cy="50" r="40" stroke="#999" fill="none" stroke-width="10" stroke-linecap="round"></circle>
                    <circle stroke-dasharray="91.35999999999999 159.64000000000001" stroke-dashoffset="100.4" style="stroke: rgb(36, 147, 227);" cx="50" cy="50" r="40" stroke="#000" fill="none" stroke-width="6" stroke-linecap="round"></circle>
                    </svg>`;
    }
    tmpl (data) {
        return `
            ${data.map(el => `
                <div class='poke-list__item' data-id='${el.pkdx_id}'>
                    <div class='poke-list__item__img'>
                        <img src='http://pokeapi.co/media/img/${el.pkdx_id}.png' />
                    </div>
                    <h3 class='poke-list__item__title'>${el.name}</h3>
                    ${ new TypeList(el.types).render() }
                </div>
            `).join('')}
        `;
    }
}

export default PokeList;
