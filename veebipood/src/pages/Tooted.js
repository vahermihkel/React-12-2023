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

  return (
    <div>
      {tooted.map((toode, index) => 
        <div key={index}>
          {toode}
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