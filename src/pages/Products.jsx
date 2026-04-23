// pages/Products.jsx
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productsArr } from "../data/products";

const Products = () => {
      
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fw-bold">Our Products</h2>

      <Row className="g-4">
        {productsArr.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;