import React, { useState } from 'react'

function Tootajad() {
  const [tootajad, uuendaTootajad] = useState(["Mari", "Kadri", "Mart", "Madis"]);

  const sorteeri = () => {
    tootajad.sort();
    uuendaTootajad(tootajad.slice());
  }

  const filtreeri = () => {
    const tulem = tootajad.filter(tootaja => tootaja.startsWith("M"));
    uuendaTootajad(tulem);
  }


  return (
    <div>
      <button onClick={sorteeri}>Sorteeri</button>
      <button onClick={filtreeri}>Jäta alles kes algab 'M' tähega</button>
      <ul>
        {tootajad.map(tootaja => <li>{tootaja}</li>)}
      </ul>
    </div>
  )
}

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";

export default Tootajad

// 13.00-14.30
// 14.45-16.15