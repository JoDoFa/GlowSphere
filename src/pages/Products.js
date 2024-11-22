import React from 'react';

function Products() {
  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <p>Explore a variety of items available in our store.</p>

      <div className="product-card-container">
        {/* Example Product Cards */}
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 1" className="product-image"/>
          <h3 className="product-title">Product 1</h3>
          <p className="product-price">$25.00</p>
          <div className="product-buttons">
            <button className="view-details-btn">View Details</button>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
        
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 2" className="product-image"/>
          <h3 className="product-title">Product 2</h3>
          <p className="product-price">$40.00</p>
          <div className="product-buttons">
            <button className="view-details-btn">View Details</button>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>

        {/* Add more product cards as needed */}
      </div>
    </div>
  );
}

export default Products;
