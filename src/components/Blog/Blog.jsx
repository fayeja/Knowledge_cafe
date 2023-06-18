import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "../Cart/cart";
import Knowledge from "../Knowledge/Knowledge";
import Question from "../Question/Question";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [cart, setCart] = useState([]);
  const [time, setTime] = useState([]);
  

  useEffect(() => {
    fetch("knowledge.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleAddToSpendTime=(blog)=>{
    setTime([...time, blog]);
  };
  const handleAddToCart = (blog) => {
    // const newCart = [...cart, blog];
    // setCart(newCart);
    const exist = cart.find((ct) => ct.id === blog.id);
    if (exist) {
      toast.error("Already have Bookmarked");
      setCart([...cart, blog]);
    } else {
      toast.success("Added as Bookmark");
      setCart([...cart, blog]);
    }
  };

  return (
    <div className="blog_container">
      <div className="knowledge_container">
        {blogs.map((blog) => (
          <Knowledge
            key={blog.id}
            blog={blog}
            handleAddToCart={handleAddToCart}
            handleAddToSpendTime={handleAddToSpendTime}
          ></Knowledge>
        ))}
        <Question></Question>
      </div>
      <div className="bookmark_container">
        <Cart cart={cart} 
        time={time}></Cart>
      </div>
    </div>
  );
};

export default Blog;
