import {useEffect, useState} from "react";
import useDebounce from "./useDebounce.jsx";

const useFetchEpisodes = () => {
    const [inputText, setInputText] = useState("");
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const {debounce} = useDebounce()
    const fetchAllEpisodes = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://rickandmortyapi.com/api/episode');
            const result  = await response.json();
            setEpisodes(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }

    const getEpisodeByName = async (value) => {
        setLoading(true)
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/episode/?name=${value}`) ;
            const result = await response.json();
            setEpisodes(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }
    const debouncedGetEpisodeByName = debounce(getEpisodeByName, 500)

    useEffect(() => {
        fetchAllEpisodes()
    }, [])

    const handleChangeInput = (e) => {
        setInputText(e.target.value)
        debouncedGetEpisodeByName(e.target.value)
    }

    return {loading, episodes, fetchAllEpisodes, inputText, handleChangeInput, error}
};

export default  useFetchEpisodes