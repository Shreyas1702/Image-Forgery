import React from 'react'
import axios from 'axios';
const ConvertPage = () => {

const [uploadedFile, setLink] = React.useState(null);

const [submit, setSubmit] = React.useState("false");

React.useEffect(() => {
  if (submit == true) {
    console.log("Hello World'");
    console.log(uploadedFile);
    const formData = new FormData();
    formData.append("uploadedFile", uploadedFile);
    console.log(formData);
    axios({
    method: 'post',
    url: 'http://localhost:8000/upload',
    data: formData,
    config: { headers: { 'Content-Type': 'multipart/form-data' } }
  })
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setSubmit(false);
  }
}, [submit, uploadedFile]);

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
          <div className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, modi quia esse voluptatem repudiandae inventore iure. Veritatis, maxime itaque. Consequuntur maiores ipsa sequi. Magni praesentium ad, magnam veniam ipsa velit explicabo illum est suscipit exercitationem enim, temporibus accusamus hic repellat cupiditate? Suscipit voluptatum doloremque itaque velit excepturi alias natus aut. Debitis porro fuga repellendus alias adipisci. Impedit dolor odio nesciunt quas rerum itaque error commodi blanditiis ipsum incidunt quibusdam temporibus cum provident praesentium, obcaecati ad omnis laboriosam porro ex eius iure est soluta. Debitis hic amet quia magni blanditiis, excepturi veniam ab fugit laudantium illum aut quasi molestiae rem facilis nesciunt modi ipsum! Cupiditate dolorum vel nesciunt animi necessitatibus ratione placeat, tempore debitis eaque maxime at incidunt quasi aliquid esse magni molestiae aperiam commodi voluptas repellat ex repellendus delectus totam. Veniam, modi consequuntur at in repudiandae repellat facere vel omnis quasi aspernatur, atque ipsam. Porro id velit officia labore at provident vero excepturi sequi cupiditate vitae nisi itaque quis deleniti suscipit, molestias consectetur ut earum? Aut, enim dolores. Iste assumenda voluptatum corporis dolorum tenetur hic velit voluptas dolores, asperiores mollitia possimus soluta ipsum suscipit amet voluptate harum dolorem est dolor corrupti esse repellat! Eaque assumenda veritatis sint nihil consectetur, odit officia et minima maxime cumque quidem accusamus! Nam, fuga facilis corporis ducimus illum autem vitae maxime, dignissimos similique placeat consequatur quisquam in, ex excepturi fugit. Placeat, obcaecati consequuntur. Repudiandae voluptate nulla est consectetur suscipit repellat maxime amet eos aperiam illum! Ipsum, voluptas hic distinctio cupiditate itaque vel fugit quibusdam voluptatibus odit rem aperiam asperiores natus impedit, architecto amet omnis ut qui beatae, porro delectus esse pariatur tempora dolor reprehenderit. Nesciunt officia laboriosam perspiciatis ad repellat quos minima magni delectus ex. Doloremque amet rem ea veritatis laboriosam. Voluptatum autem eveniet veritatis iste veniam facere velit omnis, aliquid earum, accusamus, laboriosam dolorem?</div>
        </div>
        <div className="upload">
          <h1 className='converth1'>Audio to Text Converter</h1>
          <p>Transcribe speech to text. Automatic audio transcription online, in a few clicks</p>
          <div className="buttons">
            <form onSubmit={(e)=>submits(e)} enctype="multipart/form-data">
              <input type="text" name="name" placeholder="File Name.." /><br />
              <input type="file" name="uploadedFile" onChange={(e) => validateData(e)} /> <br /> <br />
              <input type="submit" value="Upload File" />
            </form>
             {/* <input type="file" name="link" id='choosebtn' onChange={(e) => validateData(e)}></input>
             <label for="choosebtn" className='button'>Choose File</label>
            <br></br>
            <button class="button" role="button" name="submit" onClick={() => submits()}>Submit</button> */}
          </div>
        </div>
    </div>
  )
}

export default ConvertPage


