import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import MovieDetail from './MovieDetail/MovieDetail'
import MovieList from './MovieList/MovieList'
import Search from './Search/Search'
import Cinema from './Cinema/Cinema'
import Show from './Show/Show'
import Checkout from './Checkout/Checkout'
import Login from './Join/Login'
import SignUp from './Join/SignUp'
// impo

function Router() {
  return (
        <>
       
           {/* {(window.location.href.indexOf("join-us") == -1 && window.location.href.indexOf("login") == -1) && <Header />} */}
                {/* <Routes>
                      <Route render={({location})=>location.pathname !='/join-us' ?(<Header />): null
                        } />
                </Routes> */}
                 <Header />
                <Routes> 

                    <Route path="/join-us" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/search" element={<MovieList />} /> */}
                    <Route path="/movies/filter" element={<MovieList />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                    <Route path="/cinema/:movieId" element={<Cinema/>} />
                    {/* <Route path="/show/:movieName/:language/cinema/:cinemaId/time/:timing" element={<Show />} /> */}
                    <Route path="/show/:movieName" element={<Show />}/>
                    <Route path="/checkout" element={<Checkout />}/>
               </Routes>
              
            {/* <Footer /> */}
        </>
  )
}

export default Router