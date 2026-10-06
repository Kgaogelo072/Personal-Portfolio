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
                Full-stack developer with 2.5 years of commercial experience building and supporting
                production web applications in fintech and payments, using C#/.NET, ASP.NET Core,
                Angular/TypeScript, SQL Server and REST APIs. Currently a Software Development
                Consultant at Trappist Systems on the Airvoucher payments and remittance platform.
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