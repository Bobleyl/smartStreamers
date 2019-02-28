import React, { Component } from 'react';
import image1 from '../screen1.jpg';
import image2 from '../screen2.jpg';
import image3 from '../screen3.jpg';

class About extends Component {
    render(){
        return(
                <div>
                    <h2 id="about-header">How to use SmartStreamers:</h2>
                    <img src={image1} id="img1" alt="img not found"></img>
                    <p id="textAbout">Just click "Get Started!" or on the "Start" button</p>
                    <img src={image2} id="img2" alt="img not found"></img>
                    <p id="textAbout">Select several shows and movies that you love so SmartStreamers 
                    can determine which streaming service you best align with.</p>
                    <img src={image3} id="img1" alt="img not found"></img>
                    <p id="textAbout">Input your monthly budget for streaming services.</p>
                    <p id="textAbout">Get your answer immidiately!</p>
                </div>
            )}
}

export default About;