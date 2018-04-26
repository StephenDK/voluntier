// import class component from react
import React from 'react';

// import styles
import './landing.css';
// import images
import jack from '../../images/jack.png';
import stephen from '../../images/stephen.jpeg';
import ruhi from '../../images/ruhi.png';
import akshay from '../../images/akshay.jpeg';

const Landing = () => (
    <div>
        <h3>Our Team</h3>
            <p>Jack, Stephen, Ruhi, Akshay</p>
            <div className="row">
                <img className="profile" src={jack} alt="jack" />
                <img className="profile" src={stephen} alt="stephen" />
                <img className="profile" src={ruhi} alt="ruhi" />
                <img className="profile" src={akshay} alt="akshay" />
            </div>
        <h3>About MentorMeld</h3>
            <p>MentorMeld is a social media site with the purpose of connecting mentors to mentees.</p>
            <p>Do you know somebody that has changed majors or careers after spending years in a chosen field? What if seeing what a day or a few days in the life of somebody that actually works in a chosen field looks like? We offer the opportunity to “test drive” a career field before committing.</p>
            <p></p>
    </div>
);

// export 
export default Landing;