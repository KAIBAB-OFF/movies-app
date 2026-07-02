import type {Movies} from "./types";
import type {MovieDetails} from "./types";

import { getMovieDetails } from "./api";


export function printSkeletons() {
    const FilmsContainer = document.getElementById("films-container");
    if (!FilmsContainer) {
        return;
    }
    FilmsContainer.innerHTML = "";  
    for (let i = 0; i < 12; i++) {
        const divSkeleton = document.createElement("div");
        divSkeleton.innerHTML = `<div class="skeleton-img"></div> <h2 class="skeleton-texte"></h2> <p class="skeleton-texte"></p> <p class="skeleton-texte"></p>`;
        divSkeleton.className = "skeleton";
        FilmsContainer.appendChild(divSkeleton);
    }
}


//print the movies in the HTML
export function displayMovies(movies: Movies[]): void {
    const container = document.getElementById("films-container");
    if (!container) 
    {
            return;
    }
    movies.forEach(movie => {
        const filmElement = document.createElement("div");
        filmElement.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"> <h2>${movie.title.toUpperCase()}</h2> <p>${movie.overview}</p> <p>Rating: ${movie.vote_average}</p>
        <p>Release Date: ${movie.release_date ?? "Date non disponible"}</p>`;
        filmElement.className = "film";
        container.appendChild(filmElement);

        filmElement.addEventListener("click", async () => {
            const movieDetails = await getMovieDetails(movie.id);
            showMovieDetail(movieDetails);
        });
    });
}



//print the details of a movie in the HTML
export function showMovieDetail(movie: MovieDetails): void {
    const vueListe = document.getElementById("vue-liste");
    const vueDetail = document.getElementById("vue-detail");
    const detailContainer = document.getElementById("detail-container");
    if (!vueListe || !vueDetail || !detailContainer) {
        return;
    }
    const heures = Math.floor(movie.runtime / 60);
    const minutes = movie.runtime % 60;
    vueDetail.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`;
    vueDetail.style.backgroundSize = "cover";
    vueDetail.style.backgroundPosition = "center";
    detailContainer.innerHTML = `
        <div class="detail-content">
            <img class="detail-poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div class="detail-infos">
                <h2>${movie.title.toUpperCase()}</h2>
                <p class="detail-genres">${movie.genres.map(g => g.name).join(", ")}</p>
                <p class="detail-rating">⭐ ${movie.vote_average}</p>
                <p class="detail-runtime">🕐 ${heures}h ${minutes}min</p>
                <p class="detail-overview">"    ${movie.overview}   "</p>
            </div>
        </div>`;    
    vueListe.style.display = "none";
    vueDetail.style.display = "block";
}