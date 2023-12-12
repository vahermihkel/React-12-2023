import { Link } from 'react-router-dom'

function Ostukorv() {
  return (
    <div>
      Ostukorv on tühi
      <Link to="/">
        <button>Avalehele</button>
      </Link>
    </div>
  )
}

export default Ostukorv