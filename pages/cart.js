import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cartitems from '@/components/Cartitems'
 



const cart = () => {
  return (
    /*main div */
    <div className='w-full md:py-20'>

    <div className='max-w-[800px] mt-8 md:mt-0 text-center mx-auto'>

    <div className='text-[28px] md:text-[34px] mb-5 
    font-semibold  leading-tight '> Shopping Cart
    </div>
   

    <div className='flex flex-col gap-12 lg:flex-row py-10'>


    <div className='flex-[2]'> 
    <div className='text-[20px]'>Cart Items</div>
    <Cartitems/>
    <Cartitems/>
    <Cartitems/> 

    </div>
    <div className='flex-[1]'>
        <div className='text-[20px] '>Summary</div>

        </div>

 </div>





   
    </div>
    
    
    
    
    {/*main div end */}
    </div>

  )
}

export default cart