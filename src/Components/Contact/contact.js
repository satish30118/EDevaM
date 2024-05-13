import React from 'react'
import './contact.css'
import {Link} from 'react-router-dom'
import {FaInstagram,FaYoutube} from 'react-icons/fa'
import {FiTwitter,FiLinkedin,FiFacebook} from 'react-icons/fi'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='c-top'>
          <h1>Message Us</h1>
          <p>If you want to further know about our reaches our any kind of information, feel free and relax to contact us through our various social handles mentioned below.........</p>
    </div>
    <div className='c-bottom'>
      <p><span>Email-id :</span> ashwini@ch.iitr.ac.in</p>
      <p><span>Contact No. :</span> +91-1332-284926</p>
      <p><span>Address :</span> Lab No. 306, Chemical Engineering Dept. IIT Roorkee, Roorkee,247667 </p>
      <div className='s-links'>
        <Link to=''>
            <FiFacebook color='black' />
        </Link>
        <Link to=''>
            <FiTwitter color='black' />
        </Link>
        <Link to=''>
            <FaInstagram color='black' />
        </Link>
        <Link to=''>
            <FiLinkedin color='black' />
        </Link>
        <Link to=''>
            <FaYoutube color='black' />
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Contact