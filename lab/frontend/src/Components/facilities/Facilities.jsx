import React from "react";
import img1 from "./img/IMG_2564.jpg";
import img2 from "./img/IMG_2565.jpg";
import img3 from "./img/IMG_2566.jpg";
import img4 from "./img/IMG_2567.jpg";
import img5 from "./img/IMG_2568.jpg";
import img6 from "./img/IMG_2569.jpg";
import img7 from "./img/IMG_2570.jpg";
import img8 from "./img/IMG_2571.jpg";
import img9 from "./img/IMG_2572.jpg";
import img10 from "./img/IMG_2573.jpg";

const Facilities = () => {
  const facility = [
    {
      id: 0,
      topic: "Neware battery Cycler",
      img: img10,
      dec: "",
    },
    {
      id: 1,
      topic: "Arbin Battery Cycler",
      img: img1,
      dec: "",
    },
    {
      id: 2,
      topic: "Gamry Potentiostat",
      img: img2,
      dec: "",
    },
    {
      id: 3,
      topic: "Tube Furnace",
      img: img3,
      dec: "",
    },
    {
      id: 4,
      topic: "Hot Air Oven",
      img: img4,
      dec: "",
    },
    {
      id: 5,
      topic: "",
      img: img5,
      dec: "",
    },
    {
      id: 6,
      topic: "Centrifuge",
      img: img6,
      dec: "",
    },
    {
      id: 7,
      topic: "Disc Cutter",
      img: img7,
      dec: "",
    },
    {
      id: 8,
      topic: "Sonicator",
      img: img8,
      dec: "",
    },
    {
      id: 9,
      topic: "Weighing Balance",
      img: img9,
      dec: "",
    },
    
  ];
  return (
    <>
      <h1 style={{textAlign:"center", color:"darkblue"}}>Our Facilities</h1>
      <div className="s-bottom"  style={{display:"flex", flexDirection:"row", width:"90vw", flexWrap: "wrap"}}>
        {facility.map((data) => {
          return (
            <div className="s-b-1" style={{ width: "auto", height:"400px" }} >
              <div
                style={{
                  textAlign: "center",
                  margin: "0px auto",
                  width: "100%",
                }}
              >
                <img src={data.img} alt="research" style={{height:"300px"}} />
                <div style={{fontWeight:"600",fontSize:"25px", textTransform:"capitalize"}} >{data.topic}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Facilities;
