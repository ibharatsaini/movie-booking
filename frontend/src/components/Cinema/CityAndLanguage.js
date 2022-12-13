import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import "./cinema.css"
import {  updateFilters } from '../../reduxStore/actions/showAction'
import { updateCinema } from '../../reduxStore/actions/cinemaAction'
import City from "../../images/city.png"
function CityAndLanguage({data}) {
    // console.log(data)
    const navigate = useNavigate()
    const [filter,setFilter]= useState({city:false,language:false,data:false})
    const dispatch = useDispatch()
    const [chosen,setChosen] = useState(data.filters)
    const dates=[6,7,8,9,10,11]
    const cities=['new delhi','lucknow','bhopal']
    // const chosenLanguage
    function showModal(s){
        setFilter(prev=>({[!s]:false,[s]:!prev[s]}))
    }
    function change(name,value){
        // console.log('changed it')
        console.log(name,value)
        dispatch(updateFilters({[name]:value}))
        console.log(name,value)
        console.log(filter)
        setChosen(prev=>({...prev,[name]:value}))
        // console.log(name,value)
        console.log()
        dispatch(updateFilters({...data.filters,[name]:value}))
        if(name=='city'){
            dispatch(updateCinema(value))
        }
        // changeChosen(e.target.name,e.target.value)
    }
    // useEffect(()=>{
    //         navigate(`/cinema/${data.filters.name.toLowerCase()}?city=${data.filters.city}&date=${data.filters.date}&language=${data.filters.language}&movieId=${data.filters.movieId}`)
    // },[data.filters])
    useEffect(()=>{
        navigate(`/cinema/${data.filters.name.toLowerCase()}?city=${data.filters.city}&date=${data.filters.date}&language=${data.filters.language}&movieId=${data.filters.movieId}`)
    },[data.filters])

    return (
            <div className="ghsot">
                <div className='filDown'>
                    <div className='col' onClick={()=>{showModal('language')}}>
                        <img src={City}/>
                        <span style={{color:"#31d7a9",textTransform:"uppercase"}}>Language</span>
                        <div className='mov'>
                            {
                            data.movie.language.length==1 ?
                            <span>
                                {
                                data.movie.language[0]
                                }
                            </span>: filter.language ?
                           ( <div className='mo'>
                                   <span>{chosen.language}</span>
                                   <div className='co'>
                                    {data.movie.language.map((el,i)=>{
                                       if(el!=chosen.language){
                                        //  return (<Link to={`/shows/${data.movie.name}?city=${chosen.city}&language=${el}&movieId=${data.movie._id}`} >{el}</Link>)
                                        return <span onClick={()=>{change('language',el)}}>{el}</span>
                                        }
                                    })}
                                    </div>
                            </div>) :(<div className='mo'>{chosen.language}</div>)
                            }
                            
                        </div>
                        <div className='arro'>
                        <RiArrowDropDownLine />  
                        </div>   

                    </div>
               
            </div>
            <div className='filDown'>
                    <div className='col' onClick={()=>{showModal('city')}}>
                        <img src={City}/>
                        <span style={{color:"#31d7a9",textTransform:"uppercase"}}>City</span>
                        <div className='mov'>   
                            <span>{chosen.city}</span>
                            <div className='mo'>
                                <div className='co'>
                                    { filter.city && cities.map(el=>{
                                        // console.log(chosen.city,el)
                                        if(el!==chosen.city) return (<span onClick={()=>{change('city',el)}} >{el}</span>                       )
                                    })}
                                </div>
                            </div>    
                        </div>
                        <div className='arro'>
                        <RiArrowDropDownLine />  
                        </div>   
                    </div>
            </div>
            <div className='filDown'>
                    <div className='col' onClick={()=>{showModal('date')}}>
                        <img src={City}/>
                        <span style={{color:"#31d7a9",textTransform:"uppercase"}}>Date</span>
                        <div className='mov'>
                            
                            <span>{chosen.date}</span>
                         { filter.date &&  <div className='mo'>
                                   <div className='co'>

                                      {dates.map((el)=>{
                                        if(el!=Number(chosen.date.split("-")[0]) && el>= Number(data.movie.releasing.split("-")[0])){
                                            return (<span onClick={()=>{change('date',`${el}-Nov`)}} >{`${el}-Nov`}</span>)
                                    }
                                        // return <span></span>
                                      })}
                                    </div>
                            </div>
                            }
                        </div>
                        <div className='arro'>
                        <RiArrowDropDownLine />  
                        </div>   
                    </div>
            </div>
        </div>
  )
}

export default CityAndLanguage