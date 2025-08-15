import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const App = () => {
  const [showContent, setShowContent] = useState(false)
  const contentRef = useRef(null)

  useGSAP(() => {

    let t1 = gsap.timeline()
    document.querySelector("body").style.overflow = "hidden"
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
          <div className='about h-full bg-black relative z-50 flex '>
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
            <div className='h-full w-[50%] flex flex-col justify-center items-center text-white ' style={{ padding: "0 20px" }}>
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
              <div className='flex gap-4 ' style={{ marginTop: "10px" }}>
                <button style={{ padding: '4px 10px' }} className='bg-red-600 rounded'>Action</button>
                <button style={{ padding: '4px 10px' }} className='bg-blue-600 rounded'>Adventure</button>
                <button style={{ padding: '4px 10px' }} className='bg-green-600 rounded'>Open World</button>
              </div>
              <p style={{ marginTop: "10px" }} className='text-sm text-yellow-300'>Coming Soon - Next Gen Consoles Only</p>
            </div>
          </div>
          <div className='footer h-full bg-black text-white flex flex-col gap-3.5 justify-center items-center'>
            <div style={{ marginBottom: "30px" }} className=' h-[20%] w-[15%] '>
              <img

                className='h-full w-full object-cover '
                src="./grandTheftAutoLogo.png"
                alt="logo" />
            </div>
            <div style={{ marginBottom: "30px" }} className=' w-[42%] text-center '>
              <h1 className='text-6xl font-extrabold'>COMING SOON MAY 26 2026</h1>
            </div>
            <div className='h-[20%] w-[80%] border-2 border-gray-600 rounded-4xl flex  '>
              <div className='h-full w-[50%]  flex justify-center items-center gap-2'>
                <img 
                className='h-[25%] w-[6%] object-cover '
                src="data:image/jpeg;base64,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" alt="" />
                <h1 className='text-3xl'>GET ROCKSTAR PROPOGANDA</h1>
              </div>
              <div className='h-full w-[50%] flex justify-center items-center'>
                <p className='text-xl'>Get the latest game announcement,updates on special events and offers,and much more from rockstar games.</p>
              </div>
            </div>
          </div>
        </div>

      )}
    </>
  )
}

export default App
