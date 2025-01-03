import Image from 'next/image'
import React from 'react'

const Pic = () => {
  return (
    <div className='mt-20 md:flex-row flex justify-center items-center flex-col '>
        <Image src="/1.png" alt=''height={210} width={200} className='md:h-[210px] md:w-[200px] w-[500px] sm:h-[300px] sm:w-[300px]' />
        <Image src="/2.png" alt=''height={210} width={200} className='md:h-[210px] md:w-[200px] w-[500px] sm:h-[300px] sm:w-[300px]' />
        <Image src="/3.png" alt=''height={210} width={200} className='md:h-[210px] md:w-[200px] w-[500px] sm:h-[300px] sm:w-[300px]' />
        <Image src="/4.png" alt=''height={210} width={200} className='md:h-[210px] md:w-[200px] w-[500px] sm:h-[300px] sm:w-[300px]' />
        <Image src="/5.png" alt=''height={210} width={200} className='md:h-[210px] md:w-[200px] w-[500px] sm:h-[300px] sm:w-[300px]' />
    </div>
  )
}

export default Pic