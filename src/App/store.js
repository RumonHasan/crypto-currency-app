import {configureStore} from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';

// acts similar to the context api in react 
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer
    },
})