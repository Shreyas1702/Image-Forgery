import React from 'react'

const footer = () => {
  return (
    <div className="footer">
      <ul className="footer__nav">
        <li className="footer__item">
          <a className="footer__link" href="#">
            About
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Pricing
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Terms of Use
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Privacy Policy
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Careers
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Blog
          </a>
        </li>
        <li className="footer__item">
          <a className="footer__link" href="#">
            Contact Us
          </a>
        </li>
      </ul>
      <img
        id="ft_logo"
        src={process.env.PUBLIC_URL + '/img/icon.png'}
        alt="Logo"
        className="footer__logo"
      />
      <p className="footer__copyright">
        &copy; Copyright by
        <a className="footer__link twitter-link" target="_blank" href="#">
          {' '}
          Auxtribe
        </a>
        .
      </p>
      <p className="footer_p">
        Made by : <span> Sahil Shreyas Aakarsh Andre Bilal Shoydon</span>
      </p>
    </div>
  )
}

export default footer
