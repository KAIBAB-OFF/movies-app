async function FilmRecover() {
    const answer = await fetch("https://api.themoviedb.org/3/movie/popular", {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWFkNTM2MTQ0NjE2NTBjOGRmZDBjZGRkMGIyYzEwYyIsIm5iZiI6MTc4Mjk3NDc3MS41NjMsInN1YiI6IjZhNDYwOTMzYzMzNGQzYzc0NTA1OWU0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zWQiguj2VGTWMvaOFaM2yXL_thM70oka1jArTtfV9SM"
        }
    });
    const data = await answer.json();
    return data.results;
}
FilmRecover().then(films => {
    console.log(films);
});
export {};
//# sourceMappingURL=main.js.map