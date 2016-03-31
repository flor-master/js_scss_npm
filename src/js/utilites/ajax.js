class PokeApi {
    constructor () {
        console.log('[PokeApi] Constructor');
    }

    getList (url) {
        console.log(url);
        return new Promise(
            (resolve, reject) => {

              let request = new XMLHttpRequest();
              request.open('GET', url, true);
              request.send();
              request.onload = function() {
                if (this.status >= 200 && this.status < 400) {
                  resolve(JSON.parse(this.response));
                } else {
                  reject (this.status);
                }
              };

            }
        );
    }

}

export default new PokeApi();
