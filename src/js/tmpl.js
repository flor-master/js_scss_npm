class TMPL {
    constructor(params) {
        //console.log('params', params);
        this.params = params;
        this.name = 'Poke!';
    }

    html(data, data2){
        console.log(data, data2);
        return data[0] + data2 + data[1];
    }
    render() {
        return `<div>${this.params.map(el => this.html`<h3>${el.name}</h3>`)}</div>`;
    }
}
export default TMPL;
