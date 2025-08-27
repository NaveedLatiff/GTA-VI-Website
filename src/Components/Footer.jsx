import React from 'react'

const Footer = () => {
  return (
<div className='footer h-full bg-black text-white flex flex-col gap-3.5 justify-center items-center'>
            <div style={{ marginBottom: "30px" }} className='logo h-[25%] w-[25%] '>
              <img

                className='h-full w-full object-contain '
                src="./grandTheftAutoLogo.png"
                alt="logo" />
            </div>
            <div style={{ marginBottom: "30px" }} className=' w-[42%] text-center '>
              <h1 className='footer-heading text-[5vw] leading-none font-extrabold'>COMING SOON MAY 26 2026</h1>
            </div>
            <div className='footer-box   w-[92%] border-2 border-gray-600 rounded-4xl flex  '>
              <div className='h-full w-[45%] pt-[300px] flex justify-center items-center gap-2'>
                <img
                  className='h-[25%] w-[6%] object-contain '
                  src='./rockstar.jpeg'
                  alt='rockstar'
                />
                <h1 className='text-[2vw]  footer-box-h-1'>GET ROCKSTAR PROPOGANDA</h1>
              </div>
              <div style={{ padding: "20px 1px" }} className=' h-full w-[55%]  flex justify-center items-center'>
                <p className='text-[1.7vw] footer-box-h-2'>Get the latest game announcement,updates on special events and offers,and much more from rockstar games.</p>
              </div>
            </div>
          </div>
)
}

export default Footer
