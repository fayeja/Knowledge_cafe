import React from "react";
import "./Knowledge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Question from "../Question/Question";

const Knowledge = (props) => {
  const { name, title, img, Author_img, Read_time, Publish_date } = props.blog;

  const handleAddToCart = props.handleAddToCart;
  const handleAddToSpendTime = props.handleAddToSpendTime;

  return (
    <div className="knowledge">
      <div>
        <img src={img} alt="" />
        <div className="author">
          <div className="Author_img">
            <img src={Author_img} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{Publish_date}</p>
            </div>
          </div>
          <p>
            {Read_time} min read{" "}
            <FontAwesomeIcon
              onClick={() => handleAddToCart(props.blog)}
              icon={faBookmark}
            />
          </p>
        </div>
        <h2>{title}</h2>
        <p>#beginners #programming</p>
        <a onClick={() => handleAddToSpendTime(props.blog)}>Mark as read</a>
      </div>
    </div>
  );
};

export default Knowledge;
