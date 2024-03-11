import React from 'react'

export default function ContactUs(){
  return (
    <div className='contact-us-container'>
        <div className='m-16'>
            <div className='grid place-items-end'>
                 <div className='p-5'>
                    <h4 className='uppercase text-2xl mb-4'>Hello Customer!</h4>
                    <h2 className='uppercase text-5xl'>Visit Our Store</h2>
                 </div>
                 <div className='p-4 text-xl font-normal'>
                    <p className='mb-4'>21 w, 11th street., New York,US</p>
                    <p className='mb-4'>BigBoom@domain.com</p>
                    <p>+84 (800) 3333 4567</p>
                 </div>
                 <div className="p-4">
                    <button
                    type='button'
                    className='bg-red-500 hover:bg-black pt-4 pb-4 pl-8 pr-8 uppercase text-xl text-white font-semibold' >
                        Contact Us
                    </button>
                 </div>
            </div>
        </div>
        <div className='stickey-background'>
            <img src="./img/banners/id1-banner2.jpg" alt="img" />
        </div>
    </div>
  )
}
