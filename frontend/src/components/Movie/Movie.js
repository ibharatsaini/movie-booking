import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./movie.css"
import Tomato from "../../images/tomato.png"
import Cake from "../../images/cake.png"
function Movie({id,genres,images,name,likes,dislike,releasing}) {
  const [like,setLike] = useState({like:false,dislike:false})
  function onLike(e){
      setLike(prev=>({...prev,[e.target.name]:!prev[e.target.name]}))
  }
  // console.log(like)
  return (
    <div className='movieDiv'>
            <div className='movImg'>
                <img src={images[0]} />
            </div>
            <div className='desc'>
                  <h2>{name}</h2>
                  <h4>3hrs 00min</h4>
                  <div className='genre'>
                    {genres.map((el,i)=>{
                        // let dd = <span>{el}</span>
                        if(i!=0){
                          return (<span><insert>|</insert>  {`${el}`}   </span>)
                        }
                        return (<span>{el}  </span>)
                    })}
                  </div>
                  <div className='release'>
                    <span>Releasing On : </span>
                    <insert>{releasing}</insert>
                  </div>
                  <div className='fav'>
                        <div className='like'>
                             {/* <img src={process.env.PUBLIC_URL+"/tomato.png"}  /> */}
                             <img src={Tomato}  />
                                   <span>{likes}</span>
                        </div>
                        <div className='like'>
                            {/* <img src={process.env.PUBLIC_URL+"/cake.png"} /> */}
                            <img src={Cake} />
                            <span>{dislike}</span>
                        </div>
                  </div>
                  <div className='tix'>
                      <div className='op'>
                      <Link to={`/movie/${id}`}>Go To Movie</Link>

                           {/* <AiFillLike fontSize={"22px"} name={"like"}  color={like.like?"red":"whitesmoke"} onClick={(e)=>{onLike(e)}}/>
                           <AiFillDislike cursor={"pointer"} fontSize={"22px"} name={"dislike"} color={"whitesmoke"} onClick={(e)=>{onLike(e)}} /> */}
                      </div>
                      <div className='op'>
                        <a href="https://www.youtube.com/" target={"_blank"}>Watch Trailer</a>
                      </div>
                  </div>
            </div>
    </div>
  )
}

export default Movie