import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_logo from '../Assets/instagram_icon.png'
import pintester_logo from '../Assets/pintester_icon.png'
import whatsapp_logo from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <Link to='/'><img src={footer_logo} alt="" /></Link>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Offices</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-conatainer">
                <img src={instagram_logo} alt="" />
            </div>
            <div className="footer-icons-conatainer">
                <img src={pintester_logo} alt="" />
            </div>
            <div className="footer-icons-conatainer">
                <img src={whatsapp_logo} alt="" />
            </div>
        </div>
        <div className="footer-copyrights">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer