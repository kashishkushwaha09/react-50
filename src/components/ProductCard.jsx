// components/ProductCard.jsx
import { Card, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";


const ProductCard = ({ product }) => {
    const {cartItems,addToCart}=useCart();
  return (
    <Card className="h-100 shadow-sm border-0 rounded-4 product-card">
      
      <div className="product-img-wrapper">
        <Card.Img
          variant="top"
          src={product.imageUrl}
          className="product-img"
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>

        <Card.Text className="fw-bold">₹{product.price}</Card.Text>

        <Button variant="dark" className="mt-auto" onClick={()=>addToCart(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;