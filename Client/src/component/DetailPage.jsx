import React from 'react'
import Wave from 'react-wavify'
const DetailPage = () => {
  return (
    <div className='detail'>
         <h1 className='detailh1'>How to Use Converter</h1>
         <h3>Convert your audio to text in 3 Simple Steps</h3>
         <div className="cards">
            <div className="card1">
                <img src='https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg'></img>
                <Wave  style={{position : "absolute" , bottom : '0px' , opacity: '0.6'}} fill='#6fa6e7'
                        paused={false}
                        options={{
                        height: 0,
                        amplitude: 50,
                        speed: 0.3,
                        points: 4
                        
                        }}
                />

                  <Wave  style={{position : "absolute" , bottom : '0px' , opacity : '0.8'}} fill='#6fa6e7'
                        paused={false}
                        options={{
                        height: 0,
                        amplitude: 50,
                        speed: 0.1,
                        points: 4
                        
                        }}
                />
                <h3 style={{position : "relative"}}>Upload an Audio File</h3>
                <p style={{position : "relative"}}>Click on Choose file and then select the file to be trnscribed</p>
            </div>
            <div className="card2">
                <img src='https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg'></img>
                <Wave style={{position : "absolute" , bottom : '0px' , opacity: '0.6'}} fill='#f15749'
                        paused={false}
                        options={{
                        height: 0,
                        amplitude: 50,
                        speed: 0.3,
                        points: 4
                        
                        }}
                />
                <Wave style={{position : "absolute" , bottom : '0px' , opacity: '0.8'}} fill='#f15749'
                        paused={false}
                        options={{
                        height: 0,
                        amplitude: 50,
                        speed: 0.1,
                        points: 4
                        
                        }}
                />
                <h3 style={{position : "relative"}}>Press on Submit</h3>
                <p style={{position : "relative"}}>Click on the Submit Button to transcribe your audio to text</p>
            </div>
            <div className="card3">
                <img src='https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg'></img>
                <Wave  style={{position : "absolute" , bottom : '0px' , opacity : '0.6'}} fill='#8f6aca'
                        paused={false}
                        options={{
                        height: 0,
                        amplitude: 50,
                        speed: 0.3,
                        points: 4
                        
                        }}
                />

                    <Wave  style={{position : "absolute" , bottom : '0px' , opacity: '0.8'}} fill='#8f6aca'
                        paused={false}
                        options={{
                        height: 0,
                        amplitude: 50,
                        speed: 0.1,
                        points: 4
                        
                        }}
                />
                <h3 style={{position : "relative"}}>Text Ready</h3>
                <p style={{position : "relative"}}>Wait for few seconds and your text will be displayed</p>
            </div>
        </div> 
        
    </div>
  )
}

export default DetailPage
