import type {Movies} from "./types";
import type {TMDBResponse} from "./types";
import type {MovieDetails} from "./types";


//Recover movies from the API and return them as an array of Movies
export async function MovieRecover(page: number): Promise<Movies[]> {
    const answer= await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`,{
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWFkNTM2MTQ0NjE2NTBjOGRmZDBjZGRkMGIyYzEwYyIsIm5iZiI6MTc4Mjk3NDc3MS41NjMsInN1YiI6IjZhNDYwOTMzYzMzNGQzYzc0NTA1OWU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zWQiguj2VGTWMvaOFaM2yXL_thM70oka1jArTtfV9SM"
    }});
    const data: TMDBResponse = await answer.json();
    return data.results;
}


// Function to search for movies based on a query
export async function searchMovies(query: string, page: number): Promise<Movies[]> {
    const answer = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}`, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWFkNTM2MTQ0NjE2NTBjOGRmZDBjZGRkMGIyYzEwYyIsIm5iZiI6MTc4Mjk3NDc3MS41NjMsInN1YiI6IjZhNDYwOTMzYzMzNGQzYzc0NTA1OWU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zWQiguj2VGTWMvaOFaM2yXL_thM70oka1jArTtfV9SM"
        }
    });
    const data :TMDBResponse = await answer.json();
    return data.results;
}




//obtain the details of a movie by its ID
export async function getMovieDetails(id: number): Promise<MovieDetails> {
    const answer = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWFkNTM2MTQ0NjE2NTBjOGRmZDBjZGRkMGIyYzEwYyIsIm5iZiI6MTc4Mjk3NDc3MS41NjMsInN1YiI6IjZhNDYwOTMzYzMzNGQzYzc0NTA1OWU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zWQiguj2VGTWMvaOFaM2yXL_thM70oka1jArTtfV9SM"
        }
    });
    const data: MovieDetails = await answer.json();
    return data;
}