import React, { useState, Fragment } from "react";

const SingleViewPage = ({ project }) => {
    console.log(project)
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === project.carousel.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? project.carousel.length - 1 : current - 1);
  };

  const setSlide = (idx) => {
    setCurrent(idx);
  };

  return (
    <div className="single-view-page">
      <ul className="carousel">
        <button
          className="carousel-btn left"
          onClick={() => {
            prevSlide();
          }}
        >
          {"<"}
        </button>
        <button
          className="carousel-btn right"
          onClick={() => {
            nextSlide();
          }}
        >
          {">"}
        </button>
        <p className="count">
          {current + 1} of {project.carousel.length}
        </p>
        {project.carousel.map((pic, idx) => {
          return (
            <Fragment key={"carousel" + idx}>
              <div className={idx === current ? "slide active" : "slide"}>
                <img className="carousel-img" alt={pic.alt} src={pic.src} />
              </div>
              <button className="dot" onClick={() => setSlide(idx)}>
                <div
                  className={idx === current ? "white highlight" : "white"}
                ></div>
              </button>
            </Fragment>
          );
        })}
      </ul>
      <h1 className="single-title">{project.title}</h1>
      <div className="a-ctn">
        <a
          className="single-link"
          target="_blank"
          rel="noopener noreferrer"
          href={project.siteUrl}
        >
          See live site
        </a>
        <a
          className="single-link"
          target="_blank"
          rel="noopener noreferrer"
          href={project.codeUrl}
        >
          See source code
        </a>
      </div>
      {project.description.map((paragraph, idx) => {
        return <p key={"description" + idx}>{paragraph}</p>;
      })}
    </div>
  );
};

export default SingleViewPage;
