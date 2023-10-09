import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWM5MDA2ZTQ1NWYyYzRjOWY5ZTA1NGMwNmQxZTQwMiIsInN1YiI6IjY0ZWZlMmM1NzJjMTNlMDEzOWIzNGVlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5LMZB2PJkaqeQOSTa7muZU8YDQ_dOb4_jtHiXy4HYAc'
    }
})

export default apiFilmes