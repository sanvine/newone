import React from 'react'
import TopCourses from '../Subpages/TopCourses'
import LearnMore from '../Subpages/LearnMore'
import Technologies from '../Subpages/Technologies'
import Review from '../Subpages/Review'

const Home = () => {
return (
    <div>
        <div class='home px-2'>
            <div class='home-content'>
                <h2>Empowering your future with courses</h2>
                <p>Join CodeTech Learn for expert led-courses in programming, software, designing and accounting in a vibrant learning environment</p>
                {/* <button class='explore-btn'>Explore</button> */}
                <button class="explore-btn"><span>Explore</span></button>
            </div>
        </div>
        <TopCourses />
        <Technologies />
        <LearnMore />
        <Review />
    </div>
)
}

export default Home