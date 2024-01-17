import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';

const NavigationBar = () => {
  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

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