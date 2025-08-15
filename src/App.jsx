import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const App = () => {
  const [showContent, setShowContent] = useState(false)
  const contentRef = useRef(null)

  useGSAP(() => {

    let t1 = gsap.timeline()
    document.querySelector("body").style.overflow="hidden"
    t1.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onComplete: () => {
        setShowContent(true)
        gsap.fromTo(contentRef.current, { opacity: 0 }, { opacity: 1 })
      },
    })
  })

  function move(e) {
    const moveX = (e.clientX / window.innerWidth - 0.5) * 40;
    gsap.to(".sky", {
      x: `${moveX}%`
    })
    gsap.to(".girl", {
      x: `${moveX}%`
    })
  }

  return (
    <>
      {!showContent && (
        <div className="svg h-screen flex justify-center items-center bg-black">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="200"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    VI
                  </text>
                </g>
              </mask>
            </defs>
            <image
              href="/bg.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      )}

      {showContent && (
        <div ref={contentRef} className="h-screen relative overflow-x-hidden">
          <nav className='navbar w-full absolute z-10 text-white text-4xl font-semibold flex justify-end top-[20px] right-[20px]'>
            <div className='flex flex-col gap-[5px] cursor-pointer '>
              <span className='inline-block h-[3px] w-[30px] bg-white'></span>
              <span className='inline-block h-[3px] w-[22px] bg-white'></span>
              <span className='inline-block h-[3px] w-[12px] bg-white'></span>
            </div>
          </nav>
          <div onMouseMove={move} className=" hero h-full w-full">
            <img
              className="sky absolute h-full w-full object-cover scale-[2]"
              src="/sky.png"
              alt="sky"
            />
            <img
              className="absolute h-full w-full object-cover"
              src="/bg.png"
              alt="bg"
            />
            <img
              className="girl absolute h-full scale-[1.7] top-[40%] left-[50%] -translate-x-[50%]"
              src="/girlbg.png"
              alt="girl"
            />
          </div>
          <div className='h-full bg-black relative z-50 flex '>
            <div className='h-full w-[50%]  relative '>
              <img
                className='object-contain h-[50%] w-[45%] absolute top-[0%] left-[3%]'
                src="./about.webp"
                alt="about"
              />
              <img
                className='object-contain h-[50%] w-[30%] absolute top-[-1%] right-[10%] '
                src="./about2.webp"
                alt="about"
              />
              <img
                className='object-contain h-[50%] w-[35%] absolute top-[30%] left-[34%] '
                src="./about3.webp"
                alt="about"
              />
              <img
                className='object-contain h-[50%] w-[30%] absolute top-[56%] left-[3%] '
                src="./about4.webp"
                alt="about"
              />
              <img
                className='object-contain h-[50%] w-[40%] absolute top-[56%] right-[10%] '
                src="./about5.webp"
                alt="about"
              />
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center items-center text-white ' style={{padding:"0 20px"}}>
              <h1 className='text-5xl font-bold '>GTA VI</h1>
              <h2 className='text-2xl mb-4 text-orange-300'>Return to Vice City</h2>
              <p className='text-lg text-center px-8 '>
                The most anticipated game of the decade returns to Vice City with
                revolutionary graphics, dual protagonists, and next-generation gameplay.
              </p>
              <p className='text-md text-center px-8  text-gray-300'>
                Experience unprecedented detail with advanced AI systems, dynamic weather,
                ray tracing technology, and immersive storytelling that pushes the
                boundaries of open-world gaming.
              </p>
              <div className='flex gap-4 ' style={{marginTop:"10px"}}>
                <button style={{ padding: '4px 10px' }} className='bg-red-600 rounded'>Action</button>
                <button style={{ padding: '4px 10px' }} className='bg-blue-600 rounded'>Adventure</button>
                <button style={{ padding: '4px 10px' }} className='bg-green-600 rounded'>Open World</button>
              </div>
              <p style={{marginTop:"10px"}} className='text-sm text-yellow-300'>Coming Soon - Next Gen Consoles Only</p>
            </div>


          </div>
        </div>

      )}
    </>
  )
}

export default App
