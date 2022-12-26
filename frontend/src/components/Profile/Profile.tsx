import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
// import { useSelector ,useDispatch} from 'react-redux'
import { useAppSelector ,useAppDispatch} from '../../reduxStore/hooks'
import { updateUser } from '../../reduxStore/actions/userAction'
import { backendUrl } from '../../reduxStore/contants'
import Loader from "../Loader/Loader"
import PageLoading from '../PageLoading/PageLoading'
import "./profile.css"

type UserData = {
    firstName:string,
    lastName:string,
    bookings:Object[],
    email:string,
}

function Profile() {
    const userData  = useAppSelector<UserData | any>(state=>state.user)
    const [loading,setLoading] = useState(false)
    const dispatch = useAppDispatch()
    const [update,setUpdate] = useState({oldPassword:"",newPassword:"",confirmPassword:""})
    useEffect(()=>{
           
           fetch(`${backendUrl}/api/v1/user/bookings`)
                .then(data=>data.json())
                .then(data=>{
                    dispatch(updateUser(data.data))
                    console.log(data.data)
                })
                
                // updateCart
                
    },[])
    
    function changePass(e:any){
        setUpdate(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    function submitPassword(){
        console.log('sibt')
        if((update.oldPassword.length == 0) || (update.confirmPassword.length == 0 ) || (update.newPassword.length == 0) ){
            return
        }
        console.log(update)

        setLoading(true)
        fetch(`${backendUrl}/api/v1/user/update/password`,{
            method:"POST",
            body:JSON.stringify({...update}),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(data=>data.json())
          .then(data=>{
            data.success ? 
                      toast.success("Password Updated!")
                      : toast.error("Password did not match")

          }).catch(e=>console.log(e))
          setLoading(false)
    }
    return  (!userData.user.bookings )? (<PageLoading />) : (
      
        <div id="profile">
            <div className='infoBook'>
                <h2>User Info</h2>

                <div className="infoUser">
                    <div className='nameRow'>
                        <div className='checkpoint'>
                            <label>Name</label>

                            <input type="text" disabled={true}   placeholder={`${userData.user.firstName} ${userData.user.lastName}`} />
                        </div>
                        <div className='checkpoint'>
                            <label>Email</label>
                            <input type="text" disabled={true}  placeholder={userData.user.email} />
                        </div>
                    </div>
                    <div className='nameRow'>
                        <div className='checkpoint'>
                            <label>Old Password</label>
                            <input type="text" name="oldPassword"  required placeholder={""} value={update.oldPassword} onChange={(e)=>changePass(e)} />
                        </div>
                        <div className='checkpoint'>
                            <label>New Password</label>
                            <input name='newPassword' required type="text"   placeholder={""} value={update.newPassword} onChange={(e)=>changePass(e)}  />
                        </div>
                    </div>
                    <div className='nameRow'>
                        <div className='checkpoint'>
                            <label>Confirm Password</label>
                            <input type="text" required name="confirmPassword"   placeholder={""} value={update.confirmPassword} onChange={(e)=>changePass(e)}  />
                        </div>
                        <div onClick={submitPassword} className='checkpoint changePass'>
                               Update Password
                        </div>
                    </div>

                </div>
                <h2>Bookings</h2>
                <div id="booking">
                    
                  {userData.user.bookings.map(({booking ,totalAmount}:any)=> {
                    //  console.log(userData.user)
                  return (<div className='userBooks'>
                                <div className='colBoo'>
                                    <div className='movBoo'>
                                        <h3>{booking.show.movieName}</h3>
                                        <h4>{booking.show.language}</h4>
                                    </div>
                                    <div className='movBoo end'>
                                        <h3>{booking.seatsBooked.length}</h3>
                                        <h4>TICKETS</h4>
                                    </div>
                                </div>
                                <div className='colBoo'>
                                    <div className='movBoo'>
                                        <h3>{booking.show.cinema.name.split(",")[0]}</h3>
                                        <h4>{booking.show.cinema.city}</h4>
                                    </div>
                                    <div className='movBoo end'>
                                        <h3>{booking.show.screen}</h3>
                                        <h4>SCREEN</h4>
                                    </div>
                                </div>
                                <div className='colBoo'>
                                    <div className='movBoo'>
                                        <h3>{booking.seatsBooked.map((el:any,i:number)=>i==0? (el) : (`, ${el}`))}</h3>
                                        <h4>SEATS</h4>
                                    </div>
                                </div>
                                <div className='colBoo'>
                                    <div className='movBoo'>
                                        <h3>TOTAL </h3>
                                    </div>
                                    <div className='movBoo end'>
                                        <h3>{totalAmount} </h3>
                                    </div>
                                </div>

                    </div>)})}
                </div>
            </div>
            <div className='pic'>

            </div>
        </div>
    )
}

export default Profile