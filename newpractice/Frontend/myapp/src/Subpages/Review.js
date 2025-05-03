import React from 'react'
import { IoStarSharp } from "react-icons/io5";

const Review = () => {
return (
    <div class='container mt-5'>
        <h2 class='review-h2'>What Our Students Say</h2>
        <div class='container'>
            <div class='row mt-5'>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 pe-4">
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <p>CodeTech Learn transformed my understanding of programming, and now I feel confident to tackle real-world projects.</p>
                    <img src={'./Images/review1.jpg'} alt="" class='review-img me-4'/>
                    <p class='review-name pt-4'>Rajesh Kumar</p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 pe-4">
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <p>The designing course was insightful and practical, helping me develop my skills to pursue a career in UI/UX Design.</p>
                    <img src={'./Images/review2.jpg'} alt="" class='review-img me-4 mb-5'/>
                    <p class='review-name pt-4'>Aslin Anita</p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 pe-4">
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <IoStarSharp class='review-icon mb-3'/>
                    <p>I had a fantastic learning experience at CodeTech Learn. The instructors were supportive and knowledgeable throughout.</p>
                    <img src={'./Images/review3.jpg'} alt="" class='review-img me-4'/>
                    <p class='review-name pt-4'>shweta</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Review
