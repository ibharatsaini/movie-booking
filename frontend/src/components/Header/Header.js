import "./header.css"
// import logo from "../../logo.png"
import React,{useState} from 'react'
import { Link, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../../reduxStore/actions/userAction"
import Logo from "../../images/logo.png"
import Avatar from "../../images/avatar.png"


function Header() {
  const dispatch = useDispatch()
  const location = useLocation()
  const userData = useSelector(state=>state.user)
  const [visible,setVisible] =  useState(false)
  if(location.pathname == ('/join-us') || location.pathname == '/login' ){
    return null
  }
  function checkProfile(){
    console.log('checl')
    setVisible(prev=>!prev)
    console.log(visible )

  }
  function logout(){
    console.log('logout')
    localStorage.clear()
      dispatch(logoutUser())
      console.log(userData)
      // return (<Navigate replace to="/" />)
  }
  // if(userData.isAuthenticated)
  return (
    <header>
        <div className="logo">
          <Link to="/">
            <img src={Logo} />
            </Link>
        </div>
        <div className="menu">
                <div className="dropDown">
                      <span>Movie</span>
                      <div className="down">
                           <Link to={`/movies/filter?language=hindi`}>Hindi</Link>
                           <Link to="/movies/filter?language=malyalam">Malyalam</Link>
                           <Link to="/movies/filter?language=english">English</Link>
                      </div>
                </div>
                
                <div className="dropDown">
                      <span>Contact Us</span>
                      {/* <div className="down">
                          <span> Hindi </span>
                          <span> Malyalam </span>
                          <span> English </span>
                      </div> */}
                </div>
                <div className="dropDown joinus">
                   {/* { userData.isAuthenticated ? <div onClick={checkProfile} className="profile"> <img src={process.env.PUBLIC_URL+"/avatar.png"} />{visible &&( <div id="abs"> <Link to={"/my-account"} >My Account</Link><span onClick={logout}>Log Out</span></div>)} </div> : <Link className="jbut" to="/join-us">Join Us</Link>} */}
                   { userData.isAuthenticated ? <div onClick={checkProfile} className="profile"> <img src={Avatar} />{visible &&( <div id="abs"> <Link to={"/my-account"} >My Account</Link><span onClick={logout}>Log Out</span></div>)} </div> : <Link className="jbut" to="/join-us">Join Us</Link>}
                </div>
        </div>
    </header>
  )
}

export default Header