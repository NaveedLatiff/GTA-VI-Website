import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import Loader from './Components/Loader'
import bg from './assets/bg.webp'

gsap.registerPlugin(useGSAP)

const imageUrls = [
  './src/assets/bg.webp',
  './src/assets/sky.webp', 
  './src/assets/girlbg.webp',
  './about.webp',
  './about2.webp',
  './about3.webp',
  './about4.webp',
  './about5.webp',
  './grandTheftAutoLogo.png',
  './rockstar.jpeg'
]

const useImagePreloader = (urls) => {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    let loadedCount = 0
    const total = urls.length
    
    urls.forEach(url => {
      const img = new Image()
      img.onload = img.onerror = () => {
        loadedCount++
        if (loadedCount === total) setLoaded(true)
      }
      img.src = url
    })
  }, [urls])
  
  return loaded
}

const App = () => {
  const [showContent, setShowContent] = useState(false)
  const contentRef = useRef(null)
  const imagesLoaded = useImagePreloader(imageUrls)

  useGSAP(() => {
    if (!imagesLoaded) return
    
    let t1 = gsap.timeline()
    document.querySelector("body").style.overflow = "hidden"
    t1.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 12,
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
  }, [imagesLoaded])

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

  if (!imagesLoaded) {
    return <Loader />
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
              href={bg}
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
          <Navbar />
          <Hero move={move} />
          <About />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App