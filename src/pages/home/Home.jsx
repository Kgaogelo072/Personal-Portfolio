import React from "react";
import Profile from "../../assets/home.jpg"
import {Link} from "react-router-dom";
import { FaArrowRight} from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
        <img src= {Profile} alt="" className='home__img'/>
        <div className="home__content">
            <div className="home__data">
                <h1 className="home__title">
                    <span>I am Kgaogelo Tshabalala.</span> Full-stack developer
                </h1>
                <p className="home__description">
                Driven and versatile Junior Software Developer with a background in Mechanical Engineering and a proven ability to deliver full-stack solutions. 
                Currently contributing to an AI-powered trade credit risk platform at Trade Shield. Skilled in Angular, .NET, SQL, and responsive web development. 
                Passionate about solving real-world problems using scalable technologies. Strong communicator who thrives in Agile, cross-functional environments.
                </p>
                <Link to ="./about" className = "button">
                    More ABout Me{' '}
                    <span className="button__icon">
                        <FaArrowRight/>
                    </span>
                </Link>
            </div>
        </div>
        <div className="color__block">
        </div>
    </section>
  );
};

export default Home