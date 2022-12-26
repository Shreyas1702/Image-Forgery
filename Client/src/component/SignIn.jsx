import axios from 'axios';
import React from 'react'
import {useNavigate} from 'react-router-dom'

const SignIn = () => {

    const navigate = useNavigate();

    const [data , setData] = React.useState({
        username : "",
        email : "",
        password : "",
        cpassword : ""
    });

    const [post , setPost] = React.useState(false)

    React.useEffect(()=>{
        if(post){
            console.log(data)
            axios.post("http://localhost:8000/signin", data)
                .then((response) => {
                    console.log(response);
                    Reset()
                    navigate('/')
                })
                .catch((e) => {
                    console.log(e);
                    Reset()
                });
            setPost(false)
        }
    },[post])

 function Reset(){
        setData({...data,username:"" , email : "" , password : "" , cpassword : ""})
    }

function change(e){
    const {name , value} = e.target
    console.log(name)

    setData((prevData) => ({
        ...prevData,
        [name] : value
    }))
}

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    function validatedata(e){
        
        e.preventDefault()
        if(data.uname != "" && data.email != "" && data.password != "" && data.cpassword != ""){
            if(isEmail(data.email) && data.password === data.cpassword){
                setPost(true)
            }
    }
    }
  return (
    <div className='signbody'>
        <div className="signin">
            <h3>Sign In</h3>
            <form className='signform' >
                <label>Username</label>
                <br />
                <input 
                type="text"
                name="username" 
                onChange={(e) => change(e)}
                value={data.username} 
                 />
                <br />
                <br />
                <label>Email</label>
                <br />
                <input 
                type="email" 
                name="email"
                onChange={(e) => change(e)}
                value={data.email} />
                <br />
                <br />
                <label>Password</label>
                <br />
                <input 
                type="password" 
                name="password"
                onChange={(e) => change(e)}
                value={data.password} />
                <br />
                <br />
                <label>Confirm Password</label>
                <br />
                <input 
                type='password' 
                name="cpassword"
                onChange={(e) => change(e)}
                value={data.cpassword} />
                <br />
                <br />
                <button className='sbutton' type="submit" onClick={(e) => validatedata(e)}>Submit</button>
            </form>
            <p>Already an User? <span><a href="http://localhost:3000/login">Login In</a></span></p>
        </div>
    </div>
  )
}

export default SignIn