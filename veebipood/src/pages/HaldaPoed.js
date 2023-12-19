import React, { useRef, useState } from 'react'
import poedFailist from "../data/poed.json"

// Saab poode lisada ja kustutada

function HaldaPoed() {
  const [poed, uuendaPoed] = useState(poedFailist);
  const nimiRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();

  const kustuta = (index) => {
    poedFailist.splice(index,1);
    uuendaPoed(poedFailist.slice());
  }

  const lisa = () => {
    const uusPood = {
      "nimi": nimiRef.current.value, 
      "tel": telefonRef.current.value,
      "aadress": aadressRef.current.value
    };
    poedFailist.push(uusPood);
    uuendaPoed(poedFailist.slice());
    nimiRef.current.value = "";
    telefonRef.current.value = "";
    aadressRef.current.value = "";
  }

  return (
    <div>
      <label>Poe nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Poe telefoninumber</label> <br />
      <input ref={telefonRef} type="text" /> <br />
      <label>Poe aadress</label> <br />
      <input ref={aadressRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      {poed.map((yksPood, index) => 
        <div key={index}>
          <div>{yksPood.nimi}</div>
          <div>{yksPood.tel}</div>
          <div>{yksPood.aadress}</div>
          <button onClick={() => kustuta(index)}>x</button>
        </div>
      )}
    </div>
  )
}

export default HaldaPoed