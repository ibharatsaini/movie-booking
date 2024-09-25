import React from 'react'
import {RiHandHeartLine,RiUserFollowFill} from 'react-icons/ri'
import {SlBadge} from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Banner from '../Banner/Banner'
import Search from '../Search/Search'
import Tomato from "../../images/tomato.png"
import Cake from "../../images/cake.png"
import "./home.css"

function Home() {
  return (
       <>   
              <Banner />
              <Search />
              <div className='latestMovie'>
                            <div className="head">
                                   <div className='sideDiv'>
                                          <section>
                                             <RiHandHeartLine color={"#31d7a9"} fontSize={"28px"} />
                                             <span>24x7 Care</span>
                                          </section>
                                          <section>
                                             <RiUserFollowFill color={"#31d7a9"} fontSize={"28px"} />
                                             <span>100% Assurance</span>
                                          </section>
                                          <section>
                                             <SlBadge color={"#31d7a9"} fontSize={"28px"} />
                                             <span>Our Promise</span>
                                          </section>
                                   </div>

                            </div>
                            <div className="filmGenre"> 
                                <div className='fge'>
                                <div className='firDiv'><section>Comedy</section><Link to={`/movies/filter?genre=comedy`}>view more </Link></div>

                                   <section></section>
                                   <div className='comRom'>
                                          <Link to={`/movie/63849f6b782f58a65f06b76a`} className='film'>
                                                 <div className='filImg'>
                                                        <img src={"https://firebasestorage.googleapis.com/v0/b/restaurantapp-850d9.appspot.com/o/Images%2F1667822551018-brahmastra%20pin.png?alt=media&token=20d3f40c-daa7-4e0f-83a6-970aedd7e389"}/>
                                                 </div>
                                                 <div className='secTitle'>Brahmastra</div>
                                                 <div className='secLike'>
                                                        <div className='secRat'>
                                                               <img src={Tomato} />
                                                               15
                                                        </div>
                                                        <div className='secRat'>
                                                               <img src={Cake} />
                                                               15
                                                        </div>
                                                 </div>
                                          </Link>

                                  
                                   {/* <div className='comRom'> */}
                                          <Link to={`/movie/63849f6b782f58a65f06b76e`} className='film'>
                                                 <div className='filImg'>
                                                        <img src={"https://firebasestorage.googleapis.com/v0/b/restaurantapp-850d9.appspot.com/o/Images%2F1667823162114-venus.jpg?alt=media&token=54fd5d5d-70e9-416c-b856-aef4776f24b8"}/>
                                                 </div>
                                                 <div className='secTitle'>Venus</div>
                                                 <div className='secLike'>
                                                        <div className='secRat'>
                                                               <img src={Tomato} />
                                                               15
                                                        </div>
                                                        <div className='secRat'>
                                                               <img src={Cake} />
                                                               15
                                                        </div>
                                                 </div>
                                          </Link>

                                   {/* </div> */}
                                   {/* <div className='comRom'> */}
                                          <Link to={`/movie/63849f6b782f58a65f06b770`} className='film'>
                                                 <div className='filImg'>
                                                        <img src={"https://firebasestorage.googleapis.com/v0/b/restaurantapp-850d9.appspot.com/o/Images%2F1667822634349-ghost.png?alt=media&token=6a522f5a-753a-497a-a923-58c862a264db"}/>
                                                 </div>
                                                 <div className='secTitle'>Ghost Story</div>
                                                 <div className='secLike'>
                                                        <div className='secRat'>
                                                               <img src={Tomato} />
                                                               15
                                                        </div>
                                                        <div className='secRat'>
                                                               <img src={Cake} />
                                                               15
                                                        </div>
                                                 </div>
                                          </Link>
                                          </div>
                                   {/* </div> */}
                                </div>
                                {/* <div className='genre'>
                                   <h2>Comedy</h2>
                                   <span></span> */}
                                   
                                {/* </div> */}
                                <div className='fge'>
                                   <div  className='firDiv'><section>Action</section><Link to={`/movies/filter?genre=action`}>view more </Link></div>
                                   <section></section>
                                  
                                {/* </div> */}
                                <div className='comRom'>
                                          <Link to={`/movie/63849f6b782f58a65f06b76f`} className='film'>
                                                 <div className='filImg'>
                                                        <img src={"https://firebasestorage.googleapis.com/v0/b/restaurantapp-850d9.appspot.com/o/Images%2F1667822950013-mukkabaaz.png?alt=media&token=0dde2d8c-9bf2-4780-9bd6-539a5b9f31a7"}/>
                                                 </div>
                                                 <div className='secTitle'>Mukkabaaz</div>
                                                 <div className='secLike'>
                                                        <div className='secRat'>
                                                               <img src={Tomato} />
                                                               15
                                                        </div>
                                                        <div className='secRat'>
                                                               <img src={Cake} />
                                                               15
                                                        </div>
                                                 </div>
                                          </Link>

                                   
                                   {/* <div className='comRom'> */}
                                          <Link to={`/movie/63849f6b782f58a65f06b76d`} className='film'>
                                                 <div className='filImg'>
                                                        <img src={"https://firebasestorage.googleapis.com/v0/b/restaurantapp-850d9.appspot.com/o/Images%2F1667822859018-mars.jpg?alt=media&token=a157db20-1c03-4a0c-9429-06f87b02c405"}/>
                                                 </div>
                                                 <div className='secTitle'>Mars</div>
                                                 <div className='secLike'>
                                                        <div className='secRat'>
                                                               {/* <img src={Tomato} /> */}
                                                               <img src={Tomato} />
                                                               15
                                                        </div>
                                                        <div className='secRat'>
                                                               <img src={Cake} />
                                                               15
                                                        </div>
                                                 </div>
                                          </Link>

                                   {/* </div> */}
                                   {/* <div className='comRom'> */}
                                          <Link to={`/movie/63849f6b782f58a65f06b76b`} className='film'>
                                                 <div className='filImg'>
                                                        <img src={"https://firebasestorage.googleapis.com/v0/b/restaurantapp-850d9.appspot.com/o/Images%2F1667822823436-kantara.png?alt=media&token=14955460-a216-4e4e-881a-c36b85a3ae70"}/>
                                                 </div>
                                                 <div className='secTitle'>kantara</div>
                                                 <div className='secLike'>
                                                        <div className='secRat'>
                                                               {/* <img src={Tomato} /> */}
                                                               <img src={Tomato} />
                                                               15
                                                        </div>
                                                        <div className='secRat'>
                                                               {/* <img src={process.env.PUBLIC_URL+"/cake.png"} /> */}
                                                               <img src={Cake} />
                                                               15
                                                        </div>
                                                 </div>
                                          </Link>

                                   </div>
                                   </div>


                               
                              </div>

              </div>
       </>
  )
}

export default Home