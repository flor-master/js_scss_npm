import PokeApi from '../utilites/ajax.js';

class PokeDetail extends PokeApi {
    constructor(params) {
        super(params);
        this.params = params;
        this.url = 'http://pokeapi.co/api/v1/pokemon';
    }

    render () {

        super.getList(this.url+'/'+this.params.id).then(
            (val) => {
                document.getElementById('poke-detail').innerHTML = this.tmpl(val);
            },
            (val) => {
                console.log('ERROR!', val);
            }
        )
    }

    tmpl (poke) {
        return `
            <div class='poke-detail__item'>
                <div class='poke-detail__item__img'>
                    <img src='http://pokeapi.co/media/img/${poke.pkdx_id}.png' />
                </div>

            </div>
        `;
    }

}

export default PokeDetail;
