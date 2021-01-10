export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };
    getAllCharachters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getCharachter(id){
        return this.getResource(`/characters/${id}`);

    }
}

const got = new GotService();

got.getAllCharachters()
    .then(res => {
        res.forEach(item => console.log(item.name));
    });


got.getCharachter(130)
    .then(res => console.log(res));