import axios from "axios";
import API_KEY from "./apiKey";

const base_URL = "https://api.themoviedb.org/3";

const netflixOriginal = `/discover/tv?api_key=${API_KEY}&with_networks=213`
const getNetflixOriginal = () => axios.get(base_URL + netflixOriginal);

const MovieByCategory = `/discover/movie?api_key=${API_KEY}&with_genres=`;
const getMovieById = (id) => axios.get(base_URL + MovieByCategory + id);


export default {getNetflixOriginal, getMovieById}