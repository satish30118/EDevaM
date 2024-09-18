import React, { useState } from "react";
import "./people.css";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import poonam from "./img/Poonam.png";
import vinod from "./img/Vinod.png";
import shubham from "./img/Shubham.jpg";
import abhishek from "./img/Abhishek.jpg";
import dinesh from "./img/Dinesh.jpg";
import uttam from "./img/Uttam.png";
import yash from "./img/Yash.png";
import prerak from "./img/Prerak.png";
import sahil from "./img/Sahil.jpeg";

const postdoc = [
  {
    img: poonam,
    name: "Poonam Rani",
    link: "https://www.linkedin.com/in/poonam-rani-51996b119/",
    desc: "Currently, I am working as a postdoctoral fellow at E-DevM lab, at Indian Institute of Technology Roorkee. Earlier, I completed my bachelor’s and master of technology degrees from Kurukshetra University. I received my Ph.D. Degree in March 2022 from the Department of chemical engineering, Indian Institute of Technology Hyderabad. During Ph.D.,  My research work focused on the design and development of carbon-based interlayers as the prospective approach toward the high-performance lithium-sulfur battery.",
  },
];

const phd = [
  {
    img: vinod,
    name: "Vinod Kumar",
    link: "https://www.linkedin.com/in/vinod-kumar-64263b94",
    desc: `In my doctoral work, I am engaged with the project entitled "Design and operating consideration in fast charging of Li-ion batteries". The project aimed to study the effect of cell design and operation conditions on the performance of the cell during fast charging. The project work involves, the use of electrochemical and postmortem characterization of commercial cylindrical cells to study the effect of various operating conditions on the capacity fade of the cells. In addition, I am also pursuing research on the mathematical thermal modeling and simulation of Li-ion batteries to predict the thermal behavior under various operating and design conditions.`,
  },
  {
    img: shubham,
    name: "Shubham Khange",
    link: "",
    desc: `I completed my master’s from IIT Roorkee in 2021, in my master’s I was working on a Monte-Carlo simulation for aging in Li-ion batteries. I developed a keen interest in the mathematical modeling of battery degradation. Thus, I decided to pursue a Ph.D. in this area and joined the Department of Chemical Engineering at IIT Roorkee in 2021.
    My research expertise includes: i. Modeling of DFN and SPM models to predict li-ion battery aging and ii. To analyze the behavior of battery aging during fast charging.`,
  },
  {
    img: abhishek,
    name: "Abhishek Dharmesh",
    link: "https://www.linkedin.com/in/abhishek-dharmesh-238131157",
    desc: `I have completed my master’s in chemical engineering from IIT(ISM) Dhanbad. Currently, I am pursuing Ph.D. at Department of Chemical Engineering, IIT Roorkee.
    My research interest includes tailoring the biomass derived carbon host with different materials to enhance their functional properties for the Metal-Sulphur batteries. This can effectively accelerate the redox kinetics and increase the cycling of the batteries and facilitate the path for the deployment of these batteries in practical applications.`,
  },
  {
    img: dinesh,
    name: "Dinesh Patel",
    link: "https://www.linkedin.com/in/dinesh-patel-ba2939225",
    desc: `I completed my graduation and post-graduation from the University of Mumbai in chemistry honors in 2019. I joined the "E-DevM lab" at IIT Roorkee as a PhD scholar in 2022. I have been interested in the field of energy storage and electrocatalyst since my master's. My research area includes aqueous metal ions and metal sulfur batteries. I am also interested in nanomaterials synthesis and the application of nanomaterials in electrocatalytic applications.`,
  },
];
const mtech = [
  {
    img: sahil,
    name: "Sahil Yadav",
    link: `https://www.linkedin.com/in/sahil-yadav-741275194/`,
    desc: `My name is Sahil Yadav, and I hold an undergraduate degree in Chemical Engineering. I am currently pursuing a Master's degree in Chemical Engineering at IIT Roorkee. During my undergraduate studies, I worked on a project focused on the "Extraction of Silica from Rice Husk", where I gained valuable research experience. Presently, I am working on the modeling and simulation of lithium-ion batteries. My research involves formulating and analyzing mathematical models to investigate the thermal behavior of lithium-ion batteries, particularly during thermal runaway, to advance battery safety and performance.`,
  },
];
const intern = [
  {
    img: uttam,
    name: "Uttam Gupta",
    link: "https://www.linkedin.com/in/uttam-gupta-3025421a8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsW0J6UAxS%2FaaiMXp",
    desc: `Uttam gupta here, I have completed my undergraduate degree in chemical engineering, and I’m pursuing my master's degree in chemical engineering from IIT Roorkee. I worked on a project involving Composites of Commercial Value from Solid Waste Recycled Material throughout my undergraduate studies. And I'm currently working on the modeling and simulation of lithium-ion batteries under the supervision of Dr. Ashwini Kumar Sharma. I have a keen interest in lithium-ion batteries. In this project, I formulate and analyze mathematical models for lithium-ion batteries.`,
  },
  {
    img: yash,
    name: "Yash Sharma",
    link: "https://www.linkedin.com/in/yash-sharma-9b0a791b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPYlN%2BTF4SD6HUphTaYQh8w%3D%3D",
    desc: `I am currently a third-year undergraduate student majoring in Materials and Metallurgical engineering at Punjab Engineering College (Deemed to be University), in India. I have experience with electrochemical processes including solar water splitting, urea electro-oxidation, hydrogen evolution reaction, and oxygen evolution. The study's main goal was to reduce the overall water-splitting potential. My current research endeavor include synthesis of suitable cathode materials for aqueous metal ion and metal sulfur batteries.`,
  },
];
const alumini = [
  {
    img: prerak,
    name: "Prerak Upadhyay",
    link: "",
    desc: `I am "Prerak Upadhyay" doing my masters (M.Tech.) degree from Department of Chemical Engineering, IIT ROORKEE in 2023. Currently i am working on "Parametric analysis of sodium-ion battery via mathematical modeling".
    I did my B.Tech from Delhi Technological University in 2020, During my bachelors I did a major project entitled "Polyaniline/Titanium/Cerium nitrate pigment for epoxy based anticorrosion coatings" under the guidance of Dr. CM Pandey. Apart from the major project, i did two internships.`,
  },
];
const People = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="people">
      <h1>Our People are as follows: </h1>

      <div className="people-btn">
        <button
          onClick={() => setActive(true)}
          style={{
            borderColor: `${active ? "red" : "blue"}`,
            color: `${active ? "red" : "blue"}`,
          }}
        >
          Current Member
        </button>
        <button
          onClick={() => setActive(false)}
          style={{
            borderColor: `${!active ? "red" : "blue"}`,
            color: `${!active ? "red" : "blue"}`,
          }}
        >
          Alumini
        </button>
      </div>

      <div className="p-1">
        {/* CURRENT MEMBERS */}
        <div
          style={{
            display: `${active ? "block" : "none"} `,
          }}
        >
          <div className="p-4">
            <h2>Post Doc</h2>
            <div className="people-card">
              {postdoc.map((data) => {
                return (
                  <div className="people-card-div">
                    <div className="people-card-div-left">
                      <img src={data.img} alt="people" />
                      <div>
                        <h2>{data.name}</h2>
                        <Link to={data.link}>
                          <FaLinkedinIn />
                        </Link>
                      </div>
                    </div>
                    <div className="people-card-div-right">
                      <p>{data.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4">
            <h2>Ph.D</h2>
            <div className="people-card">
              {phd.map((data) => {
                return (
                  <div className="people-card-div">
                    <div className="people-card-div-left">
                      <img src={data.img} alt="people" />
                      <div>
                        <h2>{data.name}</h2>
                        <Link to={data.link}>
                          <FaLinkedinIn />
                        </Link>
                      </div>
                    </div>
                    <div className="people-card-div-right">
                      <p>{data.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-4">
            <h2>M.Tech</h2>
            <div className="people-card">
              {mtech.map((data) => {
                return (
                  <div className="people-card-div">
                    <div className="people-card-div-left">
                      <img src={data.img} alt="people" />
                      <h2>{data.name}</h2>
                      <Link to={data.link}>
                        <FaLinkedinIn />
                      </Link>
                    </div>
                    <div className="people-card-div-right">
                      <p>{data.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          style={{
            display: `${!active ? "block" : "none"} `,
          }}
        >
          <div className="p-4">
            <h2>Alumini</h2>
            <div className="people-card">
              {alumini.map((data) => {
                return (
                  <div className="people-card-div">
                    <div className="people-card-div-left">
                      <img src={data.img} alt="people" />
                      <h2>{data.name}</h2>
                      <Link to={data.link}>
                        <FaLinkedinIn />
                      </Link>
                    </div>
                    <div className="people-card-div-right">
                      <p>{data.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="p-4">
            <h2>Intern</h2>
            <div className="people-card">
              {intern.map((data) => {
                return (
                  <div className="people-card-div">
                    <div className="people-card-div-left">
                      <img src={data.img} alt="people" />
                      <h2>{data.name}</h2>
                      <Link to={data.link}>
                        <FaLinkedinIn />
                      </Link>
                    </div>
                    <div className="people-card-div-right">
                      <p>{data.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
