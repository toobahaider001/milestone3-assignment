import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Header = () => {
  return (
    <div className='w-full flex justify-between gap-9'>
        <div className=' text-[25px]'>Meta <span className='font-bold'>Blog</span></div>
        <div className='flex gap-4'>
            <Link href="/">Home</Link>
            <Link href="/blogs">blogs</Link>
        </div>
        
        </div>)
}

export default Header