// components/AppNavbar.jsx
import { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Badge,
  Offcanvas,
  ListGroup,
  Image,
} from "react-bootstrap";

import { cartElements } from "../data/cartItems";
import CartOffcanvas from "./CartOffcanvas";
import { useCart } from "../context/CartContext";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const WebNavbar = () => {
  const {cartItems}=useCart();
  const [showCart, setShowCart] = useState(false);
 const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isAuthenticated;

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/auth');
  };
  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  
  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  
//   const totalPrice = cartElements.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand>MyStore</Navbar.Brand>
       
          <Nav className="ms-auto">
               {isLoggedIn ?  <>
          <NavLink 
        to="/" 
        className={({ isActive }) =>
          isActive ? "nav-link text-warning fw-bold" : "nav-link text-light"
        }
      >
        Home
      </NavLink>
               <NavLink 
        to="/products" 
        className={({ isActive }) =>
          isActive ? "nav-link text-warning fw-bold" : "nav-link text-light"
        }
      >
        Store
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) =>
          isActive ? "nav-link text-warning fw-bold" : "nav-link text-light"
        }
      >
        About
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) =>
          isActive ? "nav-link text-warning fw-bold" : "nav-link text-light"
        }
      >
        Contact
      </NavLink>
         </> : <>
          <NavLink 
        to="/login" 
        className={({ isActive }) =>
          isActive ? "nav-link text-warning fw-bold" : "nav-link text-light"
        }
      >
        Login
      </NavLink>
      
         </>}
       
           {isLoggedIn &&  <Button variant="outline-light" onClick={handleShow} className="ms-5">
              Cart{" "}
              <Badge bg="light" text="dark">
                {totalQuantity}
              </Badge>
            </Button>}
          </Nav>
        </Container>
      </Navbar>

  
      {showCart && <CartOffcanvas
        show={showCart}
        handleClose={handleClose}
       
      />}
    </>
  );
};

export default WebNavbar;