import React from 'react'

const TopCourses = () => {
    const handleClick=()=>{
        window.location.href="/courses";
    }
return (
    <div class='mt-5'>
        <h1 class='top-h1'>Explore Our Courses</h1>
        <p class='top-p'>Explore a wide range of courses designed to enhance your skills and boost your career potential in various domains.</p>
        <div class='container mt-4'>
            <div class='row'>
                <div class='col-12 col-sm-12 col-md-12 col-lg-4 '>
                    <div class='d-flex justify-content-center'>
                        <img src={'/images/developimg.jpg'} alt="" class='top-img'/>
                            <button class='spanimg' onClick={handleClick}>View All Courses</button>
                    </div>
                    <h6 class='top-h6 mt-3'>Software courses</h6>
                    <p class='top-para'>Learn the fundamentals of coding</p>
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-4 '>
                    <div class='d-flex justify-content-center'>
                        <img src={'/images/designimg.jpg'} alt="" class='top-img'/>
                        <button class='spanimg' onClick={handleClick}>View All Courses</button>
                    </div>
                    <h6 class='top-h6 mt-3'>Designing courses</h6>
                    <p class='top-para'>Bringing ideas to life visually</p>
                </div>
                <div class='col-12 col-sm-12 col-md-12 col-lg-4 '>
                    <div class='d-flex justify-content-center'>
                        <img src={'/images/accountimg.jpg'} alt="" class='top-img'/>
                        <button class='spanimg' onClick={handleClick}>View All Courses</button>
                    </div>
                    <h6 class='top-h6 mt-3'>Accounting courses</h6>
                    <p class='top-para'>Practice accounting with courses</p>
                </div>
            </div>
            
        </div>
    </div>
)
}

export default TopCourses