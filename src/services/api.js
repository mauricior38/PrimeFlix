import axios from 'axios';


//Base URL: https://api.themoviedb.org/3/
//URL DA API: https://api.themoviedb.org/3/movie/550?api_key=6eb76b988a5d79ada915a8ac73edb7cb

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;