import React from 'react'
import Navbar from './components/Navbar'

const SingleBlog = () => {
  return (
    <>
      <Navbar/>
      <div className="single-blog px-[100px] mt-4">
        <div className="flex w-full min1-h-[400px] pt-5">
            <div className="left w-[30%] h-full ">
                <img className='w-full rounded-lg' src="https://i.pinimg.com/474x/ce/81/bc/ce81bc80aa88e372c973a612883be83e.jpg" alt="" />
            </div>
            <div className='ml-4'>
                <h3 className='text-3xl font-[500]'> The First cup of tea</h3>
                <p className='text-[gray] text-[14px]  mt-3 mb-3'>created : 4 Jan 2023</p>
                <b>Description</b>
                 <p className='text-[gray] text-[14px]  mt-2'>A memory of that first cup of tea that changed the way mornings felt........................</p>
            </div>
        </div>

        <div>
          Content
        </div>
      </div>
    </>
  )
}

export default SingleBlog