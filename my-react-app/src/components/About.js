import React from "react";
import introBlurb from "../Images/IntroBlurb.png";
import service from "../Images/Service.png";


function About() {
    return(
        <div className="About-container">
            <div className="Intro">
            <div className="Introduction-container">
                    <h1>Introducing ULearn: </h1>
                    <p>
                        Your go-to mobile app for personalized tutoring videos with your preferred tutors.
                        Explore limitless learning possibilities at your fingertips.
                        Plus, unlock exclusive job opportunities for the unemployed, bridging the gap between education and employment.
                        Join ULearn today and embark on your journey to success.
                    </p>
                </div>
                <div className="Intro-blurb-container">
                    <img className="Intro-blurb-image" src={introBlurb} alt="Intro Blurb"/>
                </div>
            </div>
            <div className="Mission-statement-container">
                <h1>Our Mission:</h1>
                <p>
                    Is to empower students and job seekers alike, fostering their success and helping them realize their
                    full potential. We strive to facilitate academic excellence and professional growth
                    by providing personalized guidance and access to valuable opportunities.
                    Whether you're navigating university life, pursuing educational milestones, launching into your career,
                    or seeking new employment prospects, we are dedicated to being your steadfast support system.
                    Our commitment is to accompany each individual on their unique journey,
                    ensuring that every step is enriching and fulfilling.
                </p>
            </div>
            <div className="Service-container">
                <img className="Service-image" src={service} alt="Service"/>
            </div>
        </div>
    )
}
export default About;