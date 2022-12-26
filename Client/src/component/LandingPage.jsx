import React from 'react'
import Footer from './Footer'
const LandingPage = () => {
  return (
    <div class="header">
        <div class="header__title">
        {/* <!-- <h1 onclick="alert('HTML alert')"> --> */}
        <h1 className='landingh1'>
          Change
          {/* <!-- Green highlight effect --> */}
          <span class="highlight">     Audio</span>
          to<br />
          <span class="highlight">     Text</span>
        </h1>
        <h4>Automatic audio transcription online, in a few clicks</h4>
        <a href='http://localhost:3000/home' class="btn btn--show-modal"> Getting Started </a>
        <img
          src="img/hero.png"
          class="header__img"
          alt="Minimalist bank items"
        />
      </div>

    <section class="section" id="section--1">
      <div class="section__title">
        <h2 class="section__description">Articles</h2>
        <h3 class="section__header">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos!
        </h3>
      </div>

      <div class="features">
        <img
          src="img/digital-lazy.jpg"
          data-src="img/digital.jpg"
          alt="Computer"
          class="features__img lazy-img"
        />
        <div class="features__feature">
          <div class="features__icon">
            <svg>
              <use xlinkHref="img/icons.svg#icon-monitor"></use>
            </svg>
          </div>
          <h5 class="features__header">100% accuracy</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>

        <div class="features__feature">
          <div class="features__icon">
            <svg>
              <use xlinkHref="img/icons.svg#icon-trending-up"></use>
            </svg>
          </div>
          <h5 class="features__header">Fast conversion</h5>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!
          </p>
        </div>
        <img
          src="img/grow-lazy.jpg"
          data-src="img/grow.jpg"
          alt="Plant"
          class="features__img lazy-img"
        />

        <img
          src="img/card-lazy.jpg"
          data-src="img/card.jpg"
          alt="Credit card"
          class="features__img lazy-img"
        />
        <div class="features__feature">
          <div class="features__icon">
            <svg>
              <use xlinkHref="img/icons.svg#icon-credit-card"></use>
            </svg>
          </div>
          <h5 class="features__header">Free to use</h5>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
</div>
  )
}

export default LandingPage