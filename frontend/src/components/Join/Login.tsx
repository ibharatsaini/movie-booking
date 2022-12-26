import React, { useEffect, useState } from 'react'
import "./join.css"
import Loader from '../Loader/Loader'
import {Link, useNavigate} from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks'
import {  loginUser } from '../../reduxStore/actions/userAction'
import Background from "../../images/background.jpg"
import toast from 'react-hot-toast'


type User = {
  loading:Boolean,
  error:Boolean,
  user:Object,
  isAuthenticated:Boolean
}

function Login() {
    const userData = useAppSelector<User>(state=>state.user)
    const dispatch = useAppDispatch()
    
    const navigate = useNavigate()
    const [login ,setLogin] = useState({email:"",password:""})
    // const [loading,setLoading] = useState(false)
    function changeSign(e:any){

      setLogin(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    
    
    
    function submit(){
    //   console.log(sign)
       dispatch(loginUser(login))
    //    setLoading(true)
    }
    useEffect(()=>{

      if(userData.isAuthenticated){
        toast.success("User logged in!")
        if(window.location.href.indexOf("redirect") != -1){
          navigate(window.location.href.split("redirect=")[1])
        }else{
          console.log('here')
          navigate("/")

        }
      }
      if(userData.error){
          toast.error("Couldn't Log in!")
      }

    },[userData])

     
    return  (
      <>
      <div style={{backgroundImage:`url(${Background})`}} className='backBanner'>
             <div className='joinUs'>
                    <section>WELCOME</section>
                    <h2>TO BOLETO</h2>
                    <div className='inputFields'>
                      {/* <div className='colgr'> */}
                        <div className='grt'>
                            <h3>Email<span>*</span></h3>
                            <input type="text"  name="email" placeholder='email' value={login.email} onChange={(e)=>changeSign(e)} />
                        </div>
                        <div className='grt'>
                            <h3>Password<span>*</span></h3>
                            <input type="password" autoComplete='off' name="password" placeholder='password' value={login.password} onChange={(e)=>changeSign(e)} />
                        </div>
                      {/* </div> */}

                        
                    </div>
                    <div className='middle'>
                           <div onClick={submit} className='submitButton'>
                                    {userData.loading ? (<Loader />) :"Log in"}
                           </div>
                        </div>
                    <div className='already'>
                      Become a member?<Link to="/join-us">Sign Up</Link>
                    </div>
             </div>
      </div>
      </>
      
      
    )
}

export default Login