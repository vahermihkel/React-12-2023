import React from 'react'
import { useParams } from 'react-router-dom'
import poedFailist from "../data/poed.json"

function YksPood() {
  const { nimi } = useParams();
  const leitud = poedFailist.find(pood => pood.nimi.toLowerCase().replaceAll(" ", "-") === nimi)

  if (leitud === undefined) {
    return <div>Poodi ei leitud</div>
  }

  return (
    <div>
      <div>Poe nimi: {leitud.nimi}</div>
      <div>Poe telefon: {leitud.tel}</div>
      <div>Poe aadress: {leitud.aadress}</div>
    </div>
  )
}

export default YksPood