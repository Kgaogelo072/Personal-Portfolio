import React from "react";
import Profile from "../../assets/home.png"
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
                Data-focused Software Developer with strong experience in machine learning, data engineering
                concepts, and full-stack software development. Skilled in C#/.NET, Angular, SQL Server, and
                Python for ML. Experienced in debugging, production support, root-cause analysis, and building data-
                centric applications. Currently advancing data engineering skills through the ALX Africa Data Engineering Programme.
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