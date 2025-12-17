import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-image-placeholder">
          <span className="product-category-badge">{product.subcategory}</span>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
          <div className="product-part-number">Part #{product.partNumber}</div>
        </div>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-details">
          <div className="product-rating">
            <span className="stars">{'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}</span>
            <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
          </div>
          
          <div className="product-specs">
            <span className="spec-item">
              <strong>Installation:</strong> {product.installationDifficulty}
            </span>
            <span className="spec-item">
              <strong>Time:</strong> {product.installationTime}
            </span>
          </div>
        </div>
        
        <div className="product-footer">
          <div className="product-price-section">
            <span className="product-price">${product.price}</span>
            <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
              {product.inStock ? '✓ In Stock' : 'Out of Stock'}
            </span>
          </div>
          
          <button className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
