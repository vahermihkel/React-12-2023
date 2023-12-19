import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

// useState, useRef, useParams -> Reacti Hookid
// Reacti hook: erikood, mis tuleb node_modules kausta seest
// Mõeldud lihtsustamaks mingisugust loogikat
// Hookide reeglid:
// 1. Algavad alati use- eesliidesega 
// 2. Alati peab importima
// 3. Ei tohi olla loodud funktsiooni sees
// 4. Ei tohi olla tingimuslikult loodud
// 5. Peab lõppema sulgudega, see käivitatakse

// [] = useState <--- peab olema täpselt nii palju kui määratletud (useState -> 2tk)
// {} = useParams <--- võib olla palju tahes: 1tk .... 9+tk

function YksToode() {
  const { index } = useParams(); // toode/:index
  const leitud = tootedFailist[index]; 
  // ["Nobe", "Tesla", "BMW"][0] --> "Nobe"
  // ["Nobe", "Tesla", "BMW"][1] --> "Tesla"
  // ["Nobe", "Tesla", "BMW"][2] --> "BMW"
  // ["Nobe", "Tesla", "BMW"]["Samsung"] --> undefined

  if (leitud === undefined) {
    return <div>Toodet ei leitud</div>
  }

  return (
    <div>
      <div>Toote järjekorranumber: {index}</div>
      <div>Toote nimi: {leitud}</div>
      <div>Toote hind: </div>
      <div>Toote aktiivsus: </div>
      <img src="" alt="" />
    </div>
  )
}

export default YksToode