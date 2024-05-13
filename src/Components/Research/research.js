import React from "react";
import "./research.css";
import carbon from "../Images/res.jpg";
import mathMod from "../../asset/mathematical.jpg";
import metIon from "../../asset/metalion.png";
import aquBattery from "../../asset/AQUEOUS BATTERIES.png";
import metalAir from "../../asset/METAL AIR BATTERIES.jpg";
const res = [
  {
    img:metalAir,
    topic: "Mathematical Modeling",
    desc: "Mathematical modeling of thermal and aging behavior of lithium-ion batteries is a complex and interdisciplinary field that combines principles of electrochemistry, thermodynamics, and physics. Aim of our team is to gain a better understanding of the underlying mechanisms and to predict the performance of the battery under different conditions.",
  },
  {
    img: metIon,
    topic: "Metal-ion and Metal-Sulfur Battery",
    desc: "The specific capacities of most cathodes for Li-ion batteries have reached their theoretical limit.  A Lithium-Sulfur battery system is very promising due to its very high theoretical gravimetric energy density (2600 Whkg-1) resulting from the very high theoretical specific capacity of the Sulfur cathode (1675 mAhg-1).",
  },
  {
    img: mathMod,
    topic: "Aqueous Batteries",
    desc: "The aqueous zinc-sulfur battery is a type of rechargeable battery that uses aqueous (water-based) electrolytes and zinc and sulfur as the active materials. This battery technology is attractive due to its high energy density, low cost, environmental sustainability, and the availability of its raw materials.",
  },
  {
    img: aquBattery,
    topic: "Metal Air Batteries",
    desc: "Metal-air batteries have a theoretical energy density that is much higher than that of lithium-ion batteries and are frequently advocated as a solution toward next-generation electrochemical energy storage for applications including electric vehicles or grid energy storage.",
  },
];

const Research = () => {
  return (
    <div className="res">
      <div className="s-top">
        <h1>Our Research</h1>
        <div className="s-top-1">
          <img src={carbon} alt="" />
          <div className="s-top-1-1">
            <h2>Summary about the research: </h2>
            <ul>
              <li>Mathematical Modeling</li>
              <li>Metal-ion and Metal-Sulfur Battery</li>
              <li>Aqueous Batteries</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="s-bottom">
        {res.map((data) => {
          return (
            <div className="s-b-1">
              <div className="s-b-1-1">
                <h2>{data.topic}</h2>
                <p>{data.desc}</p>
              </div>
                <img src= {data.img} alt="research" />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Research;
