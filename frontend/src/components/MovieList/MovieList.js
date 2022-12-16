import React,{useEffect, useState} from 'react'
import Banner from '../Banner/Banner'
import Search from '../Search/Search'
import "./movielist.css"
import { useDispatch } from 'react-redux'
import Movie from '../Movie/Movie'
import { useLocation } from 'react-router-dom'
import { backendUrl } from '../../reduxStore/contants'
function MovieList() {
        const dispatch = useDispatch()
        const [form,setForm] = useState({
            language:{hindi:false,malyalam:false,english:false,tamil:false},
            genre:{comedy:false,adventure:false,romance:false,thriller:false,action:false,fantasy:false},
            releasing:""
           })
        const [movies,setMovie] = useState([])
        // function updateLang(e){ 
        //     dispatch(updatelanguage({language:e.target.value}))
        // }
        const location =  useLocation()
        useEffect(()=>{
            console.log(window.location.href)
            const url = new URLSearchParams(window.location.search)
            const filter = {}
            url.forEach((v,k)=>{filter[k]=v})
            console.log(filter)
            for(let k in filter){
                setForm(prev=>({
                    ...prev,
                    [k]:{...prev[k],[filter[k]]:true}
                }))
            }
            fetch(`${backendUrl}/api/v1/movie/filter?${url}`)
                .then(data=>data.json())
                .then(data=>setMovie(data.data)) 

        },[window.location.href])
        function updateForm(e,k){
            const url = new URLSearchParams(window.location.search)
            console.log(e.target.name,k)
            setForm(prev=>({
              ...prev,
              [k]:{[[k][!e.target.name]]:false,[e.target.name]:!prev[k][e.target.name]}
            }))
            // url.set(k,e.target.value)
            e.target.checked ? url.set(k,e.target.value) : url.delete(k)
            window.history.replaceState({}, '', `/movies/filter?${url}`);


          }
        
    

          






        return (
            <>
            <Banner/>
            <Search />
                      <div className='movieList'>
                <div className='filters'>
                    <div className='filtDiv'>
                        <h3>LANGUAGE</h3>
                        <div className='languages'>
                            <div className='selec'>
                                <input type="checkbox" className='check' name={"hindi"} value={"hindi"} checked={form.language.hindi} onChange={(e)=>{updateForm(e,'language')}} />
                                <span>Hindi</span>
                            </div>
                            <div className='selec'>
                                <input type="checkbox"  className='check' name={"malyalam"} value={"malyalam"} checked={form.language.malyalam}  onChange={(e)=>{updateForm(e,'language')}}/>
                                <span>Malyalam</span>
                            </div>
                            <div className='selec'>
                                <input type="checkbox" className='check' name={"english"} value={"english"} checked={form.language.english} onChange={(e)=>{updateForm(e,'language')}} />
                                <span>English</span>
                            </div> 
                            <div className='selec'>
                                <input type="checkbox" className='check' name={"tamil"} value={"tamil"} checked={form.language.tamil} onChange={(e)=>{updateForm(e,'language')}} />
                                <span>Tamil</span>
                            </div>    
                        </div>
                    </div>
                    <div className='filtDiv'>
                        <h3>GENRES</h3>
                        <div className='languages'>
                            <div className='selec'>
                                <input type="checkbox" className='check' name={"comedy"} value={"comedy"} checked={form.genre.comedy} onChange={(e)=>{updateForm(e,'genre')}} />
                                <span>Comedy</span>
                            </div>
                            <div className='selec'>
                                <input type="checkbox"  className='check' name={"action"} value={"action"} checked={form.genre.action}  onChange={(e)=>{updateForm(e,'genre')}}/>
                                <span>Action</span>
                            </div>
                            <div className='selec'>
                                <input type="checkbox" className='check' name={"fantasy"} value={"fantasy"} checked={form.genre.fantasy} onChange={(e)=>{updateForm(e,'genre')}} />
                                <span>Fantasy</span>
                            </div>
                            {/* <div className='filtDiv'> */}
                        {/* <h3>genre</h3> */}
                        {/* <dixv className='genres'> */}
                            <div className='selec'>
                                <input type="checkbox" className='check' name={"thriller"} value={"thriller"} checked={form.genre.thriller} onChange={(e)=>{updateForm(e,'genre')}} />
                                <span>Thriller</span>
                            </div>
                            <div className='selec'>
                                <input type="checkbox"  className='check' name={"romance"} value={"romance"} checked={form.genre.romance}  onChange={(e)=>{updateForm(e,'genre')}}/>
                                <span>Romance</span>
                            </div>
                            <div className='selec'>
                                <input type="checkbox" className='check' name={"adventure"} value={"adventure"} checked={form.genre.adventure} onChange={(e)=>{updateForm(e,'genre')}} />
                                <span>Adventure</span>
                            </div>    
                        {/* </div> */}
                    {/* </div>     */}
                        </div>
                    </div>
                </div>
                <div className='moviesDiv'>
                    {movies && movies.map(movie=><Movie genres={movie.genre}
                                                        id={movie._id}
                                                        images={movie.images}
                                                        name={movie.name}
                                                        likes={movie.likes}
                                                        dislike={movie.dislikes}
                                                        releasing={movie.releasing} />)}

                </div>
                  
            </div>
            </>
   )
}


export default MovieList