import React from "react";
import "./MainBanner.css";
import Banner from "../Banners/Banner";


const Homepage = () => {
    return (
        <section className="main-banner">
              <div className="name-container">
              <img src="/my image.jpg" alt="ProfileImage"/>
                <div className="greeting">
                  <span className="Intro">Hey! I am</span>
                  <h1 className="name">Vineeth Reddy</h1>
                  <p className="Short-About">An enthusiastic Front-End Developer looking for opportunities that keeps on challenging me.</p>
                  <Banner/>
                </div>
              </div>
            
        </section>
    );
};

export default Homepage;
