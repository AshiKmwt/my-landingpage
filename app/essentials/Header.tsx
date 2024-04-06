import React from "react";
import Image from "next/image";
import logo from "./logo.png"


const Header = () => {
  


    return (
        <div className="flex justify-between bg-black px-6 h-20 max-md:h-14 md:border-2 md:border-b-0  border-purplebtn max-md:pt-6 ">
            <div className="flex justify-center items-center max-md:m-0  ">
                <Image className="pt-4 brightness-200" src={logo} height={100} width={100} alt="logo" />
                <h1 className="text-white max-md:text-left  roboto-thin text-5xl max-md:text-3xl font-thin py-4"> VIRIN </h1>
            </div >
           
            <div className=" max-md:hidden">
            <a href="mailto:vabg369@gmail.com"> <button className="bg-purplebtn hover:bg-gray-800 text-white roboto-thin mx-4 my-4  px-10 py-2  border border-black hover:border-white rounded-md  ">
                    CONTACT
                </button></a>
            </div>





        </div>
    )
}
export default Header







