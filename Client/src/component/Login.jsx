import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import './../index.css'
const Login = () => {

  const {state , dispatch} = useContext(UserContext)

  const navigate  = useNavigate()
  const [data , setData] = React.useState({
    username: "",
    password : ""
  })

  const [post , setPost] = React.useState(false)


  React.useEffect(()=>{
   if(post){
            console.log(data)
            axios.post("http://localhost:8000/login", data)
                .then((response) => {
                    console.log(response.status);
                    if(response.status == 200){
                      dispatch({type:"USER",payload:true})
                      Reset()
                      navigate('/')
                    }
                })
                .catch((e) => {
                  window.alert('Invalid Cerdentials')
                    console.log(e);
                    Reset()
                });
            setPost(false)
        }
    },[post])

  function validate(e){
    e.preventDefault();
    if(data.username != "" && data.password!= ""){
        setPost(true) 
    }
  }

  function Reset(){
        setData({...data, username : "" , password : "" })
    }
  const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  function change(e){
    const {name , value} = e.target
    setData((prevData) =>({
      ...prevData,
      [name] : value
    }))
  }
  return (
    <div className='logbody'>
      <div className="login">
      <h3>LOGIN</h3>
      <form className='logform'>
        <label >
          Username
        </label>
        <br></br>
        <input 
        type='text' 
        placeholder='UserName' 
        name='username'
        onChange={(e) => change(e)}
        value={data.username}
        />
        <br></br>
        <br></br>
        <label>
          Password
        </label>
        <br>
        </br>
        <input 
        type='text'
        placeholder='Password' 
        name='password'
        onChange={(e) => change(e)}
        value={data.password}/>
        <br />
        <br />
        <button className='lbutton' type="submit" onClick={(e) => validate(e)}>Submit</button>
      </form>
      <p>Need an Account? <span><a href="http://localhost:3000/signin">Sign In</a></span></p>
      </div>
    </div>
  )
}

export default Login