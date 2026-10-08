import { useState } from "react";

export default function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);

  // Calculate discount percentage
  const getDiscount = () => {
    if (!product.mrp || !product.price) return 0;

    const mrp = parseFloat(product.mrp.replace(/[₹,]/g, ""));
    const price = parseFloat(product.price.replace(/[₹,]/g, ""));

    if (!mrp || !price || mrp <= price) return 0;

    return Math.round(((mrp - price) / mrp) * 100);
  };

  const discount = getDiscount();

  return (
    <>
      <article className="product-card h-180">

        {/* Product Image */}
        <div className="product-img">
          <img
            src={product.image}
            alt={product.name}
          />

          {/* Product Badge */}
          {product.badge && (
            <span className="product-badge">
              {product.badge}
            </span>
          )}

          {/* Heart */}
          <button className="heart-btn">
            <i className="bi bi-heart"></i>
          </button>
        </div>

        {/* Product Details */}
        <div className="p-3">

          {/* Rating + Offer */}
          <div className="d-flex justify-content-between align-items-center mb-2">

            <div className="stars">
              ★★★★★ <small>(12)</small>
            </div>

            {product.offer && (
              <span className="offer-label">
                {product.offer}
              </span>
            )}

          </div>

          {/* Product Name */}
          <h5>{product.name}</h5>

          {/* Price + View */}
          <div className="d-flex justify-content-between align-items-center">

            <div className="price-section">

              {/* Selling Price */}
              <strong className="current-price">
                {product.price}
              </strong>

              {/* MRP */}
              {product.mrp && (
                <span className="mrp-price">
                  M.R.P: {product.mrp}
                </span>
              )}

              {/* Discount */}
              {discount > 0 && (
                <span className="discount">
                  ({discount}% off)
                </span>
              )}

            </div>

            {/* View Button */}
            <button
              className="btn btn-outline-brand btn-sm"
              onClick={() => setShowModal(true)}
            >
              View
            </button>

          </div>
        </div>
      </article>

      {/* =========================
          PRODUCT MODAL
      ========================= */}

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{
            backgroundColor: "rgba(0,0,0,0.5)"
          }}
          onClick={() => setShowModal(false)}
        >

          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-content">

              {/* Modal Header */}
              <div className="modal-header">

                <h5 className="modal-title">
                  {product.name}
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>

              </div>

              {/* Modal Body */}
              <div className="modal-body">

                <div className="row align-items-center">

                  {/* Product Image */}
                  <div className="col-md-6 text-center">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid rounded"
                    />

                  </div>

                  {/* Product Information */}
                  <div className="col-md-6">

                    {/* Rating + Offer */}
                    <div className="d-flex justify-content-between align-items-center mb-2">

                      <div className="stars">
                        ★★★★★ <small>(12)</small>
                      </div>

                      {product.offer && (
                        <span className="offer-label">
                          {product.offer}
                        </span>
                      )}

                    </div>

                    {/* Product Name */}
                    <h3>{product.name}</h3>

                    {/* Price */}
                    <div className="price-section my-3">

                      <strong className="current-price">
                        {product.price}
                      </strong>

                      {product.mrp && (
                        <span className="mrp-price">
                          M.R.P: {product.mrp}
                        </span>
                      )}

                      {discount > 0 && (
                        <span className="discount">
                          ({discount}% off)
                        </span>
                      )}

                    </div>

                    {/* Special Offer */}
                    {product.offer && (
                      <div className="alert alert-success py-2">
                        <strong>Special Offer:</strong>{" "}
                        {product.offer}
                      </div>
                    )}

                    {/* Description */}
                    <p>
                      {product.description ||
                        "This is a high-quality product. View the product details and specifications here."}
                    </p>

                    {/* Badge */}
                    {product.badge && (
                      <span className="badge bg-secondary mb-3">
                        {product.badge}
                      </span>
                    )}

                    {/* Buttons */}
                    <div>

                      <button className="btn btn-primary me-2">
                        Add to Cart
                      </button>

                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
