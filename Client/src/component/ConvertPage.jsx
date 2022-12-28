import React from 'react'
import axios from 'axios';
const ConvertPage = () => {

const [uploadedFile, setLink] = React.useState(null);
const [response , setResponse] = React.useState("");
const [submit, setSubmit] = React.useState("false");
const [change, setChange] = React.useState("false");

React.useEffect(() => {
  if (submit == true) {
    console.log("Hello World'");
    console.log(uploadedFile);
    const formData = new FormData();
    formData.append("uploadedFile", uploadedFile);
    console.log(formData);
    axios({
    method: 'post',
    url: 'http://localhost:8000/api/audio',
    data: formData,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  }).then((response) => {
        console.log(response.data);
        setResponse(response.data);
        setChange(true);
      })
      .catch((e) => {
        console.log(e);
      });
    setSubmit(false);
  }

  if(change == true){
    console.log(response)
    setChange(false)
  }
}, [submit, uploadedFile , change , response]);

function submits(e) {
  if (uploadedFile != "") {
    setSubmit(true);
    console.log("submitted");
    e.preventDefault();
  } else {
    console.log("empty");
  }
}

function validateData(event) {
  const { files } = event.target;
  console.log(files[0]);
  setLink(files[0]);
}

  return (
    <div className='convert'>
        <div className="text">
          <div className='content'>
            <p>{response}</p>
          </div>
        </div>
        <div className="upload">
          <h1 className='converth1'>Audio to Text Converter</h1>
          <p>Transcribe speech to text. Automatic audio transcription online, in a few clicks</p>
          <div className="buttons">
            <form onSubmit={(e)=>submits(e)} enctype="multipart/form-data">
              <input class="holder" type="text" name="name" placeholder="File Name.." /><br />
              <input type="file" name="uploadedFile" onChange={(e) => validateData(e)} /> <br /> <br />
              <input type="submit" value="Upload File" />
            </form>
          </div>
        </div>
    </div>
  )
}

export default ConvertPage


