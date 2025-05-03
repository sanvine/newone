import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";


const LearnMore = () => {
return (
    <div class='container mt-5 learn'>
        <div class='row m-5'>
            <div class='col-12 col-sm-12 col-md-12 col-lg-6'>
                <div class='d-flex justify-content-center'>
                    <img src={'/images/learn.jpg'} alt="" class='learn-1'/>
                </div>
            </div>
            <div class='col-12 col-sm-12 col-md-12 col-lg-6 learn-2'>
                <h2 class='learn-h2'>Learn More About CodeTech Learn</h2>
                <p class='mt-4'>At CodeTech Learn, we are dedicated to providing quality education in Bengaluru, Karnataka. Our experienced instructors bring a wealth of knowledge and expertise to every course, ensuring students receive both theoretical and practical training</p>
                <p class='mt-4'>We offer a variety of courses in programming, software development, designing, and accounting, all in a collaborative and inspiring learning environment.</p>
                <div class='mb-2'>
                    <FaCircleCheck class='learn-icon me-3'/>Free Demo Classes
                </div>
                <div class='mb-2'>
                    <FaCircleCheck class='learn-icon me-3'/>Online And Offline Training
                </div>
                <div class='mb-2'>
                    <FaCircleCheck class='learn-icon me-3'/>Batches And One To One Classes
                </div>
            </div>
        </div>
    </div>
)
}

export default LearnMore