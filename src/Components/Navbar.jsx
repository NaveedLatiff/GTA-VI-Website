import React from 'react'
const Navbar = () => {
    return (
        <nav className='navbar w-full absolute z-10 text-white text-4xl font-semibold flex justify-end items-center top-[20px] '
            style={{ padding: "0 20px" }}
        >
            <div  className='flex flex-col gap-[5px] cursor-pointer '>
                <span className='inline-block h-[3px] w-[30px] bg-white'></span>
                <span className='inline-block h-[3px] w-[22px] bg-white'></span>
                <span className='inline-block h-[3px] w-[12px] bg-white'></span>
            </div>
            
        </nav>
    )
}

export default Navbar
