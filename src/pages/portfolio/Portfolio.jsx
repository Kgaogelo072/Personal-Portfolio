import React, { useMemo, useState } from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./portfolio.css";

const filters = ["All", "Web Applications", "E-commerce", "Data & AI", "Other"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return portfolio;
    return portfolio.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="portfolio-page">
      <div className="portfolio-page__inner">
        <header className="portfolio-page__header">
          <p className="portfolio-page__eyebrow">PORTFOLIO</p>
          <span className="portfolio-page__eyebrow-line" aria-hidden="true" />
          <h1 className="portfolio-page__heading">
            Projects <span>I've Worked On</span>
          </h1>
          <p className="portfolio-page__intro">
            A selection of web, software and data projects I've built, from full-stack
            applications and business websites to data and machine learning solutions.
          </p>

          <div className="portfolio-page__filters" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`portfolio-page__filter ${
                  activeFilter === filter ? "is-active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        <div className="portfolio__container">
          {visibleProjects.map((item) => (
            <PortfolioItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
