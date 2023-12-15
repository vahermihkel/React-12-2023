import { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, uuendaSonum] = useState("Lisa toode!"); // iga kord PEAN kasutama kui muudan HTMLi
  const [error, uuendaError] = useState(false);
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

  const kontrolli = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum("Kohustuslik väli ei ole täidetud.");
      uuendaError(true);
      return;
    }

    if (inputiLuger.current.value.includes("!")) {
      uuendaSonum("Hüüumärgiga tooteid ei saa lisada.");
      uuendaError(true);
      return;
    }

    uuendaError(false);
    uuendaSonum("");
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input onChange={kontrolli} ref={inputiLuger} type="text" /> <br />
      <button disabled={error} onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode