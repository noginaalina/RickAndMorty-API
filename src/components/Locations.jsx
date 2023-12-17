import useFetchLocations from "../hooks/useFetchLocations.jsx";
import Input from "./Input.jsx";
import AllButton from "./AllButton.jsx";

const Locations = () => {
    const {inputText, handleInput, locations, loading, error, fetchAllLocations} = useFetchLocations()

return (
    <div className="flex flex-col gap-8 justify-center items-center">
        <img src="/PngItem_438051%201.png" alt="sm"/>
        <Input value={inputText} onChange={handleInput} placeholder="Find Location"/>
        <AllButton onClick={fetchAllLocations} value="All Locations"/>
        {loading ? <p className="text-center text-2xl font-bold">Loading...</p> : error ? <p className="text-center text-2xl font-bold">{error}</p> :
        <div className="flex flex-col justify-center items-center gap-4">
        {locations.map((el) => {
            return (
                <ul key={el.id} className="flex border-2 p-4 border-black rounded-2xl w-[800px] justify-between">
                    <li key={el.id} className="text-2xl font-medium">{el.name}</li>
                </ul>
            )
        })}
            </div>
        }
    </div>
)
};

export default Locations;