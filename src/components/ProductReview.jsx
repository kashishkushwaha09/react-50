// ProductReviews.jsx

const ProductReviews = ({ reviews }) => {
  return (
    <div>
      <h4>Reviews</h4>

      {reviews.length === 0 ? (
        <p>No reviews yet</p>
      ) : (
        reviews.map((rev) => (
          <div key={rev.id} className="border p-2 mb-2">
            <strong>{rev.user}</strong>
            <p>{rev.comment}</p>
            <span>⭐ {rev.rating}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductReviews;