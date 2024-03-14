import React from "react";
import "./Aboutpage.css";

const AboutPage = () => {
  return (
    <section className="about-section">
      <div className="containeer">
        <div className="profile">
          <div className="image-containeer">
            <div className="profile-image">
              <img src="/my image.jpg" alt="profile image" /> 
            </div>
          </div>
          <div className="info">
            <div className="details">
              <h2>About Me</h2>
              <p>Hey there! I'm Vineeth , a multi- disciplinary Front-End developer based in India. I specialize in crafting sleek and responsive websites. with a focus on React.js. Let's turn your ideas into digital brilliance!</p>
              <ul className="info-list">
                <li><span className="label">Name:</span><span className="value">Lekhireddy Vineeth Reddy</span></li>
                <li><span className="label">Email:</span><span className="value">lekhireddyvineeth@gmail.com</span></li>
                <li><span className="label">Phone:</span><span className="value">9515471570</span></li>
                <li><span className="label">Country:</span> <span className="value">India</span></li>
                <li><span className="label">State:</span><span className="value">Andhra Pradesh</span></li>
              </ul>
            </div>
            <div className="resume-link">
              <p><a href="https://drive.google.com/file/d/1A2e62zeeXoNqE_sQu0mdPrChq4SrkChN/view?usp=sharing" target="_blank">View Resume</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
