import React, { useState } from 'react'
import poedFailist from "../data/poed.json"
import { Link } from 'react-router-dom';

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const originaali = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    poed.sort((a,b) => a.nimi.localeCompare(b.nimi));
    // poed.sort();
    uuendaPoed(poed.slice());
    // uuendaPoed([...poed])
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKasv = () => {
    poed.sort((a,b) => a.nimi.length - b.nimi.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKah = () => {
    poed.sort((a,b) => b.nimi.length - a.nimi.length);
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmasTaht = () => {
    poed.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]));
    uuendaPoed(poed.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = poed.filter(yksPood => yksPood.nimi.endsWith("e"));
    uuendaPoed(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = poed.filter(yksPood => yksPood.nimi.length === 9);
    uuendaPoed(vastus);
  }

  const filtreeriVah7Tahelised = () => {
    const vastus = poed.filter(yksPood => yksPood.nimi.length >= 7);
    uuendaPoed(vastus);
  }

  const filtreeriKellelIsLyhend = () => {
    const vastus = poed.filter(yksPood => yksPood.nimi.includes("is"));
    uuendaPoed(vastus);
  }

  const filtreeriKellel3sTahtI = () => {
    const vastus = poed.filter(yksPood => yksPood.nimi[2] === "i");
    uuendaPoed(vastus);
  }

  const tahedKokku = () => {
    let summa = 0;
    // summa = summa + 7;
    // summa = summa + 10;
    // summa = summa + 9;
    poed.forEach(yksPood => summa = summa + yksPood.nimi.length);
    return summa;
  }

  return (
    <div>
      <div>Poodide nimede tähtede koguarv: {tahedKokku()}</div>
      <div>{poed.length} tk</div>
      <button onClick={originaali}>Originaali</button>
      <br /><br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähemärgid kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähemärgid kahanevalt</button>
      <button onClick={sorteeriKolmasTaht}>Sorteeri A-Z kolmanda tähe järgi</button>
      <br /><br />
      <button onClick={filtreeriEgaLoppevad}>Jäta alles 'e'ga lõppevad</button>
      <button onClick={filtreeri9Tahelised}>Jäta alles täpselt 9 tähelised</button>
      <button onClick={filtreeriVah7Tahelised}>Jäta alles vähemalt 7 tähelised</button>
      <button onClick={filtreeriKellelIsLyhend}>Jäta alles 'is' sisaldavad</button>
      <button onClick={filtreeriKellel3sTahtI}>Jäta alles kellel 3s täht 'i'</button>
      {poed.map((yksPood, index) => 
        <div key={index}>
          {yksPood.nimi} - {yksPood.aadress}
          <Link to={"/pood/" + yksPood.nimi.toLowerCase().replaceAll(" ", "-")}>
            <button>Vaata lähemalt</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Poed