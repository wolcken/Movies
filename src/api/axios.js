import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "4d296b163d0255c1f2144c9b9ad818f8";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'aplication/json;charset=utf-8',
    },
    params: {
        'api_key': API_KEY,
    }
});

const useGenre = (apiGenre) => {
    const [genre, setGenre] = useState([apiGenre]);

    useEffect(() => {
        const getGenre = async () => {
            const response = await api(apiGenre);
            setGenre(response);
        }
        getGenre();
    }, [apiGenre]);
    return genre;
}

const useTrending = (apiTrending) => {
    const [trending, setTrending] = useState([apiTrending]);

    useEffect(() => {
        const getTreding = async () => {
            const response = await api(apiTrending);
            setTrending(response)
        }
        getTreding();
    }, [apiTrending]);
    return trending;
}

const useDiscover = (apiDiscover, id) => {
    const [discover, setDiscover] = useState([apiDiscover, id]);

    useEffect(() => {
        const getDiscover = async () => {
            const response = await api(apiDiscover, {
                params: {
                    with_genres: id,
                }
            });
            setDiscover(response);
        }
        getDiscover();
    }, [apiDiscover, id])
    return discover;
}

const useMovie = (apiMovie) => {
    const [movie, setMovie] = useState([apiMovie]);

    useEffect(() => {
        const getMovie = async () => {
            const response = await api(apiMovie);
            setMovie(response);
        }
        getMovie();
    }, [apiMovie]);
    return movie;
}

const useDetails = (apiDetails) => {
    const [detail, setDetails] = useState([apiDetails]);

    useEffect(() => {
        const getDetails = async () => {
            const response = await api(apiDetails);
            setDetails(response);
        }
        getDetails();
    }, [apiDetails]);
    return detail;
}

const useSeries = (apiSeries) => {
    const [serie, setSerie] = useState([apiSeries]);

    useEffect(() => {
        const getSeries = async () => {
            const response = await api(apiSeries);
            setSerie(response);
        }
        getSeries();
    }, [apiSeries]);
    return serie;
}

const useSearch = (apiSearch, query) => {
    const [search, setSearch] = useState([apiSearch, query]);

    useEffect(() => {
        const getSearch =async () => {
            const response = await api(apiSearch, {
                params: {
                    query: query,
                }
            });
            setSearch(response);
        }
        getSearch();
    }, [apiSearch, query]);
    return search;
}

const apiObjects = {
    useGenre,
    useTrending,
    useDiscover,
    useMovie,
    useDetails,
    useSeries,
    useSearch
}

export default apiObjects;