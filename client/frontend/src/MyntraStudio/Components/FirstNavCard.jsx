import React, { useEffect } from "react";
import imageOne from "../../Assests/homesectionImage/six.jpg";
import imageTwo from "../../Assests/homesectionImage/three.jpg";
import imageThree from "../../Assests/homesectionImage/14.jpg";
import axios from "axios";

const FirstNavCard = () => {
  async function getData() {
    const response = await axios.get("http://localhost:8080/studio");
    alert("hello world");
  }

  

  return (
    <div className="w-full h-auto bg-white p-3 flex  cursor-pointer ">
      <div>
        <img className="h-[150px]" src={imageOne} alt="" />
      </div>
      <div>
        <img className="h-[150px]" src={imageThree} alt="" />
      </div>
      <div>
        <img className="h-[150px]" src={imageThree} alt="" />
      </div>
    </div>
  );
};

export default FirstNavCard;
