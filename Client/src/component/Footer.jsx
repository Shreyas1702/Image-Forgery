import React from 'react'

const footer = () => {
  return (
    <div className='footer'>
      <ul class="footer__nav">
        <li class="footer__item">
          <a class="footer__link" href="#">About</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Pricing</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Terms of Use</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Privacy Policy</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Careers</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Blog</a>
        </li>
        <li class="footer__item">
          <a class="footer__link" href="#">Contact Us</a>
        </li>
      </ul>
      <img src="img/icon.png" alt="Logo" class="footer__logo" />
      <p class="footer__copyright">
        &copy; Copyright by 
        <a class="footer__link twitter-link" target="_blank" href="#"> Auxtribe</a>.
      </p>
      <p>Made by : <span> Sahil Shreyas Aakarsh Andre Bilal Shoydon</span></p>
    </div>
  )
}

export default footer