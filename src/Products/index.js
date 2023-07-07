import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setProducts(result.products);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);
  console.log({ products });
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="products">
      {products.map((item) => (
        <div key={item.id} className="product">
          <img className="image" alt="" src={item.images[1]} />
          <Link to="/add">
            <button>Add</button>
          </Link>
          <h3 className="h3">Brand:{item.title}</h3>
          <p className="p"> Price:{item.price} </p>
          <p className="p1"> Discount Percentage:{item.discountPercentage}</p>
          <Link to={`/product/${item.id}`}>
            <button className="btn">View details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default Product;