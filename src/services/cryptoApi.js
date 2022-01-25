import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'bcd9a8874bmshde11dd4d28b21f7p1ef7e9jsnd0091496c4e6'
};

const baseUrl ='https://coinranking1.p.rapidapi.com';

const createRequest = (url)=> ({url, headers: cryptoApiHeaders })

// get crypto api
export const cryptoApi = createApi({
  reducerPath: 'crypto',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder)=> ({
    getCryptos: builder.query({
      query: ()=> createRequest('/coins')
    })
  })
});

export const {
  useGetCryptosQuery,
} = cryptoApi;