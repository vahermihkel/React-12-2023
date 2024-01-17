import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { Omniva } from '../../models/Omniva';

const ParcelMachines = () => {
  const [parcelMachines, setParcelMachines] = useState<Omniva[]>([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then((response: Response) => response.json())
      .then((json: Omniva[]) => setParcelMachines(json))
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