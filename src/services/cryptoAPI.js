//1 cách lấy api mới ngoài axios, fetch
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '92fa813160msha11f7e2d7ff032ep17db1cjsnc98c0e83ce86'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoHeaders})
export const cryptoApi = createApi(
    {
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({ baseUrl }),
        //cái đuôi cua api
        endpoints: (builder) => ({
            getCryptos: builder.query({
                query: (count) => createRequest(`/coins?limit=${count}` )
            }),
            getCryptoDetails: builder.query({
                query: (coinId) => createRequest(`/coin/${coinId}` )
            }),
            getExchanges: builder.query({
              query: () => createRequest('/exchanges'),
            }),
        })
    }
)

// này là đặt biến nè phải để trong {} có nghĩa khi biến khac
// { data (api trả về), isLoading } = use...Query
export const {
    useGetCryptosQuery
} = cryptoApi;

export const {
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
} = cryptoApi;