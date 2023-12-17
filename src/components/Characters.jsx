import useFetchCharacters from "../hooks/useFetchCharacters.jsx";
import Input from "./Input.jsx";
import FilterButton from "./FilterButton.jsx";
import AllButton from "./AllButton.jsx";

const Characters = () => {

    const {
        characters,
        loading,
        getDeadCharacters,
        getAliveCharacters,
        getUnknownGenderCharacters,
        getGenderlessCharacters,
        getMaleCharacters,
        getFemaleCharacters,
        handleInput,
        fetchAllCharacters,
        inputText,
        error
    } = useFetchCharacters()

    return (
        <div className="flex justify-cente flex-col gap-4 items-center">
            <img src="/PngItem_438051%201.png" alt="Rick And Morty" className="w-96 m-4"/>
            <div className="flex flex-col items-center">
                <Input value={inputText} onChange={handleInput} placeholder="Find Character"/>
                <AllButton value="All Characters" onClick={fetchAllCharacters}/>
                <div className="flex flex-col gap-4 items-center">
                <div className="flex gap-4">
                    <FilterButton value="Alive" onClick={getAliveCharacters}/>
                    <FilterButton value="Dead" onClick={getDeadCharacters}/>
                </div>
                <div className="flex gap-4">
                    <FilterButton value="Female" onClick={getFemaleCharacters}/>
                    <FilterButton value="Male" onClick={getMaleCharacters}/>
                    <FilterButton value="Genderless" onClick={getGenderlessCharacters}/>
                    <FilterButton value="Unknown Gender" onClick={getUnknownGenderCharacters}/>
                </div>
                </div>
            </div>
            {loading ? <p className="text-center text-2xl font-bold">Loading...</p> :
                error ? <p>Character Not Found :(</p> :
            <div className="flex justify-center gap-4 flex-wrap">
                {characters.map(elem => {
                    return (
                        <div key={elem.id}>
                            <img src={elem.image} alt="Character Picture" className="border-4 border-transparent rounded-3xl"/>
                            <p className="text-xl font-medium">{elem.name}</p>
                        </div>
                    )
                })}
            </div>
            }
            <div>
            </div>
        </div>
    )
};

export default Characters;