import React from "react";
import "./home.css";
import about from "../Images/about.png";
import { Link } from "react-router-dom";
import carbon from "../Images/res.jpg";
import Gallery from "../../Components/Gallery/gallery";

const res = [
  {
    img: "carbon.png",
    title: "CARBON BASED HIERARCHICAL STRUCTURES",
    desc: "We synthesize a variety of carbon micro- and nano- structures using sol-gel emulsion, electrospinning, pyrolysis and chemical vapor deposition technique. A large number of......",
  },
  {
    img: "carbon.png",
    title: "CARBON BASED HIERARCHICAL STRUCTURES",
    desc: "We synthesize a variety of carbon micro- and nano- structures using sol-gel emulsion, electrospinning, pyrolysis and chemical vapor deposition technique. A large number of......",
  },
];

function Home() {
  return (
    <>
      <h1 className="home-1-h1">Energy Devices and Multiphysics Laboratory</h1>
      <div className="home">
        <div className="home-1">
          <div className="home-1-1">
            {/* <h1 className="home-1-h1">E-DevaM</h1> */}
            {/* <p>
            The advanced rechargeable battery industry in Europe has created job
            opportunities for hundreds of thousands people, from engineering and
            battery manufacturing, to mining and production, to RD&I and waste
            treatment.
            </p> */}
          </div>
          <Link to="/research" style={{position:"absolute",bottom:"20px" }}> 
            <button className="btn">Read More...</button>
          </Link>
        </div>
        <div className="home-2">
          <h2>About Us</h2>
          <br></br>
          <div className="home-2-1">
            <div className="home-2-left">
              <p>
                At EDevaM, our vision is to pioneer a paradigm shift in energy
                solutions by harnessing cutting-edge research and innovative
                technologies. We aspire to revolutionize energy storage through
                our relentless pursuit of advancements in fast-charging
                protocols, robust aging mitigation strategies, and efficient
                thermal management for lithium-ion batteries. Moreover, we aim
                to push the boundaries of possibility by spearheading the
                development of next-generation energy storage systems. Our focus
                on advancing lithium-sulfur and aqueous zinc-sulfur batteries,
                utilizing eco-friendly biomass-derived carbon and optimized
                hybrid electrolyte compositions, embodies our dedication to
                creating environmentally conscious solutions. Through our
                interdisciplinary approach, we strive to not only meet but
                exceed the expectations of sustainable energy innovation. By
                fostering a culture of collaboration, creativity, and
                excellence, we aim to lead the charge in shaping a cleaner,
                greener future for generations to come.
              </p>
              {/* <Link to="/about">
                <button className="btn">Read More...</button>
              </Link> */}
            </div>
            <img src={carbon} alt="" />
          </div>
        </div>
        <div className="home-3">
          <h2>Gallery </h2>
          {/* <div className="home-3-card">
            {res.map((data) => {
              return (
                <div className="about-card">
                  <img src={data.img} alt="" />
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                </div>
              );
            })}
            
          </div> */}
          {/* <div className="gall"> */}
          <Gallery />
          {/* </div> */}
        </div>
        <div className="home-4">
          <div className="news-sec">
            <h2>News and Announcements</h2>
            <ul>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
                debitis.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis, officiis!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione, sit!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
                quia.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Itaque, libero.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
