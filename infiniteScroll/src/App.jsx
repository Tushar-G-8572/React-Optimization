import React, { useEffect, useState,useCallback, useRef } from 'react'
import axios from 'axios';

const App = () => {
  const [posts,setPosts] = useState([]);
  const [page,setPage] = useState(1);
  const [loading,setLoading] = useState(false);
  const [hasMore,setHasMore] = useState(true);

  const obeserverRef = useRef();

  const fetchData = useCallback(async ()=>{
    setLoading(true);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?_limit=10&_page=${page}`
    );
    setPosts((prev)=> [...prev,...response.data]);
    if (response.data.length === 0) setHasMore(false);
    setLoading(false)
  },[page])

  // console.log(posts);

  useEffect(()=>{
    fetchData();
  },[fetchData])

  // useEffect(()=>{
  //   function handleScroll(){
  //     const {scrollTop,scrollHeight} = document.documentElement;
  //     const nearBottom = scrollTop + window.innerHeight >= scrollHeight - 200;

  //     if(nearBottom && !loading && hasMore){
  //       setPage((prev)=> prev+1)
  //     }
  //   }

  //   window.addEventListener('scroll',handleScroll);
  //   return ()=> window.removeEventListener('scroll',handleScroll)
  // },[loading,hasMore])


  useEffect(()=>{
    const obserever = new IntersectionObserver((entries)=>{
      // console.log(entries);
      if(entries[0].isIntersecting && !loading && hasMore){
        setPage((prev)=> prev+1)
      }

    },{threshold:1});

    if(obeserverRef.current) obserever.observe(obeserverRef.current);
    return ()=> obserever.disconnect();
  },[hasMore,loading])


  return (
     <div className='min-h-screen w-full bg-black text-white p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4'>
        {posts.map((post, i) => (
          <div
            className='bg-gray-900 rounded-md p-4 flex items-center justify-center text-center h-32'
            key={`${post.id}-${i}`}
          >
            <h2 className='text-sm font-semibold break-words'>{post.title}</h2>
          </div>
        ))}
      </div>
      {loading && <p className='text-center mt-4'>Loading more...</p>}
      {!hasMore && <p className='text-center mt-4 text-gray-500'>No more posts</p>}
      <div ref={obeserverRef} className="h-4" />
    </div>
  )
}

export default App