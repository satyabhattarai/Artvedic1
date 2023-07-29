import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Productcard from './Productcard';


const RelatedProduct = () => {
    
    const breakpoints ={
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      },


};
  return (
    <div className='mb-8'>
    <div className='text-2xl mt-8 mb-8 mx-[35px]'>You Might Also Like</div>
    <Carousel
    
    responsive={breakpoints}
    containerClass=" mx-[30px]" itemClass="px-[10px]"
    >
 <Productcard/>
 <Productcard/>
 <Productcard/>
 <Productcard/>
 <Productcard/>
 <Productcard/>
 <Productcard/>
 <Productcard/>
 <Productcard/>
</Carousel>
</div>

  )
}

export default RelatedProduct