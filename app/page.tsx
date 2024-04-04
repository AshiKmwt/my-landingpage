import React from "react";
import Image from "next/image";
import bgpic from "./bg.webp"
import img1 from "./1.png"
import img2 from "./2.webp"
import img3 from "./3.webp"
import img4 from "./4.webp"




const main = () => {
  return (
    <>
      <div className=" bg-purplee flex ">

        {/* <div className="  backdrop-opacity-90 blur-sm"> <Image src={bgpic} height={1000} placeholder="blur"  quality={100} sizes="100vw" style={{ objectFit: 'cover', }}
          alt="Picture of the author" /></div> */}
        {/* <div className="absolute left-0  ">
          <p className="text-gray-200 italic roboto-bold text-4xl mt-10 drop-shadow-2xl"> */}

            {/* Effortless Creation. <br />
          Maximum Impact. <br />
          The Future of Influence is Virin. */}
          {/* </p> </div> */}

          <div className=" mt-4 md:mt-20 md:ml-6 flex flex-col robot max-md:p-16">
          


            <h2 className="mb-4  text-white bg-fuchsia-700  roboto-bold text-4xl max-md:text-base max-md:text-balance  p-4 ">Create your own Influencer : Stop wasting time on <br /> content creation!</h2>
            <h2 className="mb-6 mt-4 text-yellow-400 text-3xl max-md:text-xl max-md:text-balance roboto-medium">Join the Virin waitlist to unlock endless possibilities</h2>

            
            <p className=" text-white text-xl max-md:text-balance max-md:text-base roboto-lights">Virin's AI effortlessly generates images and
              videos of your <br /> personalized virtual influencer,perfectly
              on-brand for your needs. <br />Effortlessly create engaging content ,
              secure lucrative brand deals, <br /> and watch your earnings soar.  </p>
              {/* &#128184; (money emo) */}
              <div className="flex gap-10 mt-4 max-md:flex-wrap"> 
              <div className="">
                <input type="Name" id="name" className="border border-black rounded-md text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
              </div>
              <div className="mb-5">
                <input type="Email" id="Email" className="border border-black rounded-md text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500   p-2.5  w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email " required />
              </div>
          
              {/* <button type="button" className="text-white  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm px-8 py-0 text-center me-2 mb-2">Dream big </button> */}
           
              <div>
             <button type="button" className=" bg-yellow-500 hover:bg-yellow-300 text-black roboto-bold border-2  border-yellow-300 rounded-md mb-4  px-6 py-2"  >Submit</button>
             </div>
            </div>
            
          </div>
          <div className="mt-24 ml-12 max-md:hidden">
           
            
      
          <Image src={img3} height={600} width={600} alt="ai screen" />
         

           
          </div>
          
        </div>
     




      <div className=" md:flex justify-center items-center gap-6 p-16 bg-white">
        <Image src={img1} height={500} width={500} alt="ai screen" />

        <ul>
          <li className="text-black text-5xl pb-4">Best in Class AI  <br />Influencer Generator</li>
          <li className="text-lg">Virin offers the most advanced AI technology to create <br /> realistic and engaging influencers for your brand. <br /> Say goodbye to traditional influencer marketing.</li>
        </ul>

      </div>

      <div className=" md:flex justify-center items-center gap-10 p-10 bg-purplee  ">
        <ul className="text-white">
          <li className=" text-5xl pb-4">Video Creation with<br /> AI  Influencer</li>
          <li className="text-lg max-md:pb-6">Easily create high-quality videos featuring your AI <br /> influencer to promote your products or services. <br /> Virin makes content creation effortless and effective.</li>
        </ul>
        <Image src={img2} height={400} width={400} alt="ai screen" />



      </div>

      <div className=" md:flex justify-center items-center gap-6 p-16 bg-white">
        <Image src={img3} height={500} width={500} alt="ai screen" />

        <ul>
          <li className="text-black text-5xl pb-4">Chat with Your <br /> Influencer</li>
          <li className="text-lg">Interact with your AI influencer in real-time through chat. <br /> Build a genuine connection with your audience and <br /> enhance your brand's engagement.</li>
        </ul>

      </div>

      <div className=" md:flex justify-center items-center gap-10 p-16 bg-purplee   ">
        <ul className="text-white">
          <li className=" text-5xl pb-4">Talking Avatar of your <br /> model</li>
          <li className="text-lg max-md:pb-6">Easily create high-quality talking videos with custom <br /> designed voices and facial expressions.</li>
        </ul>
        <Image src={img4} height={400} width={400} alt="ai screen" />



      </div>
      <div className="h-44 flex justify-center items-center">
        <button className="  bg-blue-500 hover:bg-purple-600 text-white font-bold px-16 py-4  border border-black rounded-full ">
          Join Waitlist
        </button>
      </div>


    </>

  )
}
export default main

