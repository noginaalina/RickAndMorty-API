const FilterButton = ({value, onClick}) => {
    return <button className="border-2 border-black rounded-3xl w-32 text-lg font-medium" onClick={onClick}>{value}</button>
};

export default FilterButton