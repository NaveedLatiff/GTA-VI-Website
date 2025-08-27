import React from 'react'
import sky from "../assets/sky.webp"
import bg from "../assets/bg.webp"
import girl from "../assets/girlbg.webp"

const Hero = ({move}) => {
  return (
    <div onMouseMove={move} className=" hero h-full w-full">
      <img
        className="sky absolute h-full w-full object-cover scale-[2]"
        src={sky}
        alt="sky"
        loading="eager"
        decoding="async"
      />
      <img
        className="absolute h-full w-full object-cover"
        src={bg}
        alt="bg"
        loading="eager"
        decoding="async"
      />
      <img
        className="girl absolute h-full lg:scale-[1.7] top-[40%] left-[50%] -translate-x-[50%]
         md:scale-[1.4] scale-[1.2]
        "
        src={girl}
        alt="girl"
        loading="eager"
        decoding="async"
      />
    </div>
  )
}

export default Hero