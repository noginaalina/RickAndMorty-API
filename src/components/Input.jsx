const Input = ({value, onChange, placeholder}) => {
    return <input type="text" placeholder={placeholder} value={value} onChange={onChange} className="p-4 text-xl border-2 border-black rounded-lg w-[800px] h-8"/>
};

export default Input