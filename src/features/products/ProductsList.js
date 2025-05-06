// src/features/products/ProductsList.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart } from "../cart/cartSlice";
import "./ProductsList.css";

function ProductsList() {
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false); // order state

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setOrderPlaced(false); // reset confirmation if user adds more items
  };

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    setOrderPlaced(true);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="product-list">
      <h2>🛍️ Product Details</h2>

      {/* Product List */}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-section" style={{ marginTop: "40px" }}>
        {!orderPlaced && (
          <>
            <h2>🛒 Items in Cart</h2>
            {cartItems.length === 0 ? (
              <p>No items in cart.</p>
            ) : (
              <div>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      {item.title} - ${item.price}
                    </li>
                  ))}
                </ul>
                <h3>Total: ${total.toFixed(2)}</h3>
                <button onClick={handlePlaceOrder}>Place Order</button>
              </div>
            )}
          </>
        )}
        {orderPlaced && (
          <p style={{ color: "green", fontWeight: "bold", marginTop: "20px" }}>
            ✅ Order is confirmed!
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
