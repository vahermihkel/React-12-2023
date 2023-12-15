// rfce
import { useState } from 'react'

// salvestada:
// lokaalmällu brauseris
// Keel. -> ainult selle isiku arvutis ja tema brauseris kes selle sinna pani
// Teema. -> eksisteerib igavesti selle URLi all.
// Infinite scroll.

// andmebaasi: kõigile jagatav. 
// Tooted. -> tavainimene näeb. Klient saab lisada tooteid/kustutada.
// Tellimus. -> 
// Andmebaas on alati väljaspool asuv rakendus
// MongoDB, Firebase

// faili ---> tegema pikka koodi kirjutamiseks
// Pärisprojektides failidesse ei kirjutata

function Avaleht() {
  // let kogus = 8;
  const [kogus, uuendaKogus] = useState(Number(localStorage.getItem("kogus")) || 0);
  const [laigitud, uuendaLaigitud] = useState(Boolean(localStorage.getItem("like")) || false);
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");

  // kogus = kogus - 1;

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Nullitud!");
    localStorage.setItem("kogus", 0);
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("Vähendatud!");
    localStorage.setItem("kogus", kogus - 1);
  }

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendatud!");
    localStorage.setItem("kogus", kogus + 1);
  }

  function laikMaha() {
    uuendaLaigitud(false);
    localStorage.setItem("like", false);
  }

  function laikPeale() {
    uuendaLaigitud(true);
    localStorage.setItem("like", true);
  }


  console.log("re-renderdan");

  return (
    <div>
      { laigitud === false && <img src="mittelaigitud.svg" alt="" /> }
      { laigitud === true && <img src="laigitud.svg" alt="" /> }
      { kogus > 10 && <img src="legendaarne.svg" alt="" /> }
      { laigitud === true && <button onClick={laikMaha}>Like maha</button>}
      { laigitud === false && <button onClick={laikPeale}>Like peale</button>}

      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda like</button>
      <br /><br />

      <div className={kogus > 10 ? "kuldne" : undefined}>{sonum}</div>
      { kogus !== 0 && <button onClick={nulli}>Nulli</button>}
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span className={kogus > 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht