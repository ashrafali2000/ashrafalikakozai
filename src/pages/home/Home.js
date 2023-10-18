import { Link } from "react-router-dom";
import {FaFacebookF,FaTwitter,FaInstagram,FaPinterestP} from "react-icons/fa"
import {BsMeta,BsLinkedin} from "react-icons/bs"
import ashrafimg from "../../../src/components/images/Ashrafali.png"
import slack from "../../../src/components/images/slack.png"
export default function Home() {
  return (
    <div >

    <div className="flex flex-wrap pt-20 bg-slate-800 text-gray-600 items-center justify-evenly">
{/* Intro Container */}
      <div className="flex pb-32 flex-col gap-10">
        <h1 className="text-6xl font-bold tracking-tight text-gray-200 sm:text-6xl">
           <span className="lg:text-[60px]  tracking-tight text-gray-400 text-[35px]">I'm</span><br /> Ashraf ali
          
        </h1>
        <hr className="h-1 bg-orange-600 w-[300px]"></hr>
        <p className="w-96 text-[22px] text-gray-500">
        A freelancer who provides services for digital programming and design content need,for all businesses with more than 10 years of experiences
        </p>
      
      </div>
{/* Image Container */}
      <div className=" bg-gray-700  flex justify-center items-center lg:w-[620px] lg:h-[620px] w-[400px] h-[400px] rounded-full ">
        <img 
          src={ashrafimg}
          alt=""
          className="lg:h-[600px] lg:w-[460px] h-[370px] w-[240px] "
        />
      </div>
{/* Social Links Container */}
      <div className="w-[260px] pb-56 flex flex-col gap-3">
<h2 className="text-gray-200 text-[25px] font-bold">Services</h2>
<p className="text-gray-400 text-[18px]">Let's build quality products in programming and design with my Services</p>
<Link className="text-yellow-400 font-bold text-[17px]">Show more...</Link>

<div className="flex flex-wrap justify-between w-[200px]">
  <div className="w-10 h-10 text-[20px] text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500">
<FaFacebookF></FaFacebookF>
  </div>
  <div className="w-10 h-10 text-[20px] text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500">
<FaTwitter></FaTwitter>
  </div>
  <div className="w-10 h-10 text-[20px] text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500">
<FaInstagram></FaInstagram>
  </div>
  <div className="w-10 h-10 text-[20px] text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500">
<FaPinterestP></FaPinterestP>
  </div>
</div>
      </div>

          </div>
{/* Social Media Links Container */}
<div className="flex justify-center ">
<div className="flex justify-evenly flex-wrap gap-4 items-center bg-gray-600 w-[900px] z-50 h-[150px] -mt-10 ">
  <div className="w-[170px] h-[75px] text-[35px] font-bold text-blue-600 flex justify-center gap-2 items-center  bg-gray-800 hover:bg-gray-900 shadow-2xl hover:shadow-white" ><BsMeta></BsMeta><span className="text-white text-[27px]">Meta</span></div>
  <div className="w-[170px] h-[75px] text-[32px] font-bold text-orange-400 flex justify-center items-center bg-gray-800 hover:bg-gray-900 shadow-2xl hover:shadow-white" ><span className="text-blue-600">G</span><span className="text-red-600">o</span><span className="text-yellow-600">o</span><span className="text-blue-600">g</span><span className="text-green-600">l</span><span className="text-red-600">e</span></div>
  <div className="w-[170px] h-[75px] text-[28px] font-bold text-blue-600 flex justify-center gap-2 items-center bg-gray-800 hover:bg-gray-900 shadow-2xl hover:shadow-white" ><span className="text-white">Linked</span><BsLinkedin></BsLinkedin></div>
  <div className="w-[170px] h-[75px] text-[30px] font-bold text-orange-400 flex justify-center gap-2 items-center bg-gray-800 hover:bg-gray-900 shadow-2xl hover:shadow-white" ><img className="w-[32px] h-[32px]" src={slack} /><span className="text-white">slack</span></div>
</div>

</div>
    </div>
  );
}
