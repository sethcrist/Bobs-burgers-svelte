
type Character = {
    id: number;
    name: string;
    image: string;
    occupation: string;
};

const API = 'https://svelte.fun/api/bobs-burgers';

// @ts-ignore
export const load = async ({ fetch }) => {
    const response = await fetch(`${API}/characters`);
    const characters: Character[] = await response.json();

    return {
        characters
    };
};