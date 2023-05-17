import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";

import DogyDog from "./img/dog.jpg";

function LikePhotoApp() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount((prevState) => prevState + 1);
    } else {
      setLike(false);
      setCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className="container text-center">
      <Title text={"Like Photo App"}></Title>
      <Title classes={"subtitle"} text={`Likes ${count}`}></Title>
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2"></AiFillSmile>
          <small>DogyDog</small>
        </div>
        <img
          src={DogyDog}
          alt="img"
          style={{ height: "fit-content" }}
          onDoubleClick={toggleLike}
        />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />{" "}
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikePhotoApp;
