import React, { useMemo, useState } from "react";
import Close from "../assets/close.svg";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const preview = useMemo(() => {
    const description = details.find((item) =>
      item.title.toLowerCase().includes("description") ||
      item.title.toLowerCase().includes("project")
    );

    const tech = details.find((item) =>
      item.title.toLowerCase().includes("language") ||
      item.title.toLowerCase().includes("tech")
    );

    const link = details.find((item) =>
      item.title.toLowerCase().includes("github") ||
      item.title.toLowerCase().includes("website") ||
      item.title.toLowerCase().includes("link")
    );

    const titleText = title.toLowerCase();
    let category = "Web Application";

    if (titleText.includes("machine") || titleText.includes("learning")) {
      category = "Data & AI";
    } else if (titleText.includes("consulting")) {
      category = "Business Website";
    } else if (titleText.includes("portfolio")) {
      category = "Frontend";
    }

    const technologies = tech?.desc
      ? tech.desc
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
          .slice(0, 4)
      : [];

    return { description, tech, link, category, technologies };
  }, [details, title]);

  const toggleModal = () => setModal((current) => !current);

  const getLinkHref = (value) => {
    if (!value) return "#";
    return value.startsWith("http") ? value : `https://${value}`;
  };

  return (
    <>
      <article className="portfolio__card">
        <button
          className="portfolio__image-button"
          onClick={toggleModal}
          aria-label={`View details for ${title}`}
        >
          <div className="portfolio__image-container">
            <img src={img} alt={title} className="portfolio__img" />
            <div className="portfolio__image-shade" />
            <span className="portfolio__image-cta">
              View case study <FiArrowUpRight />
            </span>
          </div>
        </button>

        <div className="portfolio__content">
          <div className="portfolio__meta-row">
            <span className="portfolio__category">{preview.category}</span>
          </div>

          <h3 className="portfolio__title">{title}</h3>

          {preview.description && (
            <p className="portfolio__description">
              {preview.description.desc || preview.description.title}
            </p>
          )}

          {preview.technologies.length > 0 && (
            <div className="portfolio__tech" aria-label="Technologies used">
              {preview.technologies.map((technology) => (
                <span className="portfolio__tech-value" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          )}

          <div className="portfolio__actions">
            <button
              className="portfolio__btn portfolio__btn--primary"
              onClick={toggleModal}
            >
              View Project <FiArrowUpRight />
            </button>

            {preview.link && (
              <a
                href={getLinkHref(preview.link.desc)}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__btn portfolio__btn--secondary"
              >
                {preview.link.title.toLowerCase().includes("github") ? (
                  <>
                    <FiGithub /> Code
                  </>
                ) : (
                  <>
                    <FiExternalLink /> Visit
                  </>
                )}
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
              className="modal__close"
              onClick={toggleModal}
              aria-label="Close modal"
            >
              <img src={Close} alt="" />
            </button>

            <div className="modal__header">
              <span className="portfolio__category">{preview.category}</span>
              <h2 className="modal__title">{title}</h2>
              <img src={img} alt={title} className="modal__img" />
            </div>

            <div className="modal__body">
              <div className="modal__details">
                {details.map(({ icon, title: detailTitle, desc }, index) => {
                  const isLink =
                    detailTitle.toLowerCase().includes("github") ||
                    detailTitle.toLowerCase().includes("website") ||
                    detailTitle.toLowerCase().includes("link");

                  return (
                    <div className="modal__detail-item" key={index}>
                      <div className="modal__detail-header">
                        <span className="modal__detail-icon">{icon}</span>
                        <span className="modal__detail-title">{detailTitle}</span>
                      </div>

                      {desc && (
                        <div className="modal__detail-content">
                          {isLink ? (
                            <a
                              href={getLinkHref(desc)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="modal__link"
                            >
                              {desc}
                            </a>
                          ) : (
                            <span>{desc}</span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioItem;
