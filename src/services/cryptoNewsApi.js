import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'bcd9a8874bmshde11dd4d28b21f7p1ef7e9jsnd0091496c4e6'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url)=> ({url, headers: cryptoNewsHeaders});

// get crypto api
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
      getCryptoNews: builder.query({
        query: ({newsCategory, count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      })
    })
  });

// news query
export const {useGetCryptoNewsQuery} = cryptoNewsApi;