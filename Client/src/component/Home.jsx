import React from 'react'
import { Link } from 'react-router-dom'
import './../index.css'
import ConvertPage from './ConvertPage'
import DetailPage from './DetailPage'
import Footer from './Footer'
const Home = () => {
  return (
      <div className="div">
    <ConvertPage/>
    <DetailPage/>
    <Footer />
    </div>
  )
}

export default Home