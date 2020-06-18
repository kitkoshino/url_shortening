import React from 'react';
import Menu from './../../Components/Menu';
import './style.scss';
import Records from './../../images/icon-brand-recognition.svg';
import Detail from './../../images/icon-detailed-records.svg';


const LandingPage = () => {
  return (
    <div className="landingPage-container">
      <Menu />
      <section className="first-section">
        <div className="img-hero"></div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button> Get Started </button>
      </section>
      <section className="shortenIt">
        <form action="">
          <input type="text" placeholder="Shorten a link here..." />
          <button>Shorten It!</button>
        </form>
      </section>
      <section className="second-section">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="brand">
          <span className="icon">
            <img src={Records} alt=""/>
          </span>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="line"></div>
        <div className="detail">
          <span className="icon">
            <img src={Detail} alt=""/>
          </span>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
