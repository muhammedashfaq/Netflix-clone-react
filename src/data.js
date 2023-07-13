import requests from './requests';

export const rowsData = [
    { title: "NETFLIX ORGINALS", fetchUrl: requests.fetchNetflixOriginals, isLargeRow: true },
    { title: "Trending Now", fetchUrl: requests.fetchTrending },
    { title: "Top Rated", fetchUrl: requests.fetchTopRated },
    { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
    { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
    { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
    { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
    { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
  ];
  