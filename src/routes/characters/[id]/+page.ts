type detailedCharacter = {
    id: number;
    name: string;
    image: string;
    gender: string
    hairColor: string;
    occupation: string;
    firstEpisode: string;
    voicedBy: string;
    url: string;
    wikiUrl: string;
    relatives: { name: string } [];
};

const API = 'https://svelte.fun/api/bobs-burgers';

// @ts-ignore
export const load = async ({ fetch, params }) => {
    const {id} = params;
    const response = await fetch(`${API}/characters/${id}`);
    const character: detailedCharacter = await response.json();

    return {
        character
    };
};