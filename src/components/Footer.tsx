import React from 'react'

const Footer = () => {
  return (
    <div className='md:flex-row flex flex-col mt-[100px] justify-center gap-[100px] md:gap-[300px]'>
        <div className='flex flex-col '>
            <div className='font-bold text-[20px]'>About</div>
            <div>Email: <span>info@gmail.com</span></div>
            <div>Phone: <span>+92-3921283485</span></div>
        </div>
        <div className='flex flex-col'>
            <div className='font-bold text-[20px]'>Quick Link</div>
            <div className='text-[20px] text-zinc-400'>
            <div>Home</div>
            <div>About</div>
            <div>Blog</div>
            <div>Archived</div>
            <div>Author</div>
            <div>Contact</div>
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='font-bold text-[20px]'>Category</div>
            <div className='text-[20px] text-zinc-400'>
            <div>Lifestyle</div>
            <div>Technology</div>
            <div>Travel</div>
            <div>Business</div>
            <div>Economy</div>
            <div>Sports</div>
            </div>
        </div>
        </div>
  )
}

export default Footer