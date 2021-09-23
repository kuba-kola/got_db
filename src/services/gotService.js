
export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllBooks() {
        const res = await this.getResource(`/books/`);
        return res.map(this._transformBook);
    }
    
    async getBook(id) {
        const book = await this.getResource(`/books/${id}/`);
        return this._transformBook(book);
    }
    
    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=5&pageSize=10`);
        return res.map(this._transformChar);
    }
    
    async getCharacter (id) {
        const char = await this.getResource(`/characters/${id}`);
        return this._transformChar(char);
    }
    
    async getAllHouses() {
        const res = await this.getResource(`/houses/`);
        return res.map(this._transformHouse);
    }
    
    async getHouse(id) {
        const house = await this.getResource(`/houses/${id}/`);
        return this._transformHouse(house);
    }

    _transformChar(char) {
        return{
            
            name: char.name || 'no info :(',
            gender: char.gender || 'no info :(',
            born: char.born || 'no info :(',
            died: char.died || 'no info :(',
            culture: char.culture || 'no info :(' 
        }
    }

    _transformHouse(house) {
        return{
            
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestraWeapons: house.ancestraWeapons 
        }
    }

    _transformBook(book) {
        return{
            
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}