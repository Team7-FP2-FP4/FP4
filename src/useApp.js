import axios from "axios";
import { useEffect, useState } from "react";

export const useApp = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const title = 'FinProH8';

    const getMovieRequest = async (searchValue) => {
        if (searchValue === '') {
            const url = `https://www.omdbapi.com/?s=man&apikey=bdfd4318`
            const r = await axios.get(url)
            const response = r.data
            if (response.Search) {
                setMovies(response.Search)
            }
            console.log("11111111");
        } else {
            const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=bdfd4318`
            const r = await axios.get(url)
            const response = r.data
            if (response.Search) {
                setMovies(response.Search)
            }
            console.log(response);
        }
        console.log(searchValue);
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return {
        searchValue,
        setSearchValue,
        movies,
        title,
    };
};
