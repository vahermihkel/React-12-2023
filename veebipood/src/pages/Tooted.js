import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json"
import ostukorvFailist from "../data/ostukorv.json"
import { Link } from 'react-router-dom';

function Tooted() {
  // Nobe, Tesla, BMW <--- kuvage välja ja tehke mingeid sorteerimisi/filtreerimisi
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (toode) => {
    ostukorvFailist.push(toode);
  }

  const filtreeriBgaAlgavad = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("B"));
    uuendaTooted(vastus);
  }

  const filtreeriNgaAlgavad = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("N"));
    uuendaTooted(vastus);
  }

  const filtreeriTgaAlgavad = () => {
    const vastus = tootedFailist.filter(toode => toode.nimi.startsWith("T"));
    uuendaTooted(vastus);
  }

  return (
    <div>
      <button onClick={filtreeriBgaAlgavad}>B</button>
      <button onClick={filtreeriNgaAlgavad}>N</button>
      <button onClick={filtreeriTgaAlgavad}>T</button>
      {tooted.map((toode, index) => 
        <div key={index}>
          <img className={toode.aktiivne ? "pilt" : "pilt-mitteaktiivne"} src={toode.pilt} alt="" />
          <span>{toode.nimi} - {toode.hind} €</span>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          <Link to={"/toode/" + index}>
            <button>Vaata detailsemalt</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Tooted