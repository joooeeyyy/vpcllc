import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "High-Performance Computing",
    github: "https://www.virtualprojectcontrolsllc.com/checkout-cart",
    demo: "https://www.youtube.com/watch?v=nIBu1EFYmBU",
  },
  {
    id: 2,
    image: IMG2,
    title: "AI and Machine Learning",
    github: "https://www.virtualprojectcontrolsllc.com/checkout-cart",
    demo: "https://www.youtube.com/watch?v=4RixMPF4xis",
  },
  {
    id: 3,
    image: IMG3,
    title: "Big Data Analytics",
    github: "https://www.virtualprojectcontrolsllc.com/checkout-cart",
    demo: "https://www.youtube.com/watch?v=bY6ZzQmtOzk",
  },
  {
    id: 4,
    image: IMG4,
    title: "Virtualization",
    github: "https://www.virtualprojectcontrolsllc.com/checkout-cart",
    demo: "https://www.youtube.com/watch?v=FZR0rG3HKIk",
  },
  {
    id: 5,
    image: IMG5,
    title: "Cloud Services",
    github: "https://www.virtualprojectcontrolsllc.com/checkout-cart",
    demo: "https://www.youtube.com/watch?v=1ERdeg8Sfv4",
  },
  {
    id: 6,
    image: IMG6,
    title: "Server Applications",
    github: "https://www.virtualprojectcontrolsllc.com/checkout-cart",
    demo: "https://www.youtube.com/watch?v=OQyXNZ0H8O4",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Company project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  CheckOut
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  About Services
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
