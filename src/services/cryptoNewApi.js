import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const cryptoHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '92fa813160msha11f7e2d7ff032ep17db1cjsnc98c0e83ce86'
}
const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoHeaders})

export const cryptoNewsApi = createApi(
    {
        reducerPath: 'cryptoNewsApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        //cái đuôi cua api
        endpoints: (builder) => ({
            getCryptoNews: builder.query({
                query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}` )
            })
        })
    }
)

export const {
    useGetCryptoNewsQuery
} = cryptoNewsApi;
