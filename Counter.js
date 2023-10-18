import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement,incrementbyvalue} from '../redux/counterSlice';

export default function Counter(){
    const count=useSelector((store)=>store.counter.count);
    const dispatch = useDispatch();
    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement(56))}>decrement</button>
            <button onClick={()=> dispatch(incrementbyvalue(50))}>mentbyvalue by 50</button>
        </div>
    )
}