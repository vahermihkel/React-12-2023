import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      Lehekülge ei leitud
      <Link to="/">
        <button>Avalehele</button>
      </Link>
    </div>
  )
}

export default NotFound