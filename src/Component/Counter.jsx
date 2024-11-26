import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/CounterSlice'


useDispatch
useSelector

function Counter() {

    const[amount,setAmount]=useState(0)

    const dispatch=useDispatch()

    const {count}= useSelector(state=>state.counterReducer)
    const handleIncrementByAmount=()=>{
        if(amount){
            dispatch(incrementByAmount(Number(amount)))
        }
        else{
            alert("enter valid amount")
        }
    }





  return (
      <div style={{minHeight:'100vh',backgroundColor:'black'}}>
          <h1 className='text-center text-white pt-5'>COUNT NOW</h1>
          <div className='w-100 d-flex align-items-center justify-content-center ' >
              <div className='border border-3 border-light rounded p-3 mt-5' style={{height:'400px',width:'700px'}}>
                  <h1 className='my-5 align-items-center justify-content-center text-white 'style={{textAlign:'center'}}>{count}</h1>

                  <div className='d-flex align-items-center justify-content-around mt-5'>
                      <button onClick={()=>dispatch(increment())} className='btn btn-warning'>increment</button>
                      <button onClick={()=>dispatch(reset())} className='btn btn-warning'>reset</button>
                      <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>decrement</button>

                  </div>
                  <div className='d-flex align-items-center justify-content-around mt-5'>
                      <input onChange={(e)=>setAmount(e.target.value)} className='form-control' type="text" placeholder='increment amount' />
                      <button onClick={handleIncrementByAmount}  className='btn btn-primary'>increment</button>

                  </div>
              </div>
          </div>
      </div>
    
  )
}

export default Counter