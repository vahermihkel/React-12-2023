import { useState } from "react"

function Seaded() {
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");

  const muudaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel", "est");
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel", "eng");
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel", "rus");
  }

  return (
    <div>
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницaтa e на английски</div>}
      <button onClick={muudaKeelEst}>Eesti keelseks</button>
      <button onClick={muudaKeelEng}>To English</button>
      <button onClick={muudaKeelRus}>Kъм русия</button>
    </div>
  )
}

export default Seaded

// tumesinine - tüüp, määratlus: function, const, let, div, button
// tavaline sinine - muutuja
// helesinine - omadus (määratletud), mis on tema sees
          // onClick, className, src, alt, MUUTUJA.current.value
// oranž - string
// kollane - funktsioon
// valge - märk
// lilla - käsklused
// {{{{{{{{{{{{}}}}}}}}}}}}
