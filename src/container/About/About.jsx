import React from "react";
import "./About.scss";
import port from "../../assets/port.webp";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <h2 className="sub-text">
          <span>Why work with me</span>
        </h2>

        <div className="about__col">
          <div className="about__col2">
            <div className="image__col">
              <img src={port} alt="About" className="image" />
              {/* <div className="image__border" /> */}
            </div>
          </div>
          <div className="about__text-wrapper">
            {/* <p className="about__text">
              Hi, I'm Dahunsi Timilehin, a frontend developer dedicated to creating
              stunning web and mobile apps. With 18 months' experience and product management
              expertise, I design user-focused digital solutions that drive growth. 
              Skilled in React, JavaScript, HTML, CSS, React Native, and Next.js,
               I stay current with industry trends. My problem-solving and communication
                abilities ensure timely delivery and client satisfaction. Let's connect and
                 bring your project to life with a touch of innovation
            </p> */}
            <p className="about__text">
              I create beautiful, user-centric web and mobile apps that drive
              results. With over 3 years of experience and a passion for
              innovation, I help businesses achieve their goals through
              exceptional user experiences and cutting-edge technology.
              <br></br>
              For example, at Homify, I played a key role in developing a
              user-friendly platform that increased landlord leads by 20% and
              streamlined the tenant search process. 
              <br></br>
              My expertise in industry-leading technologies like React, React Native, and
              Next.js ensures exceptional performance and a seamless user
              experience. I also possess strong problem-solving skills and clear
              communication, allowing me to navigate challenges and deliver
              projects on time and within budget. 
              <br></br>
              Struggling to find a developer who understands both user experience and technical excellence?
              You've come to the right place. Let's schedule a call
              to discuss your project and see how I can turn your vision into
              reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
