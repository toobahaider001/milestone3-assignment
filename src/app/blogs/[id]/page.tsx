'use client'
import React, { ReactNode, useState } from 'react'
import { blogsData } from '../../../../data/blogs'

interface Iparams {
  params: {
    id: string
  }
}
const page = ({ params }: { params: Promise<{ id: string }> }) => {
  const [comment,setComment] = useState("");
  const [comments,setComments] = useState<string[]>([]);
 
  const foundBlog = blogsData.find(async (item) => {
    return (await params).id == item.id
  });

  const handleComments = (e:React.FormEvent)=>{
    e.preventDefault()
    setComments((prev)=> [...prev,comment])

  }
  return (
    <div className='w-full mt-[150px] bg-green-200 md:p-9 border-blue-900 border-[2px] shadow-2xl rounded-2xl flex flex-col p-7'>
      <div className='flex md:flex-row flex-col gap-[100px] justify-center items-center p-[30px]'>
        <div>
        <div className='md:text-[30px] font-bold'>{foundBlog?.title}</div>
        <div className='md:text-[24px] mt-4 md:w-[500px]'>{foundBlog?.content}</div>
        </div>
        <img src={foundBlog?.imageUrl} alt="" height={300}  width={300} className='md:h-[300px] md:w-[300px] h-[200px] w-[200px] sm:h-[300px] sm:w-[300px]'/>
      </div>
      {/* Commet Section */}
      <div className='p-9 flex '>
        <form onSubmit={handleComments}>
          <input type="text" className='w-[200px] p-3 '
          onChange={(e)=> setComment(e.target.value)} />
          <button type='submit' className='md:mx-3 '>Submit</button>
        </form>
      </div>
      {/* ALl comments */}
      <div className='md:w-[500px] md:h-[100px] h-[50px] w-[250px] p-5 border-[2px] border-blue-950 md:mt-[20px]'>{
        comments.map((item,index)=>{
          return(
            <div key={index}>{item}</div>
          )
        })
        }
      </div>
    </div>
  )
}

export default page