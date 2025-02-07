import React from 'react'
import './about.css'
import about from '../Images/about.png'
import vision from '../Images/vision.png'

function About() {
  return (
    <div className='about'>
      <div className='about-top'>
        <h1>About Us</h1>
        <div className='about-t-1'>
          <p>Building a site is, in many ways, an exercise of willpower. It's intriguing to get distracted by the fancy world of the design process and forget all about generating compelling content.It's that amazing content that is significant to making inbound marketing work for your business. So how would you balance your outstanding content creation with your website design requirements? It all begins with the "About Us" page.For a remarkable About Us page, you simply need to figure out your organization's one-of-a-kind personality and afterward share it with the rest of the world. Easy, correct? Certainly not.Your "About Us" page is perhaps the main page on your site, and it should be well crafted. This page likewise can also turn out to be the most disregarded pages, which is why you should make it stick out. </p>
          <img src={about} alt="" />
        </div>
    </div>
    <div className='about-bottom'>
      <h1>Our Vision</h1>
      <div className='about-b-1'>
        <img src={vision} alt="" />
        <p>For a remarkable About Us page, you simply need to figure out your organization's one-of-a-kind personality and afterward share it with the rest of the world. Easy, correct? Certainly not.Your "About Us" page is perhaps the main page on your site, and it should be well crafted. This page likewise can also turn out to be the most disregarded pages, which is why you should make it stick out.</p>
      </div>
    </div>
    </div>
  )
}

export default About