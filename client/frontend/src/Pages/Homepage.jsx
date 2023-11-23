import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { HomeCarusalData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import NCarusal from "../customer/NewCarusal/NCarusal";
import MainBrand from "../Assests/Screenshot 2023-11-22 201005.png";
import { hommesectiondata } from "../HomeSectionData/homesectiondata";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {/* <HomeCarousel images={HomeCarusalData} /> */}
      <NCarusal />

      <div className="mt-16">
        {/* <HomeProductSection data={mens_kurta} section={"Men's Section"} /> */}
        {/* <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} /> */}
        {/* <HomeProductSection data={lengha_page1} section={"Lengha Choli"} /> */}
        {/* <HomeProductSection data={sareePage1} section={"Saree"} /> */}
        {/* <HomeProductSection data={dressPage1} section={"Dress"} /> */}
        {/* <HomeProductSection data={gounsPage1} section={"Women's Gouns"} /> */}
        {/* <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} /> */}
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}

        <h1 className="font-bold text-gray-600 text-2xl ml-10">
          GRAND GLOBAL BRANDS
        </h1>
        <img className="mt-10 mb-10" src={MainBrand} alt="" />
      </div>

      {/* Grid section */}

      <h1 className="text-2xl mt-14 text-gray-600 uppercase font-bold ml-10">
        SHOP BY CATEGORY
      </h1>
      <div className="grid grid-cols-6 mt-14 ">
        {hommesectiondata.map((item, index) => {
          return (
            <div className="" key={item.imgUrl}>
              <img
                className="h-[320px] cursor-pointer"
                onClick={() => navigate(`${item.redirectTo}`)}
                src={item.imgUrl}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
