import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface BlogProps {
    id: string,
    title: string,
    content: string,
    image: string
}

const Blog: React.FC<BlogProps> = ({
    content,
    id,
    image,
    title
}) => {
  return (
    <Link
        href={`/blogs/${id}`}
    >
        <div className='md:w-[23vw] bg-blue-100 p-7 gap-9 mt-[50px] items-center  rounded-2xl flex flex-col border-blue-800 border-[2px] shadow-2xl '>
            <div className='md:text-xl font-bold'>{title}</div>
            <div>
                <img
                    alt=''
                    src={image}
                    height={200}
                    width={200}
                 />
            </div>
            <div className='mt-3 text-zinc-500'>{content}</div>
        </div>
    </Link>
  )
}

export default Blog