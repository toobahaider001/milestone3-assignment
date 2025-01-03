import React from 'react'
import { blogsData } from '../../../data/blogs'
import Blog from '@/components/Blog'
const page = () => {
  return (
    <div className='flex items-center flex-wrap gap-8  '>
      {
        blogsData.map((item, index) => (
          <Blog
            content={item.content}
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            key={index}
           />
        ))
      }
    </div>
  )
}

export default page