import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Header from "./components/Header.jsx";
import Characters from "./components/Characters.jsx";
import Locations from "./components/Locations.jsx";
import Episodes from "./components/Episodes.jsx";
import Home from "./Home.jsx";

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/characters" element={<Characters/>}></Route>
        <Route path="/locations" element={<Locations/>}></Route>
        <Route path="/episodes" element={<Episodes/>}></Route>
      </Routes>
    </>
  )
}

export default App
