import React from 'react'

const About = () => {
return (
    <div>
        <div class='about'>
            <h3 class='about-h3'>About Us</h3>
        </div>
        <div class="container">
            <div class='row mt-5'>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 my-5">
                    <h4 class='about-h4'>Discover Our Passion for Technology and Education at CodeTech Learn</h4>
                    <p class='about-para mt-3'>At CodeTech Learn, we are dedicated to providing quality education in Bengaluru, Karnataka. Our experienced instructors bring a wealth of knowledge and expertise to every course, ensuring students receive both theoretical and practical training.<br></br><br></br>

                    We offer a variety of courses in programming, software development, designing, and accounting, all in a collaborative and inspiring learning environment.</p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div class='d-flex justify-content-center mt-4'>
                        <img src={'/images/aboutimg.jpg'} alt="" class='about-img my-5'/>
                    </div>
                </div>
            </div>
        </div>
        <div class='mt-5 px-5 about-whychoose'>
            <h3 class='about-whychoose-h3'>Why Choose Us</h3>
            <p class='about-whychoose-para'>Learn with us and experience the unique advantages that set CodeTech Learn apart in the educational landscape.</p>
            <div class="row mt-5">
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 mt-5 about-choose">
                    <h4 class='whychoose-h4 '>Expert Instructors</h4>
                    <p class='whychoose-para'>Our courses are led by certified instructors who have extensive industry experience and teaching skills.</p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 mt-5">
                    <h4 class='whychoose-h4'>Hands-On Learning</h4>
                    <p class='whychoose-para'>We emphasize practical training alongside theory, equipping students with real-world skills and experience.</p>
                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-4 mt-5">
                    <h4 class='whychoose-h4'>Supportive Environment</h4>
                    <p class='whychoose-para'>Our institute fosters a positive and engaging atmosphere, encouraging collaboration and personal growth among students.</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default About