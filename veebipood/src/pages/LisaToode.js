import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!"); // iga kord PEAN kasutama kui muudan HTMLi
  // const sisselogitu = andmebaasistPäring();
  // let ostukorviSumma = 0;
  const inputiLuger = useRef();

  // function lisa() {
  //   uuendaSonum("Toode lisatud!");
  // }

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Tühja nimetusega ei saa lisada!");
    } else {      // document.getElementById("nimi").value
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode