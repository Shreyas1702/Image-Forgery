import React from 'react'

const Reason = () => {
  return (
    <div className="reason">
      <h1 className="Reasonh1">
        Why use Detector to check your <br />
        Image:
      </h1>
      <div className="col-1">
        <div className="card-1">
          <h2>Verify Image Fast</h2>
          <p>
            Our online detector only takes a couple of minutes to
            work, making it a lot faster than manual checking 
            that need to be downloaded and installed.
          </p>
        </div>
        <div className="card-2">
          <h2>View where the Image has been forged</h2>
          <p>
            Detector lets you to view where the original Image is forged and what section of Image is added on the original Image
          </p>
        </div>
      </div>
      <div className="col-2">
        <div className="card-1">
          <h2>Image Forgery Detection anywhere</h2>
          <p>
            Since Detector is browser based, it will run smoothly on any device,
            be it a Mac, a Windows laptop or even a Chromebook.{' '}
          </p>
        </div>
        <div className="card-2">
          <h2>Check your Image for free</h2>
          <p>
            Our automatic detection feature, 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Reason
