import React from 'react'
import { fetchUsers } from '../api/post.api'
import { useQuery } from '@tanstack/react-query'
import Navbar from './Navbar'

const User = () => {

 const {data, isLoading,isFetching, error} = useQuery({
  queryKey:['users'],
  queryFn:fetchUsers,
  staleTime: 60 * 1000
 })

 if(isLoading) return <h1>Loading....</h1>
 if(error) return <h1>{error.message}</h1>

 // console.log(data)
  return (
<div className='min-h-screen w-full bg-black text-white p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4'>
        {data.map((item) => (
          <div
            className='bg-gray-900 rounded-md p-4 flex flex-col items-center justify-center text-center h-32'
            key={`${item.id}`}
          >
            <h2 className='text-sm font-semibold break-words'>{item.name}</h2>
            <h2 className='text-sm font-semibold break-words'>{item.username}</h2>
          </div>
        ))}
          <button  type='reset' className='w-30 h-15 rounded-md bg-blue-500 active:scale-90' >Click me</button>
      </div>
    </div>
  )
}

export default User