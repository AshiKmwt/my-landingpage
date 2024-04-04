import React from "react";
import Image from "next/image";
import logo from "./logo.png"

const Header = () => {
  


    return (
        <div className="flex justify-between bg-gray-200 px-6 h-20 max-md:h-14 md:border-2  border-purplee">
            <div className="flex justify-center items-center max-md:m-0 ">
                <Image className="pt-4" src={logo} height={100} width={100} alt="logo" />
                <h1 className="text-black max-md:text-left  roboto-thin text-5xl max-md:text-3xl font-thin py-4"> VIRIN </h1>
            </div >
           
            <div className=" max-md:hidden">
                <button className="bg-fuchsia-800 hover:bg-purple-600 text-white font-bold  mx-4 my-4  px-10 py-2  border border-black rounded-full  ">
                    CONTACT
                </button>
            </div>





        </div>
    )
}
export default Header







