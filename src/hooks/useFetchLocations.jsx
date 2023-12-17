import {useEffect, useState} from "react";
import useDebounce from "./useDebounce.jsx";

const useFetchLocations = () => {
    const [inputText, setInputText] = useState("");
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {debounce} = useDebounce();
    const fetchAllLocations = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://rickandmortyapi.com/api/location');
            const result = await response.json();
            setLocations(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    const getLocationByName = async (value) => {
        setLoading(true)
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/location/?name=${value}`);
            const result = await response.json()
            setLocations(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    const debouncedGetLocationByName = debounce(getLocationByName, 500)

    const handleInput = (e) => {
        setInputText(e.target.value)
        debouncedGetLocationByName(e.target.value)
    };


    useEffect(() => {
        fetchAllLocations()
    }, [])

    return {inputText, handleInput, locations, loading, error, fetchAllLocations}
};

export default useFetchLocations