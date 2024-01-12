type Character = {
    id: number;
    name: string;
    image: string;
    occupation: string;
}

const characters: Character[] = [
    {
        id: 1,
        name: 'Rick sanchez',
        image: 'https://rickandmortyapi.com/api/character/avetar/1.jpeg',
        occupation: 'scientist'
    },
    {
        id: 2,
        name: 'morty smith',
        image: 'https://rickandmortyapi.com/api/character/avetar/2.jpeg',
        occupation: 'student'
    }
];

export const load = async () => {
    return {
        characters
    }
}