import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3.5 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "175px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/*  hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Fitness is not about being better than someone else; it's about
              being better than you used to be
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={120} start={90} delay="4" preFix="+" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1000} start={900} delay="7" preFix="+" />
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={70} start={40} delay="4" preFix="+" />
            </span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>
        {/* images */}
        <img src={hero_image} alt="man with shoe" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          src={hero_image_back}
          alt="man with shoe back"
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: "50rem" }}
          whileInView={{ right: "30rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>300kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
