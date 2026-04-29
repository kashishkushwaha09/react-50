// ProductDetails.jsx

import { useParams } from "react-router-dom";
import { products } from "../data/productDetail";
import ProductImages from "../components/ProductImages";
import ProductReviews from "../components/ProductReview";


const ProductDetails = () => {
  const { productId } = useParams();

  const product = products.find((p) => p.id === productId);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container mt-4">
      <div className="row">
        
        {/* Images */}
        <div className="col-md-6">
          <ProductImages images={product.images} />
        </div>

        {/* Info */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <h4>₹{product.price}</h4>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-4">
        <ProductReviews reviews={product.reviews} />
      </div>
    </div>
  );
};

export default ProductDetails;