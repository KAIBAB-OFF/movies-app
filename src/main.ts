import type {Movies} from "./types";

import {MovieRecover} from "./api";
import {searchMovies} from "./api";

import {displayMovies} from "./ui";


let currentPage: number = 1;
let currentQuery: string = "";

const vueListe = document.getElementById("vue-liste");
const vueDetail = document.getElementById("vue-detail");
const backButton = document.getElementById("back-button");
if(backButton){
    backButton.addEventListener("click", () => {
        if (!vueListe || !vueDetail) return;
        vueListe.style.display = "block";
        vueDetail.style.display = "none";
    });
}

const searchInput = document.getElementById("search-input") as HTMLInputElement;
if (searchInput) {
    searchInput.addEventListener("input", async () => {
        currentQuery = searchInput.value.toLowerCase().trim();
        currentPage = 1;
        await loadMovies();
        
    });
}


// Pagination buttons
async function loadMovies(): Promise<void> {
    const container = document.getElementById("films-container");
    if (container) {
        container.innerHTML = "";
    }
    let movies: Movies[];
    const pageInfo = document.getElementById("page-info");
    if (pageInfo) 
        pageInfo.textContent = `Page ${currentPage}`;
    if (currentQuery === "") {
        movies=await MovieRecover(currentPage);
    } else {
        movies=await searchMovies(currentQuery, currentPage);
    }
    const messageVide = document.getElementById("message-vide");
    if (movies.length === 0) {
        if (messageVide) messageVide.style.display = "block";
    } else {
        if (messageVide) messageVide.style.display = "none";
        displayMovies(movies);
    }
}


const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
if (btnNext) {
    btnNext.addEventListener("click", async () => {
        currentPage++;
        await loadMovies();
    });
}

if (btnPrev) {
    btnPrev.addEventListener("click", async () => {
        if (currentPage > 1) {
            currentPage--;
            await loadMovies();
        }
    });
}


loadMovies();