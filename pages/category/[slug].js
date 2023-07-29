import Productcard from '@/components/Productcard'
import { useRouter } from 'next/router'
import React from 'react'

{/* dynamic routing */}

const Category = () => {
const router= useRouter()
  return (
    <div className='text-center text-[28px]'>
      Acrylics

      <div
        className="grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 gap-5 px-5 md:px-32 my-14 "
      >
        <Productcard />
        <Productcard />
        <Productcard />

      </div>


      </div>
      
  )
}

export default Category

