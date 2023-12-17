import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="flex justify-between bg-white">
            <Link to='/'><img alt="logo" src="/b6740400-92d4-11ea-8a13-d5f6e0558e9b.png" className="w-48 mt-[-1rem]"/></Link>
            <div className="flex justify-between gap-32 align-middle mt-3 mr-4">
                <Link to='/characters' className="text-xl">Characters</Link>
                <Link to='/locations' className="text-xl">Locations</Link>
                <Link to='/episodes' className="text-xl">Episodes</Link>
            </div>
        </div>
    )
};

export default Header;