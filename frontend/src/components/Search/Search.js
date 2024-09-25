import React,{useEffect} from 'react'
import "./search.css"
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {BsSearch} from "react-icons/bs"
import ticketTab from "../../images/ticket-tab01.png"
import ticketBg from "../../images/ticket-bg01.jpg"
import City from "../../images/city.png"


function Search() {
  const navigagte = useNavigate()
  const [release,setRelase] = useState('')
  const [keyword,setKeyword] = useState("")
  const [result,setResult] = useState([])
  
  function submitSearch(e){
        if(result.length ==0 ) return 

        navigagte(`/movie/${result[0]._id}`)
  }
  function handleChange(e){
    setRelase(e.target.value)
    const url = new URLSearchParams(window.location.search)
     
    e.target.value =='all' ? url.delete('releasing') : url.set('releasing',e.target.value)
    navigagte(`/movies/filter?`+url)
  }
  useEffect(()=>{
       console.log(result)
       keyword.length>0 && fetch(`/api/v1/movie/search?keyword=${keyword}`)
            .then(data=>data.json())
            .then(data=>setResult(data.data))
            .catch(e=>console.log(e))
  },[keyword])
  // console.log("Dd")
function changeKeyword(e){
    setKeyword(e.target.value)
    // dispatch(updateKeyword(e.target.value))
}
  return (
    <div className='search-div'>
    {/* <div className="ticket-bg" style={{backgroundImage:'url("../../images/ticket-bg01.jpg"'}}> */}
    <div className="ticket-bg" style={{backgroundImage:`url(${ticketBg}`}}>
    
            <div className='welcome'>
                  <div className='quote'>
                    <h3>WELCOME TO BOLETO</h3>
                    <h2>What Are You Looking For?</h2>
                  </div>
                  <div className='quote' style={{marginLeft:"auto"}}>
                       {/* <div><img src={process.env.PUBLIC_URL+"/ticket-tab01.png"}/><span>Movie</span></div> */}
                       <div><img src={ticketTab}/><span>Movie</span></div>
                  </div>
            </div>
            <div className='welcome'>
                   <div className='black'>
                          <div className='search'>
                                 <input type="text" value={keyword} onChange={(e)=>changeKeyword(e)} />
                                 <BsSearch onClick={submitSearch} />
                                 {result.length>0 && (<div className='keyResu'>{result.map(el=><Link to={`/movie/${el._id}`} className='absRes'>{el.name}</Link>)}</div>)}
                                 
                          </div>
                          <div className="searchFilter">
                               <div className='city'>
                                    <div className='cityImg'>
                                      {/* <img src={process.env.PUBLIC_URL+"/city.png"}/> */}
                                      <img src={City}/>
                                      <span>Releasing</span>
                                    </div>
                                    <select onChange={(e)=>{handleChange(e)}} value={release} id="release">  
                                            <option value={"all"}>All</option>
                                            <option value="6-Nov">6-Nov</option>  
                                            <option value="10-Nov">10-Nov</option>  
                                            {/* <option value="English">English</option>  
                                            <option value="Tamil">Tamil</option>   */}
                                      </select> 
                               </div>
                          </div>
                   </div>
            </div>
    </div>
</div>
  )
}

export default Search