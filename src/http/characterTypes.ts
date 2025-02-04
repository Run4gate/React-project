/**
 * Схема запрашиваемого объекта персонажа.
 */
export type CharacterSchema = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: string;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

/**
 * Схема ответа API на запрос всех или отфильтрованных
 * персонажей. В поле _info_ свойства _next_ и _prev_ 
 * хранят ссылки на предыдущую и следующую страницы
 * соответственно. 
 */
export type CharacterResponse = {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: CharacterSchema[];
}

export type TypeFilters = {
    name: string;
    status?: '' | 'alive' | 'dead' | 'unknown';
    gender?: '' | 'male' | 'female' | 'genderless' | 'unknown';
    date?: string
    id?: string
}