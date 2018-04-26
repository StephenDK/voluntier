// import class component from react
import React from 'react';

// import styles
import './landing.css';
// import images
import voluntierImage from '../../images/volunteer.png';
import jack from '../../images/jack.png';
import stephen from '../../images/stephen.jpeg';
import ruhi from '../../images/ruhi.png';
import akshay from '../../images/akshay.jpeg';


const Landing = () => (
    <div>
        <div className="">
            <img className='banner' src={voluntierImage} alt='banner' />
        </div>
        <div className="jumbotron">
            <h3>About Voluntier</h3>
                <p>Voluntier is a social media site with the purpose of connecting volunteers with opportunities.</p>
                <p>Do you know somebody that has changed majors or careers after spending years in a chosen field? Does the question "what do I want to do in life" cause you stress? We offer the opportunity to “test drive” a career field before committing.</p>
        </div>   
        
        <h3>Our Team</h3>
            <p>Jack, Stephen, Ruhi, Akshay</p>
            <div className="row">
                <img className="profile" src={jack} alt="jack" />
                <img className="profile" src={stephen} alt="stephen" />
                <img className="profile" src={ruhi} alt="ruhi" />
                <img className="profile" src={akshay} alt="akshay" />
            </div>
        
    </div>
);

// export 
export default Landing;