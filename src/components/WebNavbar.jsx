// components/AppNavbar.jsx
import { useState } from "react";
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
import { NavLink } from "react-router-dom";

const WebNavbar = () => {
  const {cartItems}=useCart();
  const [showCart, setShowCart] = useState(false);

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
               <NavLink 
        to="/" 
        className={({ isActive }) =>
          isActive ? "nav-link text-warning fw-bold" : "nav-link text-light"
        }
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) =>
          isActive ? "nav-link text-warning fw-bold" : "nav-link text-light"
        }
      >
        About
      </NavLink>
            <Button variant="outline-light" onClick={handleShow} className="ms-5">
              Cart{" "}
              <Badge bg="light" text="dark">
                {totalQuantity}
              </Badge>
            </Button>
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