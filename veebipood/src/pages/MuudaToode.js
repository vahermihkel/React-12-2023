import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import tootedFailist from "../data/tooted.json"

function MuudaToode() {
  const { jrknr } = useParams();
  const leitud = tootedFailist[jrknr];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const navigate = useNavigate(); // hookid: ei tohi olla fnkts sees loodud

  const muuda = () => {
    const muudetudToode = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value), 
      "aktiivne": aktiivneRef.current.checked, 
      "pilt": piltRef.current.value
    }
    tootedFailist[jrknr] = muudetudToode;
    navigate("/halda-tooted");
  }

  return (
    <div>
      <label>Nimi</label> <br />
      <input ref={nimiRef} defaultValue={leitud.nimi} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={hindRef} defaultValue={leitud.hind} type="number" /> <br />
      <label>Pilt</label> <br />
      <input ref={piltRef} defaultValue={leitud.pilt} type="text" /> <br />
      <label>Aktiivsus</label> <br />
      <input ref={aktiivneRef} defaultChecked={leitud.aktiivne} type="checkbox" /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaToode