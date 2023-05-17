import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

function TestimonialApp() {
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Title text={"Testimonials App"}></Title>
      <Button
        text={"Posts"}
        btnClass="btn-info"
        icon={
          <BsFillFileEarmarkPostFill className=""></BsFillFileEarmarkPostFill>
        }
        onClick={() => setTestimonials("Posts")}
      ></Button>{" "}
      <Button
        text={"Users"}
        btnClass="btn-info"
        icon={<FaUserAlt></FaUserAlt>}
        onClick={() => setTestimonials("Users")}
      ></Button>
      <Button
        text={"Comments"}
        btnClass="btn-info"
        icon={<BiCommentDetail></BiCommentDetail>}
        onClick={() => setTestimonials("Comments")}
      ></Button>
      <Title
        classes={"subtitle text-primary"}
        text={!testimonials ? "Select form Above" : testimonials}
      ></Title>
      {!items
        ? null
        : items.map((item) => (
            <div className="card card-primary mb-2" key={item.id}>
              {item.name && <h2 className="card-header">{item.name}</h2>}
              <div className="card-body">
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </div>
              {item.email && (
                <small className="card-footer">{item.email}</small>
              )}
            </div>
          ))}
    </div>
  );
}

export default TestimonialApp;
