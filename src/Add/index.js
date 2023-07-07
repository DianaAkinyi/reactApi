import React, { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import "./style.css";
const Add = ({ handleNewProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title,
      price,
      discount,
      thumbnail: "https://dummyimage.com/200x200",
    };
    handleNewProduct(newProduct);
    setTitle("");
    setPrice("");
    setDiscount("");
    navigate("/products");
  };
  return (
    <div className="add-product">
      <div className="form-wrapper">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="discount">Discount:</label>
            <input
              type="number"
              id="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          {/* <button type="submit">Add</button> */}
          <button classNa type="submit">
          <Link to="/products">Add</Link>
          
        </button>
        </form>
      </div>
    </div>
  );
};
export default Add;