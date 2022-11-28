import React, { useEffect, useState } from 'react'
import "./join.css"
import Loader from '../Loader/Loader'
import {Link, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  loginUser } from '../../reduxStore/actions/userAction'
import Background from "../../images/background.jpg"
function SignUp() {
    const userData = useSelector(state=>state.user)
    const dispatch = useDispatch()
    // const navigate = useNavigate()
    const [login ,setLogin] = useState({email:"",password:""})
    // const [loading,setLoading] = useState(false)
    function changeSign(e){

      setLogin(prev=>({...prev,[e.target.name]:e.target.value}))
    }
   
   
    function submit(){
    //   console.log(sign)
       dispatch(loginUser(login))
    //    setLoading(true)
    }
    console.log(userData)
    if(userData.isAuthenticated){
        console.log('is auth')
         if(window.location.href.indexOf("redirect") != -1){
            return <Navigate replace to={window.location.href.split("redirect=")[1]} />

         }
      return (<Navigate replace to="/" />)
    }
     
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
                            <input type="text" name="email" placeholder='email' value={login.email} onChange={(e)=>changeSign(e)} />
                        </div>
                        <div className='grt'>
                            <h3>Password<span>*</span></h3>
                            <input type="text" name="password" placeholder='password' value={login.password} onChange={(e)=>changeSign(e)} />
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

export default SignUp