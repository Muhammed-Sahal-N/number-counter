import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice'
CounterSlice

const counterStore=configureStore({
    reducer:{

        counterReducer:CounterSlice



    }
})
export default counterStore