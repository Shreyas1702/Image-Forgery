import React, { useRef } from 'react'
import axios from 'axios'

const ConvertPage = () => {
  const inputRef = useRef(null)

  const [uploadedFile, setLink] = React.useState(null)
  const [response, setResponse] = React.useState('')
  const [submit, setSubmit] = React.useState('false')
  const [change, setChange] = React.useState('false')
  const [button, setbutton] = React.useState('false')

  React.useEffect(() => {
    if (submit === true) {
      console.log("Hello World'")
      console.log(uploadedFile)
      const formData = new FormData()
      formData.append('uploadedFile', uploadedFile)
      console.log(uploadedFile)
      axios({
        method: 'post',
        url: 'http://localhost:8000/api/upload',
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } },
      }).then((response) =>{
        console.log(response);
        setResponse(response)
      }).catch((e) =>{
        console.log(e);
      })  
    setChange(true)
    const fileData = JSON.stringify(response.data)
    const blob = new Blob([fileData], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const dowbutton = document.getElementById('dowbutton')
    dowbutton.download = 'text-info.txt'
    dowbutton.href = url
    console.log(url)
    console.log(button)
    setbutton(true)
    setSubmit(false)
    }

    if (change == true) {
      console.log(response)
      setChange(false)
    }
  }, [submit, uploadedFile, change, response])

  function submits(e) {
    if (uploadedFile != '') {
      setSubmit(true)
      console.log('submitted')
      e.preventDefault()
    } else {
      console.log('empty')
    }
  }

  function validateData(event) {
    const { files } = event.target
    console.log(files[0])
    setLink(files[0])
  }

  function clear() {
    setbutton(false)
    setResponse('')
    setLink('')
    inputRef.current.value = null
  }

  return (
    <div className="convert">
      <div className="text">
        <div className="content">
          <p>{response}</p>
        </div>
      </div>
      <div className="upload">
        <h1 className="converth1">Image Forgery Detction</h1>
        <p>
          Image Forgery. Automatic forgery detection, in a
          few clicks
        </p>
        <div>
          <form
            onSubmit={(e) => submits(e)}
            enctype="multipart/form-data"
            className="buttons"
          >
            <input
              style={{ display: button == true ? 'none' : 'block' }}
              className="button"
              type="file"
              ref={inputRef}
              name="uploadedFile"
              onChange={(e) => validateData(e)}
            />{' '}
            <br /> <br />
            <input
              style={{ display: button == true ? 'none' : 'block' }}
              className="button"
              type="submit"
              value="Upload File"
            />
            <span
              className="holder"
              type="text"
              name="name"
              placeholder="File Name.."
            />
            <br />
            <a
              style={{ display: button == true ? 'block' : 'none' }}
              className="button"
              id="dowbutton"
              type="submit"
            >
              Download File
            </a>
            <input
              style={{
                display: button == true ? 'block' : 'none',
                textAlign: 'center',
              }}
              className="button"
              onClick={() => clear()}
              value="Exit"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ConvertPage
