import React, { useState } from "react";
import Close from "../assets/close.svg";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

const PortfolioItem = ({
  img,
  title,
  category,
  description,
  technologies = [],
  link,
  linkLabel = "View Project",
  details = [],
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal((current) => !current);

  const isGitHub = link?.includes("github.com");

  return (
    <>
      <article className="portfolio__card">
        <button
          type="button"
          className="portfolio__image-button"
          onClick={toggleModal}
          aria-label={`View details for ${title}`}
        >
          <div className="portfolio__image-container">
            <img src={img} alt={title} className="portfolio__img" />
          </div>
        </button>

        <div className="portfolio__content">
          <span className={`portfolio__category portfolio__category--${category
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`}>
            {category}
          </span>

          <h2 className="portfolio__title">{title}</h2>
          <p className="portfolio__description">{description}</p>

          <div className="portfolio__tech" aria-label="Technologies used">
            {technologies.map((technology) => (
              <span className="portfolio__tech-value" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <div className="portfolio__actions">
            <button
              type="button"
              className="portfolio__btn portfolio__btn--primary"
              onClick={toggleModal}
            >
              View Project <FiExternalLink />
            </button>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__code-link"
              >
                {isGitHub ? <FiGithub /> : <FiArrowUpRight />}
                {isGitHub ? "Code" : linkLabel}
              </a>
            )}
          </div>
        </div>
      </article>

      {modal && (
        <div className="portfolio__modal" onClick={toggleModal}>
          <div
            className="portfolio__modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal__close"
              onClick={toggleModal}
              aria-label="Close modal"
            >
              <img src={Close} alt="" />
            </button>

            <div className="modal__header">
              <span className="portfolio__category">{category}</span>
              <h2 className="modal__title">{title}</h2>
              <img src={img} alt={title} className="modal__img" />
            </div>

            <div className="modal__body">
              <p className="modal__summary">{description}</p>

              {details.length > 0 && (
                <div className="modal__details">
                  {details.map((detail, index) => (
                    <div className="modal__detail-item" key={index}>
                      <span className="modal__detail-title">{detail.title}</span>
                      <span className="modal__detail-content">{detail.desc}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="modal__tech">
                {technologies.map((technology) => (
                  <span className="portfolio__tech-value" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio__btn portfolio__btn--primary modal__project-link"
                >
                  {isGitHub ? "View Code" : linkLabel} <FiArrowUpRight />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioItem;
