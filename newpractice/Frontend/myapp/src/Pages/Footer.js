import React from 'react'
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";

const Footer = () => {
return (
<footer class='footer mt-5'>
<div class='row footer-content'>

    <div class='col-12 col-sm-12 col-md-12 col-lg-3 footer-about'>
        <h3 class='d-flex justify-content-center pb-3'>About Us</h3>
        <p class='footer-about-p d-flex justify-content-center w-100'>
        We are dedicated to providing quality education and resources to help students grow and succeed in their academic journeys.
        </p>
    </div>

    
    <div class='col-12 col-sm-12 col-md-12 col-lg-3 footer-qk-links'>
        <h3 class='d-flex justify-content-center pb-3'>Quick Links</h3>
        <ul class='footer-qk-links-ul '>
            <li><a href="/courses" class='footer-qk-links-li d-flex justify-content-center'>Courses</a></li>
            <li><a href="/admissions" class='footer-qk-links-li d-flex justify-content-center'>Admissions</a></li>
            <li><a href="/contact" class='footer-qk-links-li d-flex justify-content-center'>Contact Us</a></li>
            <li><a href="/faq" class='footer-qk-links-li d-flex justify-content-center' >FAQ</a></li>
        </ul>
    </div>

    
    <div class='col-12 col-sm-12 col-md-12 col-lg-3 footer-contact'>
        <h3 class='d-flex justify-content-center pb-3'>Contact</h3>
        <p class='d-flex justify-content-center'>Email: info@educationwebsite.com</p>
        <p class='d-flex justify-content-center'>Phone: +1 (123) 456-7890</p>
        <p class='d-flex justify-content-center'>Address: 123 Knowledge Lane, LearnCity, USA</p>
    </div>

    
    <div class='col-12 col-sm-12 col-md-12 col-lg-3 footer-follow'>
        <h3 class='d-flex justify-content-center pb-3'>Follow Us</h3>
        <a href="##" class='footer-follow-a d-flex justify-content-center'>Facebook</a>
        <a href="##" class='footer-follow-a d-flex justify-content-center'>Twitter</a>
        <a href="##" class='footer-follow-a d-flex justify-content-center'>LinkedIn</a>
    </div>
</div>

<div class='footer-rights'>
    <hr class='footer-hr' />
    <p>&copy; 2025 Education Website. All rights reserved.</p>
</div>
</footer>
)
}

export default Footer