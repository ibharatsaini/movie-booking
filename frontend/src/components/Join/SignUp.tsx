import React, {  useEffect, useState } from 'react'
import "./join.css"
import {Link, useNavigate} from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks'
import { createUser } from '../../reduxStore/actions/userAction'
import Background from "../../images/background.jpg"
import Loader from '../Loader/Loader'
import toast from 'react-hot-toast'

type UserInfo = {
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  confirmPassword:string
}
type User = {
  loading:Boolean,
  error:Boolean,
  user:Object,
  isAuthenticated:Boolean
}
function SignUp() {
    const userData = useAppSelector<User>(state=>state.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [sign ,setSign] = useState<UserInfo>({firstName:"",lastName:"",email:"",password:"",confirmPassword:""})
    function changeSign(e:any){

      setSign(prev=>({...prev,[e.target.name]:e.target.value}))
    }
   
   useEffect(()=>{
        console.log(userData)
        if(userData.isAuthenticated){
           const location = window.location.href
           location.indexOf("redirect") !== -1
                 ? navigate(location.split("redirect=")[1]) 
                 : navigate("/")
        }
        userData.error && toast.error("Couldn't Sign Up")
      },[userData])
    // function submit(){
    //   console.log(sign)
    //    dispatch(createUser(sign))

    // }
    // console.log(userData)
    // if(userData?.isAuthenticated){
    //   return (<Navigate replace to="/" />)
    // }
    return (
      <>
      <div style={{backgroundImage:`url(${Background})`}} className='backBanner'>
             <div className='joinUs'>
                    <section>WELCOME</section>
                    <h2>TO BOLETO</h2>
                    <div className='inputFields'>
                      <div className='colgr'>
                     <div className='grt'>
                        <h3>First Name<span>*</span></h3>
                        <input type="text" name="firstName" placeholder='Firstname' value={sign.firstName} onChange={(e)=>changeSign(e)} />
                      </div>
                      <div className='grt'>
                        <h3>Last Name<span>*</span></h3>
                        <input type="text" name="lastName" placeholder='Lastname' value={sign.lastName} onChange={(e)=>changeSign(e)} />
                      </div>
                      </div>
                      <div className='grt'>
                        <h3>EMAIL<span>*</span></h3>
                        <input type="text" name="email" placeholder='Enter Your Email' value={sign.email} onChange={(e)=>changeSign(e)} />
                      </div>
                      <div className='grt'>
                        <h3>Password<span>*</span></h3>
                        <input type="password"  name="password" placeholder='Enter Password' value={sign.password} onChange={(e)=>changeSign(e)} />
                      </div>
                      <div className='grt'>
                        <h3>Confirm Password<span>*</span></h3>
                        <input type="password" name="confirmPassword" placeholder='Confirm Password' value={sign.confirmPassword} onChange={(e)=>changeSign(e)} />
                      </div>
                        
                    </div>
                    <div className='middle'>
                           <div onClick={()=>{dispatch(createUser(sign) as any)}} className='submitButton'>
                               {userData.loading ? <Loader /> : "Sign Up"}
                                     
                           </div>
                        </div>
                    <div className='already'>
                      Already a user?<Link to="/login">Login</Link>
                    </div>
             </div>
      </div>
      </>
      
      
    )
}

export default SignUp