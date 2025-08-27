import React from 'react'

const About = () => {
  return (
   <>
   <div className='about h-full bg-black relative z-50 flex '>
            <div className='h-full w-[50%]  relative '>
              <img
                className='obj-img-1 object-contain h-[50%] w-[45%] absolute top-[0%] left-[3%]'
                src="./about.webp"
                alt="about"
                loading="lazy"
                decoding="async"
              />
              <img
                className='obj-img-2 object-contain h-[50%] w-[35%] absolute top-[-1%] right-[10%] '
                src="./about2.webp"
                alt="about"
                loading="lazy"
                decoding="async"
              />
              <img
                className='obj-img-2 object-contain h-[50%] w-[35%] absolute top-[30%] left-[34%] '
                src="./about3.webp"
                alt="about"
                loading="lazy"
                decoding="async"
              />
              <img
                className='obj-img-2 object-contain h-[50%] w-[35%] absolute top-[56%] left-[3%] '
                src="./about4.webp"
                alt="about"
                loading="lazy"
                decoding="async"
              />
              <img
                className='obj-img-3 object-contain h-[50%] w-[45%] absolute top-[56%] right-[10%] '
                src="./about5.webp"
                alt="about"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center items-center text-white ' style={{ padding: "0 20px" }}>
              <h1 className='about-main-heading-1 text-5xl font-bold '>GTA VI</h1>
              <h2 className='about-main-heading-2 text-2xl mb-4 text-orange-300'>Return to Vice City</h2>
              <p className='about-text-1 text-[2.2vw] text-center px-8 '>
                The most anticipated game of the decade returns to Vice City with
                revolutionary graphics, dual protagonists, and next-generation gameplay.
              </p>
              <p className='about-text-2 text-[1.9vw] text-center px-8  text-gray-300'>
                Experience unprecedented detail with advanced AI systems, dynamic weather,
                ray tracing technology, and immersive storytelling that pushes the
                boundaries of open-world gaming.
              </p>
              <div className='flex gap-4 ' style={{ marginTop: "10px" }}>
                <button className='about-btn text-[1.9vw] bg-red-600 rounded'>Action</button>
                <button className='about-btn text-[1.9vw] bg-blue-600 rounded'>Adventure</button>
                <button className='about-btn text-[1.9vw] bg-green-600 rounded'>Open World</button>
              </div>
              <p style={{ marginTop: "10px" }} className='about-text-3 text-[1.5vw] text-yellow-300'>Coming Soon - Next Gen Consoles Only</p>
            </div>
          </div>
          <div className='h-[10px] flex justify-center items-center bg-black' style={{ marginTop: "20px" }}>
            <span className='inline-block h-[1%] w-[90%] bg-gray-500'></span>
          </div>
   </>
  )
}

export default About