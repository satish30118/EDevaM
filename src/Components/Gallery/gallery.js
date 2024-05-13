import React from 'react'
import "./gallery.css";
import gimg1 from "../../asset/galleryimg1.jpg";
import gimg2 from "../../asset/galleryimg2.jpg";
import gimg3 from "../../asset/galleryimg3.jpg";
import gimg4 from "../../asset/galleryimg4.jpg";
import gimg5 from "../../asset/galleryimg5.jpg";
import gimg6 from "../../asset/galleryimg6.jpg";
import gimg7 from "../../asset/galleryimg7.jpg";
import gimg8 from "../../asset/galleryimg8.jpg";
import gimg9 from "../../asset/galleryimg9.jpg";
import gimg10 from "../../asset/galleryimg10.jpg";
import gimg11 from "../../asset/galleryimg11.jpg";
import gimg12 from "../../asset/galleryimg12.jpg";
import gimg13 from "../../asset/galleryimg13.jpg";
import gimg14 from "../../asset/galleryimg14.jpg";
import gimg15 from "../../asset/galleryimg15.jpg";
import gimg16 from "../../asset/galleryimg16.jpg";
import gimg17 from "../../asset/galleryimg17.jpg";
import gimg18 from "../../asset/galleryimg18.jpg";
import gimg19 from "../../asset/galleryimg19.jpg";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";



export default function gallery() {
    const scrolll=()=>{
        var left=document.querySelector(".scroll-images");
                    left.scrollBy(500,0)
    }
    const scrollr=()=>{
        var right=document.querySelector(".scroll-images");
        right.scrollBy(-500,0)
    }

  return (
    
    <div className='gallery-div'>
            {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/> */}

        <div className="main-scroll-div">
            <div>
                <button className='icon' onClick={scrollr}><GoArrowLeft/></button>
            </div>
            <div className='cover'>
                <div className="scroll-images">
                    <div className='child'><img className='child-img' src={gimg1} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg2} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg3} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg4} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg5} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg6} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg7} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg8} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg9} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg10} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg11} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg12} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg13} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg14} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg15} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg16} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg17} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg18} alt="gallery-img" /></div>
                    <div className='child'><img className='child-img' src={gimg19} alt="gallery-img" /></div> 
                </div>
            </div>
            <div>
            <button className='icon' onClick={scrolll}><GoArrowRight/></button>
            </div>
            {/* <script>
                function scrolll() {
                    var left=document.querySelector(".scroll-images");
                    left.scrollBy(350,0)
                }
                function scrollr() {
                    var right=document.querySelector(".scroll-images");
                    right.scrollBy(-350,0)
                }
            </script> */}
        </div>
        
      
    </div>
    
  )
  
}

