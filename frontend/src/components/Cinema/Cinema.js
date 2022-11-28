import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import "./cinema.css"
import CityAndLanguage from './CityAndLanguage'
import {  updateCinema } from '../../reduxStore/actions/cinemaAction'
import Banner04 from "../../images/banner04.jpg"
import MovieSeat from "../../images/movie-seat.png"
import PageLoading from '../PageLoading/PageLoading'
function Shows() {
  const dispatch = useDispatch()
  const data = useSelector(state=>state.show)
  const cinema = useSelector(state=>state.cinema)
  const time=[9,15,18]
  console.log(data)
  useEffect(()=>{
    dispatch(updateCinema(data.filters.city))
  },[data])
  
  if(!data.filters.hasOwnProperty('name')){
    return (<div  style={{width:'100%',height:'calc(100vh - 100px)',display: 'flex',justifyContent:'centre',alignItems:'center'}}>
                    <Link style={{textDecoration:'none',color:'black',padding:'20px',margin: 'auto',background: 'aliceblue'}} to='/'>Go to Home Page</Link>
                    </div>)
  }


  return (cinema.cinemas.length==0 || data.movie?.name?.length<1 || data.filters?.name?.length<1) ? (<PageLoading />)
            :
      (
            <>
            <div className="ti" style={{backgroundImage:`url(${Banner04})`}}>
                       <div className='titlelang'>
                                <h1>{data.movie.name}</h1>
                                <h3>{data.filters.language}</h3>
                       </div>
            </div>
            <CityAndLanguage data={data} />

            <div className='diff-tic'>
                    {
                      cinema.cinemas.map(cine=>{
                        const names = cine.name.split(",")
                        return (
                                  <div className='cineRow'>
                                    <div className='cineName'>
                                            <div className='name'>{names[0]}</div>
                                            <div className='place'>{names[1]}</div>
                                    </div>
                                    <div className='cineTime'>
                                        { time.map((el)=>( <Link to={`/show/${data?.filters?.name?.toLowerCase()}?movieId=${data.filters.movieId}&language=${data.filters.language.toLowerCase()}&cinema=${cine._id}&time=${el}&date=${data.filters.date}`} style={{maskImage:`url(${MovieSeat})`,WebkitMaskImage:`url(${MovieSeat})`}} className='tixImg'>
                                          {el}:00
                                            </Link>))}
                                    {/* </div> */}

                                  </div>
                        </div>)
                      })
                    }
            </div>
            </>
         )
}

export default Shows