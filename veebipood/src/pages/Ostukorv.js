import { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  // const kustutaEsimene = () => {
  //   ostukorv.splice(0,1); // 0 - järjekorranumber, 1 - mitu tükki korraga kustutab
  //   uuendaOstukorv(ostukorv.slice());
  // }

  // const kustutaTeine = () => {
  //   ostukorv.splice(1,1); // 1 - järjekorranumber, 1 - mitu tükki korraga kustutab
  //   uuendaOstukorv(ostukorv.slice());
  // }

  // const kustutaKolmas = () => {
  //   ostukorv.splice(2,1); // 2 - järjekorranumber, 1 - mitu tükki korraga kustutab
  //   uuendaOstukorv(ostukorv.slice());
  // }

  const tyhjenda = () => {
    ostukorvFailist.splice(0); // 0ndast järjekorranumbrist, kuni lõpuni välja
    uuendaOstukorv([]);
  }

  const kustuta = (index) => {
    ostukorvFailist.splice(index,1); // 2 - järjekorranumber, 1 - mitu tükki korraga kustutab
    uuendaOstukorv(ostukorvFailist.slice());
  }

  return (
    <div>
      {/* <button onClick={() => uuendaOstukorv(["Coca"])}>Jäta alles Coca</button>
      <button onClick={() => uuendaOstukorv(["Fanta"])}>Jäta alles Fanta</button>
      <button onClick={() => uuendaOstukorv(["Sprite"])}>Jäta alles Sprite</button>
      <button onClick={() => uuendaOstukorv(["Coca", "Fanta"])}>Jäta alles Coca ja Fanta</button>
      <button onClick={() => uuendaOstukorv(["Coca", "Sprite"])}>Jäta alles Coca ja Sprite</button>
      <button onClick={() => uuendaOstukorv(["Fanta", "Sprite"])}>Jäta alles Fanta ja Sprite</button>
      <button onClick={() => uuendaOstukorv(["Coca", "Fanta", "Sprite"])}>Jäta alles originaalsed</button>
      <button onClick={() => kustuta(0)}>Kustuta esimene</button>
      <button onClick={() => kustuta(1)}>Kustuta teine</button>
      <button onClick={() => kustuta(2)}>Kustuta kolmas</button> */}

      <button onClick={tyhjenda}>Tühjenda</button>

      {ostukorv.length !== 0 && <div>Ostukorvis on {ostukorv.length} toode(t)</div>}

      {ostukorv.map((toode, index) => 
        <div key={index}>
          {toode} 
          <button onClick={() => kustuta(index)}>x</button> 
        </div>
        )}
      
      {ostukorv.length === 0 &&
      <>
        <div>Ostukorv on tühi</div>
        <Link to="/">
          <button>Avalehele</button>
        </Link>
      </>}

    </div>
  )
}

export default Ostukorv