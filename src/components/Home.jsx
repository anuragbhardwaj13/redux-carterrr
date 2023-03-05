import React from "react";
import ProductCard from "./ProductCard";
import ProductList from "../assets/productList.json";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div className="home">
      {ProductList.map((i) => (
        <ProductCard
          key={i.id}
          id={i.id}
          name={i.title}
          imgSrc={i.images[0]}
          price={i.price}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
