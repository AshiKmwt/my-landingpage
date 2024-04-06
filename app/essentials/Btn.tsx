'use client'
import React from 'react'


const btn = () => {
    const isBrowser = () => typeof window !== 'undefined'; 

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    <div className="h-44  flex justify-center items-center bg-black">
<button className=" roboto-light bg-blue-500 hover:bg-purple-600 text-white  px-16 py-4  border border-black rounded-md "onClick={scrollToTop} >
 Join Waitlist
</button>
</div>
  )
}

export default btn
