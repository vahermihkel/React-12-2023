import React, { useState } from 'react'
import tootedFailist from "../data/tooted.json"
import { Link } from 'react-router-dom';

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (index) => {
    tootedFailist.splice(index,1);
    uuendaTooted(tootedFailist.slice());
  }

  return (
    <div>
       {tooted.map((toode, index) => 
        <div className={toode.aktiivne ? "aktiivne" : "mitteaktiivne"} key={index}>
          <img className='pilt' src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind} €</div>
          <div>{toode.pilt} €</div>
          <button onClick={() => kustuta(index)}>Kustuta</button>
          <Link to={"/muuda/" + index}>
            <button>Muuda</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default HaldaTooted