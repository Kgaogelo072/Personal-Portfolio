import React, { useState } from "react";
import Close from "../assets/close.svg";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  // Extract key information for card preview
  const getPreviewInfo = () => {
    const description = details.find(item => 
      item.title.toLowerCase().includes('description') || 
      item.title.toLowerCase().includes('project')
    );
    const tech = details.find(item => 
      item.title.toLowerCase().includes('language') || 
      item.title.toLowerCase().includes('tech')
    );
    const link = details.find(item => 
      item.title.toLowerCase().includes('github') || 
      item.title.toLowerCase().includes('website') || 
      item.title.toLowerCase().includes('link')
    );
    
    return { description, tech, link };
  };

  const { description, tech, link } = getPreviewInfo();

  return (
    <>
      <div className="portfolio__card">
        <div className="portfolio__image-container">
          <img src={img} alt={title} className="portfolio__img" />
          <div className="portfolio__overlay">
            <button className="portfolio__view-btn" onClick={toggleModal}>
              View Details
            </button>
          </div>
        </div>
        
        <div className="portfolio__content">
          <h3 className="portfolio__title">{title}</h3>
          {description && (
            <p className="portfolio__description">
              {description.desc || description.title}
            </p>
          )}
          {tech && (
            <div className="portfolio__tech">
              <span className="portfolio__tech-label">Tech:</span>
              <span className="portfolio__tech-value">{tech.desc}</span>
            </div>
          )}
          
          <div className="portfolio__actions">
            <button className="portfolio__btn portfolio__btn--primary" onClick={toggleModal}>
              Learn More
            </button>
            {link && (
              <a 
                href={link.desc.startsWith('http') ? link.desc : `https://${link.desc}`}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__btn portfolio__btn--secondary"
                onClick={(e) => e.stopPropagation()}
              >
                {link.title.toLowerCase().includes('github') ? (
                  <><FiGithub /> Code</>
                ) : (
                  <><FiExternalLink /> Visit</>
                )}
              </a>
            )}
          </div>
        </div>
      </div>

      {modal && (
        <div className="portfolio__modal" onClick={toggleModal}>
          <div
            className="portfolio__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal__close"
              onClick={toggleModal}
              aria-label="Close modal"
            >
              <img src={Close} alt="Close" />
            </button>
            
            <div className="modal__header">
              <h2 className="modal__title">{title}</h2>
              <img src={img} alt={title} className="modal__img" />
            </div>
            
            <div className="modal__body">
              <div className="modal__details">
                {details.map(({ icon, title, desc }, index) => {
                  const isLink = title.toLowerCase().includes('github') || 
                             title.toLowerCase().includes('website') || 
                             title.toLowerCase().includes('link');
                  
                  return (
                    <div className="modal__detail-item" key={index}>
                      <div className="modal__detail-header">
                        <span className="modal__detail-icon">{icon}</span>
                        <span className="modal__detail-title">{title}</span>
                      </div>
                      {desc && (
                        <div className="modal__detail-content">
                          {isLink ? (
                            <a 
                              href={desc.startsWith('http') ? desc : `https://${desc}`}
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
