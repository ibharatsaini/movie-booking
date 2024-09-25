import React, { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import Banner04 from "../../images/banner04.jpg"
// import { useDispatch, useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks'
import { updateShow } from '../../reduxStore/actions/showAction'
import { updateCart } from '../../reduxStore/actions/cartAction'
import {TbArmchair} from 'react-icons/tb'
import {Shows ,ShowStore} from '../../reduxStore/types'
import '../Cinema/cinema.css'
import './show.css'
import PageLoading from '../PageLoading/PageLoading'

function Show() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const data:ShowStore = useAppSelector(state=>state.show)
  const alpha = ['H','G','F','E','D','C','B','A']
  const [seats,setSeats]= useState<String[]>([])
  const [total,setTotal] = useState<number>()
  // const shows = u
  useEffect(()=>{
    const loc = new URLSearchParams(window.location.search) 
    const params:any={}
    loc.forEach((v,k)=>params[k]=v)
    console.log(params)
    dispatch(updateShow(params) as any)
  },[window.location.href])
  
  useEffect(()=>{
      let price=0;
    
      seats.map(el=>{
        if(el[0]<'F'){
          price = price+data.shows[0]?.price.silver
        }else{
           price = price+data.shows[0]?.price.golden
        }

      })
      setTotal(price)

  },[seats])
  
  function updateBooking(){
      dispatch(updateCart({
          show:   data.shows[0],
          seats:  [...seats],
          price: total
      }))
      navigate("/checkout")
  }
 
  function changeIt(name:string){
      if(seats.indexOf(name) != -1){
        document.getElementsByName(name)[0].style.color='white'
        setSeats(prev=>prev.filter(el=>el!=name))
        return 
      }
      document.getElementsByName(name)[0].style.color='green'
      setSeats(prev=>[...prev,name])
  }
  // data?.shows[0]?.seatsBooked?.forEach((el:any)=>document.getElementsByName(el)[0].style.color='pink')

 
  return data.shows.length==0 ? (<div  style={{width:'100%',height:'calc(100vh - 100px)',display: 'flex',justifyContent:'centre',alignItems:'center'}}>
                                              <div onClick={()=>{window.history.go(-1)}}  style={{textDecoration:'none',color:'black',padding:'20px',margin: 'auto',background: 'aliceblue'}}>No Shows Found Go Back</div>
                                 </div> )
                              :(
    <>
      {/* <div className="ti" style={{backgroundImage:`url(${process.env.PUBLIC_URL+"/banner04.jpg"})`}}> */}
      <div className="ti" style={{backgroundImage:`url(${Banner04})`}}>
                       <div className='titlelang'>
                                <h1>{data.movie.name}</h1>
                                <h3>{data.filters.language}</h3>
                       </div>
            </div>
            <div className='cl'>
            {
            alpha.map(el=>{
              const f=[1,2,3,4]
              const s=[5,6,7,8,9,10]
              const t=[11,12,13,14]
              // console.log('inside')
              return ( <>
              {el=='H' && <div className='gold'>Gold</div>}
              {el=='E' && <div className='gold'>Silver</div>}
              <div className='ddd'>   
           
              <div className='aile'>{el}</div>
              <div className='entire'>
             <div className='firRow'> {f.map(r=>(<div className='set first'><TbArmchair className='chair' onClick={()=>changeIt(el+r)} name={el+r} style={{position:"absolute"}}   /></div>))}</div>
              <div className='secRow'>{s.map(r=>(<div className='set second'><TbArmchair  className='chair'  onClick={()=>changeIt(el+r)} name={el+r}  style={{position:"absolute"}}   /></div>))}</div>
              <div className='thRow'>{t.map(r=><div className='set third'><TbArmchair  className='chair'  onClick={()=>changeIt(el+r)} name={el+r}   style={{position:"absolute"}}    /></div>)}</div>
              </div>
              <div className='aile'>{el}</div>

              </div>
              </>
              )
  })}
  </div>
   <div className='proceed' style={{}}>
             { }
             <div className='seatsBook'>
                  <h4>Selected Seats</h4>
                  <section>{seats.map((el,i)=>(<h2>{i!=0 && ","}{el}</h2>))}</section>
             </div>
             <div className='seatsBook'>
                  <h4>Total Price</h4>
                  <h2 style={{marginTop:"10px"}}> &#x20b9; {total}</h2>
             </div>
             <div className='seatsBook'>
                 <div className='bu' onClick={updateBooking}>Proceed</div>
             </div>
   </div>
    </>
  )
}

export default Show