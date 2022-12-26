import React from 'react'
import axios from 'axios';
const ConvertPage = () => {

const [link, setLink] = React.useState("");

const [submit, setSubmit] = React.useState("false");

React.useEffect(() => {
  if (submit == true) {
    console.log("WORLD");
    axios
      .post("http://localhost:8000/uploads", link)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setSubmit(false);
  }
}, [submit, link]);

function submits() {
  if (link != "") {
    setSubmit(true);
    console.log("submitted");
  } else {
    console.log("empty");
  }
}

function validateData(event) {
  const { value } = event.target;
  setLink((prevData) => ({
    ...prevData,
    link: [value],
  }));
}

  return (
    <div className='convert'>
        <div className="text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, sed? Tempore libero esse minus provident dolorum nemo assumenda ipsum, deserunt quidem cumque soluta sequi illum quo rem quas fugit porro tempora optio repudiandae vero quos itaque dolorem enim molestias! Nobis vero ad rem magni nihil veritatis laborum pariatur, neque quam. Quos perspiciatis ea facilis fugiat sint. Velit amet, deserunt fugiat nam quod nostrum error officiis reiciendis beatae dolor incidunt illo dolore officia dignissimos esse rem aliquam quis vero fuga. Ex soluta, in fuga rem iste earum. Voluptate, sapiente necessitatibus, illo iure, omnis laborum rerum architecto reprehenderit labore delectus dolorum placeat?</p>
        </div>
        <div className="upload">
          <h1 className='converth1'>Audio to Text Converter</h1>
          <p>Transcribe speech to text. Automatic audio transcription online, in a few clicks</p>
          <div className="buttons">
             <input type="file" name="link" class="button" onChange={(e) => validateData(e)}></input>
            <br></br>
            <button class="button" role="button" name="submit" onClick={() => submits()}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default ConvertPage


