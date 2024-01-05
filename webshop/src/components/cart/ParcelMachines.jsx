import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const ParcelMachines = () => {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(response => response.json())
      .then(json => setParcelMachines(json))
  }, []);

  return (
    <select>
      {parcelMachines
      .filter(pm => pm.A0_NAME === "EE")
      .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
    </select>
  )
}

export default ParcelMachines