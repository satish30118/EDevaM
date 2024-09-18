import React from "react";
import "./awards.css";
import carbon from "../Images/carbon.png";
import AwardsData from "./AwardsData";

const lec = [
  {
    title: `Delivered an invited talk on "Mathematical Modeling of Li-ion Batteries and Challenges in Large-Scale Battery Applications", 17th Dec, 2022, National Conference on Energy Materials and Devices (E-MADs) 2022 at IIT Jodhpur`,
  },
  {
    title: `Delivered an invited lecture (online) on "Mathematical Modeling and Simulation of Li-ion Batteries", 29th Sept, 2022, School of Mechanical Engineering, Yeungnam University, Korea (Host: Prof. Sang Woo Joo)`,
  },
  {
    title: `Delivered an invited lecture on "Lithium-ion batteries and beyond", 12th April 2022, Extramural Lecture Series, Department of Chemical Engineering, NIT Trichy`,
  },
  {
    title: `Delivered an invited talk on "Rechargeable batteries: Introduction and Challenges for Emerging Applications", 11th Feb, 2022, Virtual Conference on Batteries and Fuel Cells at KBP College, Vashi, Navi Mumbai`,
  },
  {
    title: `Organized one-week short-term course on “Advanced Rechargeable batteries: From powder to power”, 25th-30th Dec 2020, sponsored by TEQIP, MHRD`,
  },
  {
    title: `Delivered an expert lecture on “Mathematical Modeling and Simulation for System and Component Design of Batteries” under TEQIP sponsored short-term course on “Advanced Rechargeable batteries: From powder to power”, 25th-30th Dec 2020`,
  },
  {
    title: `Delivered an expert lecture on “Fuel cells: Introduction, Components and Challenges” under TEQIP-faculty development program on “Sustainable energy technologies: Synthesis of alternative fuels, characterization, and molecular simulations” 07th-11th Dec 2020 sponsored by TEQIP, MHRD`,
  },
  {
    title: `Delivered an expert lecture on “Mathematical modelling of Fuel Cells”, under Faculty Development Program on "Electrochemical Energy Conversion and Storage", 23rd-27th Nov 2020, Sponsored by AICTE Training and Learning (ATAL) Academy`,
  },
  {
    title: `Delivered an expert lecture on “Applications of Electrochemical Power Sources, Focus: Electric Vehicles”, under Faculty Development Program on "Electrochemical Energy Conversion and Storage", 23rd-27th Nov 2020, Sponsored by AICTE Training and Learning (ATAL) Academy`,
  },
  {
    title: `Delivered an invited talk on “Mathematical Modeling and Simulation for System and Component Design of Electrochemical Energy Devices”, 18th Dec 2019, 13th National Conference on Solid State Ionics, IIT Roorkee`,
  },
];

const conf = [
  {
    title: `A. K. Sharma, Numerical Optimization of Catalyst Layers in a Proton Exchange Membrane Fuel Cell, 1st Forum of Young Researchers on Heterogeneous Catalysis, Szeged, Hungary (2022)`,
  },
  {
    title: `A. K. Sharma and E. Birgersson, Understanding and eliminating interaction of cells in an electrochemical stack, AIChE Annual Meeting, San Francisco, USA (2016)`,
  },
  {
    title: `S. Padavala, A. K. Sharma and E. Birgersson, Asymptotically Reduced Zero-dimensional Model for an All-vanadium Redox Flow Battery, AIChE Annual Meeting, San Francisco, USA (2016)`,
  },
  {
    title: `E. J. Guan, A. K. Sharma, E. Birgersson, Proton exchange membrane fuel cell stack optimization with a distributed genetic algorithm, 7th International Conference on Materials for Advanced Technologies (ICMAT), Singapore (2013)`,
  },
  {
    title: `A. K. Sharma, S. H. Khor, and E. Birgersson. Verified hybrid simulation strategy for a proton exchange membrane fuel cell stack model based on scale analysis, European Congress on Chemical Engineering, The Hague (2013)`,
  },
  {
    title: `A. K. Sharma and E. Birgersson. Asymptotically reduced three-dimensional model for a proton exchange membrane fuel cell, European Congress on Chemical Engineering, The Hague (2013)`,
  },
  {
    title: `A. K. Sharma, S. S. Ang, and E. Birgersson. Computationally-efficient Three-dimensional Modeling for Automotive Catalytic Converters, International Workshop on Mathematics in Chemical Kinetics and Engineering (MaCKiE), Chennai, India (2013)`,
  },
  {
    title: `A. K. Sharma and E. Birgersson. Multi-objective optimization for design of PEMFC electrodes. Asian Conference on Electrochemical Power Sources (ACEPS), Chennai, India (2012)`,
  },
  {
    title: `A. K. Sharma, E. Birgersson, and H. Ly. Numerical optimization of nano-sized functional groups in proton exchange membrane fuel cells. MRS-S Trilateral Conference on Advances in Nanoscience Energy, Water & Healthcare, Singapore (2010)
    `,
  },
];

const Awards = () => {
  return (
    <div className="awards">
      {/* <div className="a-top">
        <h1>Our Awards</h1>
        <div className="a-top-1">
          <img src={carbon} alt="" />
          <div className="a-top-1-1">
            <h2>Summary about the awards : </h2>
            <ul>
              <li>Delivered many expert lectures.</li>
              <li>Delivered many invited talks.</li>
              <li>Organized one-week short-term courses.</li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="a-bottom">
        <h2>Awards and Achievements</h2>
        <div className="a-b-1">
          {AwardsData.map((data) => {
            return <div className="a-b-2">{data.title}</div>;
          })}
        </div>
      </div>
      <div className="a-bottom">
        <h2>Lectures Delivered</h2>
        <div className="a-b-1">
          {lec.map((data) => {
            return <div className="a-b-2">{data.title}</div>;
          })}
        </div>
      </div>
      <div className="a-bottom">
        <h2>Conference presentations</h2>
        <div className="a-b-1">
          {conf.map((data) => {
            return <div className="a-b-2">{data.title}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Awards;
