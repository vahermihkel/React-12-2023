import { Navigate, Route, Routes } from 'react-router-dom';
import './css/App.css';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import { ContactUs } from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import NotFound from './pages/global/NotFound';
import NavigationBar from './components/NavigationBar';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';

function App() {
  const {loggedIn} = useContext(AuthContext);

  return (
    <div className="App">
      <NavigationBar />
     
      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        {loggedIn ?
          <>
            <Route path="admin" element={ <AdminHome /> } />
            <Route path="admin/add" element={ <AddProduct /> } />
            <Route path="admin/edit/:id" element={ <EditProduct /> } />
            <Route path="admin/maintain" element={ <MaintainProducts /> } />
            <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
            <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
          </> : 
          <Route path="admin/*" element={ <Navigate to="/login" /> } />
          }
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

// 7. 28.12 kell 09.00-12.15
// 8. 29.12 kell 13.00-16.15
// 9. 03.01 kell 12.00-15.15 localStorage-sse Array, andmebaase --> KOJU: terve hunniku LS seotud ülesandeid
//10. 05.01 kell 09.00-12.15 objekt ostukorvis, ostukorvi kujundust, makse, propsid ehk alamkomponendid CSS moodulid
//11. 10.01 kell 09.00-12.15 useContext ehk globaalne state, . KOJU --> proovitöö, mis on päriselt olnud
//12. 12.01 kell 09.00-12.15 child componendis funktsiooni käivitamine (Modal)
//13. 15.01 kell 13.00-16.15 
//14. 17.01 kell 13.00-15.45 TypeScript
//15. 24.01 kell 13.00-16.45 unit Testid, custom Hookid, useReducer??, Redux
//      Next / React Native --> Kodutöö: lõpuprojekti tegemine
//16a. 31.01 kell 13.00-14.30 --> pooliku lõpuprojekti näitamine + koos vigade lahendamine
//16b. 07.02 kell 13.00-14.30 --> lõpliku lõpuprojekti näitamine

// KOKKU: 16 kohtumist


// KODUS:
// +MaintainProducts --> toote kustutamine (refreshiga tuleb tagasi)
// +AddProduct --> toote lisamine (refreshiga kustub) (pigem EditProduct järgi)
// +HomePage --> sorteerimine A-Z, Z-A, hind kasvav, hind kahanev, reiting kasvav, kahanev
// +SingleProduct --> ühe toote vaatamine (pigem EditProduct järgi)
// Ostukorvi tegemine --> saab HomePage lehel cart.json faili juurde lisada
//                    --> saab Cart lehel cart.json failist kõik kätte
// Cart --> tühjendamine, ühe kustutamine, ostukorvi kogusumma, dünaamika (kui on tühi, siis...)
// +Lisada 3-4s keel
// +Panna Firebase-i üles
// +NotFound leht ilusamaks? Mingi pilt? Suunamine avalehele nupu kaudu?
// +Kõik tõlked lisada
// +Toastify --> pärast toote lisamist, pärast toote kustutamist, ostukorvi lisades
// +HomePage --> kategooriate järgi filtreerimine


// Koodi taaskasutamiseks (väljatõstmiseks)
// Kui on tavaline funktsioon: ei ole Reacti Hooke ja pole HTMLi --> util.js
// Kui on HTML (hookid võivad, ei pea) --> "components" kausta
// Kui pole HTMLi, aga kasutan Reacti Hooke (useState, useEffect) --> Custom Hook