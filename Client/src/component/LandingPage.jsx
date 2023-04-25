import React from 'react'
import Footer from './Footer'
const LandingPage = () => {
  return (
    <div className="header">
      <div className="header__title">
        {/* <!-- <h1 onclick="alert('HTML alert')"> --> */}
        <h1 className="landingh1">
          Image
          {/* <!-- Green highlight effect --> */}
          <span className="highlight"> Forgery</span>
          Detection
          <br />
        </h1>
        <h4>Automatic image forgery detection, in a few clicks</h4>
        <a href="http://localhost:3000/home" className="btn btn--show-modal">
          {' '}
          Getting Started{' '}
        </a>
        <img
          id="i100"
          src="https://miro.medium.com/v2/resize:fit:540/1*NuQbhB0OWjSGBTF4Wm_p4w.jpeg"
          className="header__img"
          alt="Minimalist bank items"
        />
      </div>

      <section className="section" id="section--1">
        <div className="section__title">
          <h2 className="section__description">Articles</h2>
          <h3 className="section__header">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos!
          </h3>
        </div>

        <div className="features">
          <img
            src="https://www.researchgate.net/publication/267863232/figure/fig1/AS:295453313781775@1447452967373/Example-of-Copy-Move-Forgery.png"
            data-src={process.env.PUBLIC_URL + '/img/digital.jpg'}
            alt="Computer"
            className="features__img lazy-img"
          />
          <div className="features__feature">
            <div className="features__icon">
              <svg>
                <use
                  xlinkHref={
                    process.env.PUBLIC_URL + '/img/icons.svg#icon-monitor'
                  }
                ></use>
              </svg>
            </div>
            <h5 className="features__header">Easy to use</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>

          <div className="features__feature">
            <div className="features__icon">
              <svg>
                <use
                  xlinkHref={
                    process.env.PUBLIC_URL + '/img/icons.svg#icon-trending-up'
                  }
                ></use>
              </svg>
            </div>
            <h5 className="features__header">Fast checking</h5>
            <p>
              Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
              inventore ab? Nulla incidunt eius numquam sequi iste pariatur
              quibusdam!
            </p>
          </div>
          <img
            src="https://pub.mdpi-res.com/information/information-10-00286/article_deploy/html/images/information-10-00286-g017.png?1569445796"
            data-src={process.env.PUBLIC_URL + '/img/grow.jpg'}
            alt="Plant"
            className="grow features__img lazy-img"
          />

          <img
            src={process.env.PUBLIC_URL + '/img/free.png'}
            data-src={process.env.PUBLIC_URL + '/img/card.png'}
            alt="Credit card"
            className="features__img lazy-img"
          />
          <div className="features__feature">
            <div className="features__icon">
              <svg>
                <use
                  xlinkHref={
                    process.env.PUBLIC_URL + '/img/icons.svg#icon-credit-card'
                  }
                ></use>
              </svg>
            </div>
            <h5 className="features__header">Free to use</h5>
            <p>
              Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
              eveniet consequatur odit quam quos possimus assumenda dicta fuga
              inventore ab.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage
