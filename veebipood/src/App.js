//import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import NotFound from './pages/NotFound';
import Profiil from './pages/Profiil';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import Tooted from './pages/Tooted';
import Poed from './pages/Poed';
import Tootajad from './pages/Tootajad';
import Hinnad from './pages/Hinnad';

function App() {
  const [teema, uuendaTeema] = useState(localStorage.getItem("teema") || "light");

  const tumedaks = () => {
    uuendaTeema("dark");
    localStorage.setItem("teema", "dark");
  }

  const heledaks = () => {
    uuendaTeema("light");
    localStorage.setItem("teema", "light");
  }

  return (
    <div className={teema === "dark" ? "tume" : "hele"}>

      <button onClick={tumedaks}>Tume teema</button>
      <button onClick={heledaks}>Hele teema</button>

      <Link to="/">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/profiil">
        <button className="nupp">Profiil</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      <Link to="/tooted">
        <button className="nupp">Tooted</button>
      </Link>

      <Link to="/poed">
        <button className="nupp">Poed</button>
      </Link>

      <Link to="/tootajad">
        <button className="nupp">Töötajad</button>
      </Link>

      <Link to="/hinnad">
        <button className="nupp">Hinnad</button>
      </Link>

      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='ostukorv' element={ <Ostukorv /> } />
        <Route path='lisa-toode' element={ <LisaToode /> } />
        <Route path='profiil' element={ <Profiil /> } />
        <Route path='seaded' element={ <Seaded /> } />
        <Route path='tooted' element={ <Tooted /> } />
        <Route path='poed' element={ <Poed /> } />
        <Route path='tootajad' element={ <Tootajad /> } />
        <Route path='hinnad' element={ <Hinnad /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>

    </div>
  );
}

export default App;

// T 12.12 kell 10.00-13.30    11.00-11.05   12.20-12.45
// K 13.12 kell 13.00-16.15
