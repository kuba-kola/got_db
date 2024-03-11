const GotService = () => {
    const apiBase = 'https://www.anapioficeandfire.com/api';

    const getResource = async (url) => {
        const res = await fetch(`${apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    };

    const getAllBooks = async () => {
        const res = await getResource(`/books/`);
        return res.map(transformBook);
    };

    const getBook = async (id) => {
        const book = await getResource(`/books/${id}/`);
        return transformBook(book);
    };

    const getAllCharacters = async () => {
        const res = await getResource(`/characters?page=5&pageSize=10`);
        return res.map(transformChar);
    };

    const getCharacter = async (id) => {
        const char = await getResource(`/characters/${id}`);
        return transformChar(char);
    };

    const getAllHouses = async () => {
        const res = await getResource(`/houses/`);
        return res.map(transformHouse);
    };

    const getHouse = async (id) => {
        const house = await getResource(`/houses/${id}/`);
        return transformHouse(house);
    };

    const isSet = (data) => {
        if (data) {
            return data
        } else {
            return 'no info :('
        }
    };

    const extractId = (item, house) => {
        const idRegExp = /\/([0-9]*)$/;
        if (house && item.overlord) {
            return item.overlord.match(idRegExp)[1];
        }
        return item.url.match(idRegExp)[1];
    };

    const transformChar = (char) => {
        return {
            id: extractId(char),
            name: char.name || "-",
            gender: char.gender || "-",
            born: char.born || "-",
            died: char.died || "-",
            culture: char.culture || "-",
            selectable: char.url,
        }
    };

    const transformHouse = (house) => {
        return {
            id: extractId(house, true),
            name: house.name || "-",
            region: house.region || "-",
            words: house.words || "-",
            titles: house.titles || "-",
            overlord: house.overlord || "-",
            ancestraWeapons: house.ancestraWeapons || "-",
            selectable: house.overlord,
        }
    };

    const transformBook = (book) => {
        return {
            id: extractId(book),
            name: book.name || "-",
            numberOfPages: book.numberOfPages || "-",
            publisher: book.publisher || "-",
            released: book.released || "-",
            selectable: book.url,
        }
    };

    return {
        getResource,
        getAllBooks,
        getBook,
        getAllCharacters,
        getCharacter,
        getAllHouses,
        getHouse,
        isSet
    };
};

export default GotService;
