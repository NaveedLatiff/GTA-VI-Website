import React, { useState, useRef, useEffect } from 'react'
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
      x: `${moveX}%`,
      overwrite: false
    })
  }

  function showSideBar(e) {
    e.stopPropagation()
    document.querySelector(".sidebar").classList.remove("hidden")
  }

  useEffect(() => {
    function hideSideBar(e) {
      const sidebar = document.querySelector(".sidebar")
      if (sidebar && sidebar.contains(e.target)) {
        return
      }
      if (!sidebar.classList.contains("hidden")) {
        sidebar.classList.add("hidden")
      }
    }
    document.body.addEventListener("click", hideSideBar)
    return () => {
      document.body.removeEventListener("click", hideSideBar)
    }
  }, [])

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
          <nav className='navbar w-full absolute z-10 text-white text-4xl font-semibold flex justify-end items-center top-[20px] '
            style={{ padding: "0 20px" }}
          >
            <div onClick={showSideBar} className='flex flex-col gap-[5px] cursor-pointer '>
              <span className='inline-block h-[3px] w-[30px] bg-white'></span>
              <span className='inline-block h-[3px] w-[22px] bg-white'></span>
              <span className='inline-block h-[3px] w-[12px] bg-white'></span>
            </div>
            <div
              className="hidden sidebar  h-[200px] w-[200px] bg-black text-white backdrop-blur-md cursor-pointer rounded-2xl absolute right-[20px] top-[10px] shadow-lg border border-white/10 overflow-hidden"
              style={{ padding: "10px", margin: "5px" }}
            >
              <p
                className="section border-b border-b-gray-500/50 h-[33%] text-lg flex items-center  hover:bg-white/10 transition-colors duration-300"
                style={{ paddingLeft: "10px", margin: "5px 0" }}>
                Home
              </p>
              <p
                className="section border-b border-b-gray-500/50 h-[33%] text-lg flex items-center  hover:bg-white/10 transition-colors duration-300"
                style={{ paddingLeft: "10px", margin: "5px 0" }}>
                About
              </p>
              <p
                className="section h-[33%] text-lg flex items-center  hover:bg-white/10 transition-colors duration-300"
                style={{ paddingLeft: "10px", margin: "5px 0" }}>
                Footer
              </p>
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
              className="girl absolute h-full lg:scale-[1.7] top-[40%] left-[50%] -translate-x-[50%]
             md:scale-[1.4] scale-[1.2]
              "
              src="/girlbg.png"
              alt="girl"
            />
          </div>
          <div className='about h-full bg-black relative z-50 flex '>
            <div className='h-full w-[50%]  relative '>
              <img
                className='obj-img-1 object-contain h-[50%] w-[45%] absolute top-[0%] left-[3%]'
                src="./about.webp"
                alt="about"
              />
              <img
                className='obj-img-2 object-contain h-[50%] w-[35%] absolute top-[-1%] right-[10%] '
                src="./about2.webp"
                alt="about"
              />
              <img
                className='obj-img-2 object-contain h-[50%] w-[35%] absolute top-[30%] left-[34%] '
                src="./about3.webp"
                alt="about"
              />
              <img
                className='obj-img-2 object-contain h-[50%] w-[35%] absolute top-[56%] left-[3%] '
                src="./about4.webp"
                alt="about"
              />
              <img
                className='obj-img-3 object-contain h-[50%] w-[45%] absolute top-[56%] right-[10%] '
                src="./about5.webp"
                alt="about"
              />
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center items-center text-white ' style={{ padding: "0 20px" }}>
              <h1 className='about-main-heading-1 text-5xl font-bold '>GTA VI</h1>
              <h2 className='about-main-heading-2 text-2xl mb-4 text-orange-300'>Return to Vice City</h2>
              <p className='text-[2vw] text-center px-8 '>
                The most anticipated game of the decade returns to Vice City with
                revolutionary graphics, dual protagonists, and next-generation gameplay.
              </p>
              <p className='text-[1.5vw] text-center px-8  text-gray-300'>
                Experience unprecedented detail with advanced AI systems, dynamic weather,
                ray tracing technology, and immersive storytelling that pushes the
                boundaries of open-world gaming.
              </p>
              <div className='flex gap-4 ' style={{ marginTop: "10px" }}>
                <button className='about-btn text-[1.9vw] bg-red-600 rounded'>Action</button>
                <button className='about-btn text-[1.9vw] bg-blue-600 rounded'>Adventure</button>
                <button className='about-btn text-[1.9vw] bg-green-600 rounded'>Open World</button>
              </div>
              <p style={{ marginTop: "10px" }} className='text-[1.5vw] text-yellow-300'>Coming Soon - Next Gen Consoles Only</p>
            </div>
          </div>
          <div className='h-[10px] flex justify-center items-center bg-black' style={{ marginTop: "20px" }}>
            <span className='inline-block h-[1%] w-[90%] bg-gray-500'></span>
          </div>
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
            <div className='footer-box h-[20%] w-[90%] border-2 border-gray-600 rounded-4xl flex  '>
              <div className='h-full w-[50%]  flex justify-center items-center gap-2'>
                <img
                  className='h-[25%] w-[6%] object-contain '
                  src='./rockstar.jpeg'
                  alt='rockstar'
                />
                <h1 className='text-[2vw] footer-box-h-1'>GET ROCKSTAR PROPOGANDA</h1>
              </div>
              <div style={{ padding: "0 5px" }} className=' h-full w-[50%] flex justify-center items-center'>
                <p className='text-[1.7vw] footer-box-h-2'>Get the latest game announcement,updates on special events and offers,and much more from rockstar games.</p>
              </div>
            </div>
          </div>
        </div>

      )}
    </>
  )
}

export default App
