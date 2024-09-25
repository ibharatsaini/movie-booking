import React,{useEffect, useState} from 'react'
import Banner from '../Banner/Banner'
import Search from '../Search/Search'
import "./movielist.css"
import { useDispatch } from 'react-redux'
import Movie from '../Movie/Movie'
import { useLocation } from 'react-router-dom'

type FormInclude =  {
    language:{
        hindi:Boolean,
        malyalam:Boolean,
        english:Boolean,
        tamil:Boolean
    },
    genre:{
        comedy:Boolean,
        adventure:Boolean,
        romance:Boolean,
        thriller:Boolean,
        action:Boolean,
        fantasy:Boolean
    },
    releasing:String
}

type Filter={
    language?:String,
    genre?:String
}

function  MovieList() {
        const [form,setForm] = useState<FormInclude>({
            language:{hindi:false,malyalam:false,english:false,tamil:false},
            genre:{comedy:false,adventure:false,romance:false,thriller:false,action:false,fantasy:false},
            releasing:""
           })
        const [movies,setMovie] = useState<any>([])
        // function updateLang(e){ 
        //     dispatch(updatelanguage({language:e.target.value}))
        // }
        useEffect(()=>{
            console.log(window.location.href)
            const url = new URLSearchParams(window.location.search)
            const filter = {} as any
            url.forEach((v,k)=>{filter[k]=v})
            console.log(filter)
            for(let k in filter){
                setForm((prev:any)=>({
                    ...prev,
                    [k]:{...prev[k],[filter[k]]:true}
                }))
            }
            fetch(`/api/v1/movie/filter?${url}`)
                .then(data=>data.json())
                .then(data=>setMovie(data.data)) 

        },[window.location.href])
<<<<<<< HEAD:frontend/src/components/MovieList/MovieList.js
        function updateForm(e,k){
            console.log(form)
            const url = new URLSearchParams(window.location.search)
          
            // setForm(prev=>({
            //   ...prev,
            //   [k]:{[[k][!e.target.name]]:false,[e.target.name]:!prev[k][e.target.name]}
            // }))
            setForm(prev=>{
                const oj={...prev}
                Object.keys(oj[k]).forEach((key)=>{
                    console.log(key)
                     key==e.target.name?oj[k][key]=!oj[k][key]:oj[k][key]=false
                })
                console.log(prev,oj)
                return {...prev,...oj}
            })
            
            // url.set(k,e.target.value)
            e.target.checked ? url.set(k,e.target.value) : url.delete(k)
            window.history.replaceState({}, '', `/movies/filter?${url}`);
=======
        function updateForm(e:any,k:any){
                console.log(e.target.checked)
                const url = new URLSearchParams(window.location.search)
                // let inpFilt= document.querySelectorAll(`#${k} [type='checkbox']`)
                // let inpFilt= Array.from(document.querySelectorAll(`#${k} [type='checkbox']`)) 
                // console.log(inpFilt[0].checked=true)
                // for(let d of inpFilt){
                //     console.log(d)
                //     d.checked=true
                // }
                // Object.keys(form[k]).forEach()
                
                
                // console.log(inpFilt?.querySelectorAll("[type='checkbox']")[0])
             
                console.log(e.target.name,k)
                // setForm(prev=>({
                //   ...prev,
                //   [k]:{[[k][!e.target.name]]:false,[e.target.name]:!prev[k][e.target.name]}
                // }))
                setForm((prev:any)=>{
                    const oj={...prev}
                    Object.keys(oj[k]).forEach((key)=>{
                        console.log(key)
                        
                        if(key==e.target.name){
                            console.log(e.target.name, key)
                            console.log('ddd')
                            const b = document.getElementById(key) as HTMLInputElement
                            // console.log(checked)
                            b.checked=!b.checked
                            oj[k][key]=!oj[k][key]
                        }else{
                            console.log(key)
                            const b = document.getElementById(key) as HTMLInputElement
                            console.log(b)
                            b.checked=false

                            oj[k][key]=false
                        }
                    })
                    console.log(prev,oj)
                    return {...prev,...oj}
                })
                // url.set(k,e.target.value)
                e.target.checked ? url.set(k,e.target.value) : url.delete(k)
                window.history.replaceState({}, '', `/movies/filter?${url}`);
>>>>>>> e19d64e4c99cfd74cb0a1eebbe252d41346d6527:frontend/src/components/MovieList/MovieList.tsx


          }
        

        return (
            <>
            <Banner/>
            <Search />
                      <div className='movieList'>
                <div className='filters'>
                    <div id="language" className='filtDiv'>
                        <h3>LANGUAGE</h3>
                        <div className='languages'>
                            <div className='selec'>
                                <input type="checkbox" id="hindi" className='check' name={"hindi"} value={"hindi"}  onChange={(e)=>{updateForm(e,'language')}} />
                                <span>Hindi</span>
                            </div>
                            <div className='selec'>
                                <input type="checkbox" id="malyalam"  className='check' name={"malyalam"} value={"malyalam"}  onChange={(e)=>{updateForm(e,'language')}}/>
                                <span>Malyalam</span>
                            </div>
                            <div className='selec'>
                                <input type="checkbox" id="english" className='check' name={"english"} value={"english"} onChange={(e)=>{updateForm(e,'language')}} />
                                <span>English</span>
                            </div> 
                            <div className='selec'>
                                <input type="checkbox" id="tamil" className='check' name={"tamil"} value={"tamil"}  onChange={(e)=>{updateForm(e,'language')}} />
                                <span>Tamil</span>
                            </div>    
                        </div>
                    </div>
                    {/* <div className='filtDiv'>
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
                        
                        </div>
                    </div> */}
                </div>
                <div className='moviesDiv'>
                    {movies && movies.map((movie:any)=><Movie genres={movie.genre}
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