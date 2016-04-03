class TMPL {
    constructor(params) {
        this.params = params;
    }

    render() {
        return `<div class='poke-list'>
                    ${this.params.map(el => `
                        <div class='poke-list__item'>
                            <div class='poke-list__item__img'>
                                <img src='http://pokeapi.co/media/img/${el.pkdx_id}.png' />
                            </div>
                            <h3 class='poke-list__item__title'>${el.name}</h3>
                            <div class='poke-list__item__types type-list'>
                                ${ el.types.map(type => `
                                    <span class='type-list__item'>${type.name}</span>
                                `).join('') }
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class='more' id='morePoke'>Load More</button>
                `;
    }
}
export default TMPL;
