import useFetchEpisodes from "../hooks/useFetchEpisodes.jsx";
import Input from "./Input.jsx";
import AllButton from "./AllButton.jsx";
const Episodes = () => {
const {loading, episodes, fetchAllEpisodes, inputText, handleChangeInput, error} = useFetchEpisodes()
    return (
        <div className="flex flex-col gap-8 justify-center items-center">
            <img src="/PngItem_438051%201.png" alt="logo"/>
            <Input value={inputText} onChange={handleChangeInput} placeholder="Find Episode"/>
            <AllButton value="All Episodes" onClick={fetchAllEpisodes}/>
            {loading ? <p className="text-center text-2xl font-bold">Loading...</p> : error ? <p className="text-center text-2xl font-bold">{error}</p> :
            <div className="flex flex-col justify-center items-center gap-4">
                {episodes.map((el) => {
                    return (
                        <ul className="flex border-2 p-4 border-black rounded-2xl w-[800px] items-center justify-between" key={el.id}>
                            <div>
                            <li  className="text-2xl font-medium">{el.name}</li>
                            <li  className="text-2xl font-medium">{el.episode}</li>
                            </div>
                            <li  className="text-2xl font-medium">{el.air_date}</li>
                        </ul>
                    )
                })}
            </div>
            }
        </div>
    )
};

export default Episodes;