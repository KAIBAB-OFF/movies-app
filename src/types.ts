export interface Movies{
    id: number;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    release_date?: string;
}

export interface TMDBResponse {
    results: Movies[];
    page: number;
    total_pages: number;
}

export interface MovieDetails {
    "id": number,
    "title": string,
    "overview": string,
    "runtime": number,
    "genres": Genre[],
    "vote_average": number,
    "poster_path": string,
    "backdrop_path": string
}

export interface Genre {
    id: number;
    name: string;
}
