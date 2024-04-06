import React from "react";
import Image from "next/image";
import bgpic from "./bgg.png"
import img1 from "./1.png"
import img2 from "./2.webp"
import img3 from "./3.webp"
import img4 from "./4.webp"






const main = () => {
 
  return (
   
    <div className="boddy  ">
    <div className=" bg-black flex pb-10 mb-6 max-md:pb-0">

{/* <div className="  backdrop-opacity-90 blur-sm"> <Image src={bgpic} height={1000} placeholder="blur"  quality={100} sizes="100vw" style={{ objectFit: 'cover', }}
  alt="Picture of the author" /></div> */}
{/* <div className="absolute left-0  ">
  <p className="text-gray-200 italic roboto-bold text-4xl mt-10 drop-shadow-2xl"> */}

    {/* Effortless Creation. <br />
  Maximum Impact. <br />
  The Future of Influence is Virin. */}
  {/* </p> </div> */}

  <div className=" mt-4 md:mt-20 md:ml-6 flex flex-col robot ">
  


    <h2 className="mb-4  max-md:mt-6 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-white... rounded-md roboto-bold text-4xl max-md:text-base max-md:text-balance  p-4 ">Create your own Influencer : Stop wasting time on <br /> content creation!</h2>
    <h2 className="mb-6 mt-4 text-yellow-400 text-3xl max-md:text-xl max-md:text-balance roboto-medium">Join the Virin waitlist to unlock endless possibilities !</h2>

    
    <p className=" text-white text-xl max-md:text-balance max-md:text-base roboto-lights">Virin's AI effortlessly generates images and
      videos of your <br /> personalized virtual influencer,perfectly
      on-brand for your needs. <br />Effortlessly create engaging content ,
      secure lucrative brand deals, <br /> and watch your earnings soar.  </p>
      {/* &#128184; (money emo) */}
      <div className="flex gap-10 mt-4 flex-wrap"> 
      <div className="">
        <input type="Name" id="name" className="border border-black rounded-md text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
      </div>
      <div className="mb-5">
        <input type="Email" id="Email" className="border border-black rounded-md text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500   p-2.5  w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email " required />
      </div>
   
      <div>
     <button type="button" className="roboto-thin bg-gradient-to-r from-pink-400 to-white... hover:text-black hover:text-lg text-white border-2 border-white rounded-full mb-4  px-6 py-2">Submit</button>
     </div>
    </div>
    
  </div>
  <div className="mt-24 ml-12 max-md:hidden  ">
   
    

  <Image className="rounded-md" src={img3} height={550} width={550} alt="ai screen" />
 

   
  </div>
  </div>
  



<div className=" mb-6 md:flex  justify-center items-center gap-10 max-md:p-4 md:p-20 bg-gradient-to-r from-purple-400 via-pink-500 to-white... rounded-md">
<Image className=" rounded-md" src={bgpic} height={550} width={550} alt="ai screen" />

<ul className="text-white">
  <li className=" text-5xl pb-4 max-md:pt-4">Chat with Your <br /> Influencer</li>
  <li className="text-lg">Interact with your AI influencer in real-time through chat. <br /> Build a genuine connection with your audience and <br /> enhance your brand's engagement.</li>
</ul>

</div>




<div className=" mb-6 md:flex justify-center items-center gap-10 p-10 bg-black ">
<ul className="text-white">
  <li className=" text-5xl pb-4">Video Creation with<br /> AI  Influencer</li>
  <li className="text-lg max-md:pb-6">Easily create high-quality videos featuring your AI <br /> influencer to promote your products or services. <br /> Virin makes content creation effortless and effective.</li>
</ul>
<Image className="rounded-md" src={img2} height={400} width={400} alt="ai screen" />



</div>
<div className="mb-8  md:flex justify-center items-center gap-10 max-md:p-4 md:p-16  bg-gradient-to-r from-purple-400  via-pink-500 to-white... rounded-md">
<Image className="rounded-md" src={img1} height={500} width={500} alt="ai screen" />

<ul  className="text-white">
  <li className=" text-5xl pb-4 max-md:pt-4">Best in Class AI  <br />Influencer Generator</li>
  <li className="text-lg">Virin offers the most advanced AI technology to create <br /> realistic and engaging influencers for your brand. <br /> Say goodbye to traditional influencer marketing.</li>
</ul>

</div>


<div className=" md:flex justify-center items-center gap-10 max-md:p-2 md:p-16 bg-black  ">
<ul className="text-white">
  <li className=" text-5xl pb-4">Talking Avatar of your <br /> model</li>
  <li className="text-lg max-md:pb-6">Easily create high-quality talking videos with custom <br /> designed voices and facial expressions.</li>
</ul>
<Image className="rounded-md" src={img4} height={400} width={400} alt="ai screen" />



</div>

   


  </div>

  )
}
export default main

