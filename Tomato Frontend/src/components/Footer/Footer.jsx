import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Welcome to <b className='footerLogo'>Tomato.</b>, your ultimate destination for a diverse selection of delicious vegetarian dishes from around the world. Our menu is thoughtfully curated to bring you the best of traditional and contemporary cuisine, made with fresh, high-quality ingredients. Whether you're in the mood for a hearty main course, a refreshing salad, or a quick snack, we've got something to satisfy every craving. Explore our offerings and embark on a culinary journey that
</p>
                <div className='social-img'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privecy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-7869505416</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copy-right'> Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  )
}


export default Footer
