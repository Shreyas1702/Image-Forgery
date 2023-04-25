import React from 'react'
import Wave from 'react-wavify'
const DetailPage = () => {
  return (
    <div className="detail">
      <h1 className="detailh1">How to Use Detector</h1>
      <h3>Check your Image in 3 Simple Steps</h3>
      <div className="cards">
        <div className="card1">
          <img
            style={{ height: '60%' }}
            src={process.env.PUBLIC_URL + '/img/1.png'}
          ></img>
          <Wave
            style={{ position: 'absolute', bottom: '0px', opacity: '0.6' }}
            fill="#6fa6e7"
            paused={false}
            options={{
              height: 0,
              amplitude: 50,
              speed: 0.3,
              points: 4,
            }}
          />

          <Wave
            style={{ position: 'absolute', bottom: '0px', opacity: '0.8' }}
            fill="#6fa6e7"
            paused={false}
            options={{
              height: 0,
              amplitude: 50,
              speed: 0.1,
              points: 4,
            }}
          />
          <h3 style={{ position: 'relative' }}>Upload an Image</h3>
          <p style={{ position: 'relative' }}>
            Click on Choose file and then select the image to be checked
          </p>
        </div>
        <div className="card2">
          <img
            style={{ height: '60%' }}
            src={process.env.PUBLIC_URL + '/img/2.png'}
          ></img>
          <Wave
            style={{ position: 'absolute', bottom: '0px', opacity: '0.6' }}
            fill="#f15749"
            paused={false}
            options={{
              height: 0,
              amplitude: 50,
              speed: 0.3,
              points: 4,
            }}
          />
          <Wave
            style={{ position: 'absolute', bottom: '0px', opacity: '0.8' }}
            fill="#f15749"
            paused={false}
            options={{
              height: 0,
              amplitude: 50,
              speed: 0.1,
              points: 4,
            }}
          />
          <h3 style={{ position: 'relative' }}>Press on Submit</h3>
          <p style={{ position: 'relative' }}>
            Click on the Submit Button to verify your Iamge
          </p>
        </div>
        <div className="card3">
          <img
            style={{ height: '60%' }}
            src={process.env.PUBLIC_URL + '/img/3.png'}
          ></img>
          <Wave
            style={{ position: 'absolute', bottom: '0px', opacity: '0.6' }}
            fill="#8f6aca"
            paused={false}
            options={{
              height: 0,
              amplitude: 50,
              speed: 0.3,
              points: 4,
            }}
          />

          <Wave
            style={{ position: 'absolute', bottom: '0px', opacity: '0.8' }}
            fill="#8f6aca"
            paused={false}
            options={{
              height: 0,
              amplitude: 50,
              speed: 0.1,
              points: 4,
            }}
          />
          <h3 style={{ position: 'relative' }}>Image Verified</h3>
          <p style={{ position: 'relative' }}>
            Wait for few seconds and your image will be verified
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
