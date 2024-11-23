import React from 'react';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        {/* Text Section */}
        <div className="hero-text">
          <h1>
            Discover Your Natural <span className="highlight">Glow</span>
          </h1>
          <p>
            Experience luxury skincare with our premium collection of natural and
            effective products.
          </p>
          <div className="button-group">
            <button>Shop Now</button>
            <button>Explore Categories</button>
            <button>My Account</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/600x400?text=Image"
            alt="Natural skincare products"
          />
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="featured-products">
        <h2>Featured Skin Care Products</h2>
        <div className="product-cards">
          {/* Product Cards */}
          <div className="product-card">
            <img
              src="https://via.placeholder.com/280x280?text=Product+1"
              alt="Product 1"
            />
            <h3>Product 1</h3>
            <p>Luxury Skincare</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img
              src="https://via.placeholder.com/280x280?text=Product+2"
              alt="Product 2"
            />
            <h3>Product 2</h3>
            <p>Natural Ingredients</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <img
              src="https://via.placeholder.com/280x280?text=Product+3"
              alt="Product 3"
            />
            <h3>Product 3</h3>
            <p>Effective for Skin</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
