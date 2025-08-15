import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const App = () => {
  const [showContent, setShowContent] = useState(false)
  const contentRef = useRef(null)

  useGSAP(() => {
    let t1 = gsap.timeline()
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
        <div ref={contentRef} onMouseMove={move}  className="h-screen relative bg-black overflow-hidden">
          <nav className='navbar w-full absolute z-10 text-white text-4xl font-semibold flex justify-end top-[20px] right-[20px]'>
          <div className='flex flex-col gap-[5px] cursor-pointer '>
            <span  className='inline-block h-[3px] w-[30px] bg-white'></span>
            <span className='inline-block h-[3px] w-[22px] bg-white'></span>
            <span className='inline-block h-[3px] w-[12px] bg-white'></span>
          </div>
          </nav>
          <div className="hero h-full w-full">
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
              className="girl absolute h-full scale-[1.3] top-[30%] left-[50%] -translate-x-[50%]"
              src="/girlbg.png"
              alt="girl"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default App
