import React, { useEffect, useState } from 'react'

const Cart = () => {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(response => response.json())
      .then(json => setParcelMachines(json))
  }, []);

  return (
    <div>
      <select>
        {parcelMachines
          .filter(pm => pm.A0_NAME === "EE")
          .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
      </select>
    </div>
  )
}

export default Cart