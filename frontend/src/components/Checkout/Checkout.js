import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import{FaRegCreditCard} from "react-icons/fa"
import "./checkout.css"
import Loader from '../Loader/Loader'
import { useNavigate } from 'react-router-dom'
import Banner04 from '../../images/banner04.jpg'
import toast from 'react-hot-toast'
function Checkout() {
    const cart = useSelector(state=>state.cart)
    const userData = useSelector(state=>state.user)
    const navigate = useNavigate()
    const [address,setAddress] = useState({first:"",second:"",phone:""})
    const [load,setLoad] = useState({tixLoad:false,addLoad:false})
    console.log(address)
    
    function submitForm(){
        
    }
    function changeAddress(name,value){
        setAddress(prev=>({...prev,[name]:value}))
    }
    function bookTix(){
        fetch("/api/v1/booking/create",{
            method:"POST",
            body:JSON.stringify({booking:{show:cart.show._id,seatsBooked:cart.seats},totalAmount:totalPrice}),
            headers:{
                "Content-Type":"application/json"
            },

        }).then(data=>data.json()).then(data=>{
            if(data.success){
                console.log('done')
                setLoad(prev=>({...prev,tixLoad:false}))
                toast.success("Tickets Booked Successfully!!")

                
            }else{
                toast.error("Couldn't Book Tickets!")
            }
            
        }).catch(e=>{
            setLoad(prev=>({...prev,tixLoad:false}));
            toast.error("Couldn't Book Tickets!")
        }).finally(()=>navigate("/"))
        setLoad(prev=>({...prev,tixLoad:true}))

        // setTimeout(()=>{setLoad(prev=>({...prev,tixLoad:false}))},[3000])
    }
    const totalPrice= cart.price + Math.floor(cart.price*(18/100))
    // if(!userData.isAuthenticate){
    //     console.log(userData)
       
    //  }
    useEffect(()=>{
        if(cart.seats.length==0 || !userData.isAuthenticated){
            navigate("/")
        }
    },[cart])
    // console.log(cart.price
    return cart.price>0 && (
        <>
            {/* <div className="ti" style={{backgroundImage:`url(${process.env.PUBLIC_URL+"/banner04.jpg"})`}}> */}
            <div className="ti" style={{backgroundImage:`url(${Banner04})`}}>
                <div className='titlelang'>
                        <h1>{cart.show.movieName}</h1>
                        <h3>{cart.show.language}</h3>
                </div>
            </div>
            <div className='checkBoard'>
                <div className='details'>
                        <div className='share'>
                            <h2>Share Address</h2>
                            <div className='address'>
                                <input type="text" placeholder='First Line' value={address.first} onChange={(e)=>changeAddress("first",e.target.value)} />
                                <input type="text" placeholder='Second Line' value={address.second} onChange={(e)=>changeAddress("second",e.target.value)} />
                                <input type="text" placeholder='Mobile No.' value={address.phone} onChange={(e)=>changeAddress("phone",e.target.value)} />
                                <div onClick={submitForm} className='submit'>
                                    Submit
                                </div>
                            </div>
                        </div>
                        <div className='payment'>
                            <h2>Payment</h2>
                            <div className='card'>
                            <FaRegCreditCard color={"#babaef"} font-size={"30px"} />
                            <span>Debit Card</span>
                            </div>
                        </div>
                </div>
                <div className='billing'>
                    <h2>Booking Summary</h2>
                    <div className='showInfo'>
                        <div className='info'>
                            <h3>{cart.show.movieName}</h3>
                            <h4>{cart.show.language}</h4>
                        </div>
                    </div>
                    <div className='showInfo'>
                        <div className='info'>
                            <h3>{cart.show.cinema.name.split(",")[0]}</h3>
                            <h4>{cart.show.cinema.city}</h4>
                        </div>
                        <div className='info end'>
                            <h3>{cart.seats.length<9?"0"+cart.seats.length:cart.seats.length}</h3>
                            <h4>TICKETS</h4>
                        </div> 
                    </div>
                    <div className='showInfo'>
                        <div className='info'>
                            <h3>TICKET PRICE</h3>
                        </div>
                        <div className='info end'>
                            <h3>{cart.price}</h3>
                        </div>
                    </div>
                    <div className='showInfo'>
                        <div className='info'>
                            <h3>{cart.show.start +":00"}</h3>
                            <h4>{cart.show.date}</h4>
                        </div>
                        <div className='info end'>
                            <h3>{cart.show.screen}</h3>
                            <h4>SCREEN</h4>
                        </div> 
                    </div>
                   
                    <div className='showInfo'>
                        <div className='info'>
                            <h4>PRICE</h4>
                            <h4>GST</h4>
                        </div>
                        <div className='info end'>
                            <h4>&#x20b9; {cart.price}</h4>
                            <h4>&#x20b9; {Math.floor(cart.price*(18/100))}</h4>
                        </div>
                    </div>
                    <div className='showInfo'>
                         <h2>Amount Payable &nbsp; &#x20b9; {totalPrice}</h2>
                    </div>
                    <div onClick={bookTix} className='buyn'>
                        {load.tixLoad ? <Loader /> : "Book Tix"}
                    </div>
        
                </div>
            </div>

       </>
    )
}

export default Checkout