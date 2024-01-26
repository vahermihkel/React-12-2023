import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { initialize } from '../store/cartSumSlice';
import { calculateCartTotalLS } from '../util/cartUtil';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const cartSumRedux = useSelector(state => state.cartSum.value)
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = process.env.REACT_APP_PRODUCTS_DB_URL;
    if (url === undefined) return;  
    fetch(url)
      .then(res => res.json())
      .then(json => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]"); 
        const totalSum = Number(calculateCartTotalLS(cart, json));
        dispatch(initialize(totalSum));
      })
  }, [dispatch]);

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLangEe = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  const logout = () => {
    setLoggedIn(false);
    sessionStorage.clear();
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Mihkel's webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {loggedIn && <Nav.Link as={Link} to="/admin">{t("nav.admin")}</Nav.Link>}
              <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
              <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <span>{cartSum} €</span>
                <span>{cartSumRedux.toFixed(2)} $$</span>
                <img onClick={changeLangEn} className="lang" src={require("../assets/language/english.png")} alt="" />
                <img onClick={changeLangEe} className="lang" src={require("../assets/language/estonian.png")}  alt="" />
              </Nav.Link>
              {loggedIn === false && 
                  <>
                    <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>
                    <Nav.Link as={Link} to="/signup">{t("signup")}</Nav.Link>
                  </>
                }
                {loggedIn === true && <button onClick={logout}>Logi välja</button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavigationBar