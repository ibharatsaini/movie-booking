import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import './moviedetail.css'
import {AiFillCalendar,AiOutlineClockCircle} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { updateFilters, updateMovie } from '../../reduxStore/actions/showAction'
import { updateCinema } from '../../reduxStore/actions/cinemaAction'
import Tomato from "../../images/tomato.png"
import Cake from "../../images/cake.png"
import Amazon from "../../images/amazon.png"
import Paypal from "../../images/paypal.png"
import PageLoading from '../PageLoading/PageLoading'
import { backendUrl } from '../../reduxStore/contants'

function MovieDetail() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector(state=>state.user)
  const [data,setData] =  useState({})
  useEffect(()=>{
        const id=window.location.href.split("movie/")[1]
        console.log(id)
        fetch(`${backendUrl}/api/v1/movie/${id}`)
            .then(data=>data.json())
            .then(data=>setData(prev=>({...prev,...data.data})))
  },[])
  function showModal(){
    // console.
    if(data.language.length==1){
        console.log(data)
        console.log(data.language.length)
       updateLanguage(data.language[0])
    }else{
    document.getElementById("mod").style.display = 'flex'
    }
  }
  function closeModal(){
    document.getElementById("mod").style.display = "none"
  }
  function updateLanguage(l){
    // console.log('UPDATE LANGUAGE')
    console.log('name')
    dispatch(updateFilters({name:data.name,movieId:data._id,city:'new delhi',language:l,date:data.releasing}))
    dispatch(updateMovie(data._id))
    dispatch(updateCinema('new delhi'))
    
    console.log(userData.isAuthenticated)
    const url = `/cinema/${data.name.toLowerCase()}?city=new delhi&language=${l}&movieId=${data._id}&date=${data.releasing}`
    if(!userData.isAuthenticated){
        return navigate(`/login?redirect=${url}`)
    }
    return navigate(url)
    // navigate(`/cinema/${data.name.toLowerCase()}?city=new delhi&language=${l}&movieId=${data._id}&date=${data.releasing}`)
  }
  return !data._id ?<><PageLoading /></>: (
      <>
           <div id='mod'>
                
                <div className='box'>
                    <span>Pick Language  <insert onClick={closeModal}>Close</insert></span>
                    <section className='sectBox'>
                        {/* {data.language.map(el=><Link className='rt' to={`/cinema/${data.name}?city=new delhi&language=${el}&movieId=${data._id}&date=${data.releasing}`}><span>{el}</span></Link>)} */}
                        {data.language.map(el=><span onClick={()=>updateLanguage(el)}>{el}</span>)}
                    </section>
                </div>
           </div>
           <div className='movieBanner' style={{backgroundImage:`url(${data.images[1]})`,opacity:"0.8"}}>
                {/* <img src={data.images[1]} /> */}
           </div>
           <div style={{display:"flex",width:"100%",height:"350px",position:"absolute",justifyContent:"center",marginTop:"-180px"}}>
                <div className='movieDet'>
                        <div className='movieImg'>
                            <img src={data.images[0]} />
                        </div>
                        <div className='de'>
                                <div className='imp'>
                                    <h2>{data.name}</h2>
                                    <section>{data.language.map((el,i)=>{
                                        if(i!=0) return (<Link to={`/movies/filter?language=${el}`}>  | {el}</Link>)
                                        return (<Link to={`/movies/filter?language=${el}`}>{el}</Link>)
                                    })}</section>
                                    <section className='gen'>{data.genre.map((el,i)=> (<Link to={`/movies/filter?genre=${el}`}>{el}</Link>))}</section>
                                    <div className='rel'>
                                        <section><AiFillCalendar /> <span>{data.releasing}</span> </section>
                                        <section><AiOutlineClockCircle fontSize={"18px"} /> <span>3hrs 00min</span></section>
                                    </div>

                                </div>
                                <div className='dir'>
                                    <div className='tomato'>
                                        <div className='to'>
                                                <div className='meter'>
                                                    {/* <img src={process.env.PUBLIC_URL+"/tomato.png"} /> */}
                                                    <img src={Tomato} />
                                                    &nbsp; {data.likes}
                                                </div>
                                                <span>Tomato meter</span>
                                        </div>
                                        <div className='to' style={{marginLeft:"20px"}}>
                                                <div className='meter'>
                                                    {/* <img src={process.env.PUBLIC_URL+"/cake.png"} /> */}
                                                    <img src={Cake} />
                                                    &nbsp; {data.likes}
                                                </div>
                                                <span>Audience Score</span>
                                        </div>       
                                    </div>
                                    {/* data.language.length */}
                                     <div className='tick' onClick={showModal}>Book Tickets </div>
                                    {/* // : <Link to={`/cinema/${data.name}?city=new delhi&language=${data.language[0]}&movieId=${data._id}&date=${data.releasing}`} className='tick'>Book Tickets</Link>} */}
                                </div>
                        </div>
                </div>
           </div>
           <div style={{backgroundColor:"#032055",width:"100%",height:"140px",position:"relative"}}></div>
           <div className='syn'>
                <div className='offer'>
                    <div className='am'>
                        {/* <img src={process.env.PUBLIC_URL+"/amazon.png"} /> */}
                        <img src={Amazon} />
                        <h4>Amazon Pay Cashback Offer</h4>
                        <p> Win Cashback Upto Rs 300*</p>
                    </div>
                    <div className='am'>
                        {/* <img src={process.env.PUBLIC_URL+"/paypal.png"} /> */}
                        <img src={Paypal} />
                        <h4>PayPal Offer</h4>
                        <p> Transact first time with Paypal and get 100% cashback up to Rs. 500</p>
                    </div>
                    

                </div>
                <div className='pres'>
                    <div className='intro'>
                        <h2>Synopsis</h2>
                        <p>{data.description}</p>
                    </div>
                    <div className='cast'>
                        <h2>Cast</h2>
                        <section>{data.cast.map(el=>(<span>{el}  </span>))}</section>
                    </div>
                </div>
           </div>
      </>
  )
}

export default MovieDetail