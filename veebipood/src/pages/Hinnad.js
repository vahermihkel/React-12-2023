import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, uuendaHinnad] = useState([55, 12, 54, 9, 72, 6, 321, 22, 8]);

  const suurus = () => {
    hinnad.sort((a, b) => a - b);
    uuendaHinnad(hinnad.slice());
  }

  const suurusTagurpidi = () => {
    hinnad.sort((a, b) => b - a);
    uuendaHinnad(hinnad.slice());
  }

  const filtreeri = () => {
    const vastus = hinnad.filter(hind => hind > 50);
    uuendaHinnad(vastus);
  }

  return (
    <div>
      <button onClick={suurus}>Suuruse järjekorda</button>
      <button onClick={suurusTagurpidi}>Suurus tagurpidi</button>
      <button onClick={filtreeri}>Jäta alles suuremad kui 50</button>
      <br />
      {hinnad.map(hind => <button>{hind}</button>)}
    </div>
  )
}

export default Hinnad