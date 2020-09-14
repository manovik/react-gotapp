export default class GotService {
  constructor(){
    this._apiBase = 'https://www.anapioficeandfire.com/api'
  }
  
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`)
    }

    return await res.json();
  }

  async geAllCharacters(){
    const res = await this.getResource('/characters?page=5&pageSize=10');
    return res.map(this._transormCharacter)
  }

  async getCharacter(id){
    const char = await this.getResource(`/characters/${id}`);
    return this._transormCharacter(char);
  }

  async getAllBooks(){
    const res = await this.getResource('/books');
    return res.map(this._transormBook);
  }

  async getBook(id){
    const res = await this.getResource(`/books/${id}`);
    return this._transormBook(res);
  }
  
  async getAllHouses(){
    return this.getResource('/houses')
  }

  async getHouse(id){
    return this.getResource(`/houses/${id}`)
  }  

  _transormCharacter(char){
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture
    }
  }

  _transormHouse(house){
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    }
  }

  _transormBook(book){
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released
    }
  }
}