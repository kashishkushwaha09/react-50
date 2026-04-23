import { useState } from "react";
import {
  Offcanvas,
  ListGroup,
  Image,
  Button,
} from "react-bootstrap";

const CartOffcanvas = ({ show, handleClose, cartItems }) => {
    const [cart,setCart]=useState(cartItems);
  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const handleRemove=(title)=>{
     setCart((prev)=>prev.filter((item)=>item.title!== title));
  }

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          Your Cart ({totalQuantity})
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item key={item.title}>
                  <div className="d-flex align-items-center gap-3">
                    
                    <Image
                      src={item.imageUrl}
                      rounded
                      width={60}
                      height={60}
                      style={{ objectFit: "cover" }}
                    />

                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.title}</h6>
                      <small>
                        ₹{item.price} × {item.quantity}
                      </small>
                    </div>

                    <div className="fw-bold">
                      ₹{item.price * item.quantity}
                    </div>

                  
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemove(item.title)}
                    >
                      Remove
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>

            {/* Total */}
            <div className="mt-4 d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;