import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

  export const CoreApi = createApi({
    reducerPath: 'CoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl:'https://wft-geo-db.p.rapidapi.com/v1/geo',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', 'b8a45c3b4cmsh113c03a6c1619afp116f6cjsnb50c361da654')

        return headers
      },
    }),
    endpoints: (builder) => ({
      getTopCities: builder.query({query: () => '/adminDivisions/Q104994/nearbyDivisions'})
    }),
  })

  export const {
    useGetTopCitiesQuery,
  } = CoreApi