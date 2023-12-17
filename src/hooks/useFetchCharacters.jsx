import {useEffect, useState} from "react";
import useDebounce from "./useDebounce.jsx";

const useFetchCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {debounce} = useDebounce()

    const getCertainCharacter = async (value) => {
        setLoading(true)
        try {
            let response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
            let result = await response.json();
            setCharacters(result.results)
        }
        catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    const debouncedGetCertainCharacter = debounce(getCertainCharacter, 500);

    const fetchAllCharacters = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const result = await response.json();
            setCharacters(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchAllCharacters()
    }, [])

    const handleInput = (e) => {
        setInputText(e.target.value)
        debouncedGetCertainCharacter(e.target.value)
    };

    const getDeadCharacters = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?status=dead');
            const result = await response.json();
            setCharacters(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    const getAliveCharacters = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?status=alive');
            const result = await response.json();
            setCharacters(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    const getFemaleCharacters = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?gender=female');
            const result = await response.json();
            setCharacters(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    const getMaleCharacters = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?gender=male');
            const result = await response.json();
            setCharacters(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    const getGenderlessCharacters = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?gender=genderless');
            const result = await response.json();
            setCharacters(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };

    const getUnknownGenderCharacters = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/?gender=unknown');
            const result = await response.json();
            setCharacters(result.results)
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    };
    return {
    characters,
        loading,
        getDeadCharacters,
        getAliveCharacters,
        getUnknownGenderCharacters,
        getGenderlessCharacters,
        getMaleCharacters,
        getFemaleCharacters,
        handleInput,
        inputText,
        fetchAllCharacters,
        error
    }
};

export default useFetchCharacters