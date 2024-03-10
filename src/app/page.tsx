import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsMeta } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 lg:gap-4 xl:gap-0 p-5 lg:px-8 bg-slate-800 text-gray-600 items-center">
        {/* Intro Container */}
        <div className="lg:col-span-2 flex pb-10 lg:pb-[70px] flex-col gap-6 xl:gap-8">
          <h1 className="text-6xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            <span className="lg:text-6xl xl:text-[60px]  tracking-tight text-gray-400 text-[35px]">
              I&#39;m
            </span>
          </h1>
          <span className="text-stroke-3 lg:text-7xl xl:text-[80px] text-white text-6xl font-bold tracking-tight sm:text-6xl">
            Ashraf ali
          </span>
          <hr className="h-1 bg-orange-600 w-[200px] lg:w-[300px]"></hr>
          <p className="w-72 xl:w-80 text-[22px] text-gray-400">
            A freelancer who provides services for digital programming and
            design content need,for all businesses with more than 10 years of
            experiences
          </p>
        </div>
        {/* Image Container */}
        <div className="xl:-ml-8 bg-gray-700 lg:col-span-3 xl:col-span-3 flex justify-center items-center h-72 md:h-96 w-full xl:w-full lg:h-[500px] xl:h-[600px] rounded-full ">
          <img
            src="myimg.png"
            alt=""
            className="lg:h-[400px] lg:w-[400px] xl:h-[450px] xl:w-[450px] md:h-[300px] md:w-[300px] w-[230px] h-[230px] "
          />
        </div>

        {/* Social Links Container */}
        <div className="pb-40 lg:pb-40 xl:pb-56 flex flex-col gap-3 ">
          <h2 className="text-gray-200 text-[25px] font-bold">Services</h2>
          <p className="text-gray-400 xl:text-[18px]">
            Let&#39;s build quality products in programming and design with my
            Services
          </p>
          <Link
            href={"/"}
            className="text-yellow-400 text-[17px] my-1 relative before:content-[''] before:absolute before:block before:w-24 before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400  font-medium"
          >
            Show more
          </Link>

          <div className="flex flex-wrap gap-4 xl:gap-2">
            <div className="w-10 h-10 text-[20px]  hover:bg-gray-900 hover:text-white shadow-  text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500 group relative transition duration-700 ease-in-out shadow-lg hover:shadow-white hover:animate-bounce">
              <FaFacebookF></FaFacebookF>
            </div>
            <div className="w-10 h-10 text-[20px]  hover:bg-gray-900 hover:text-white shadow-  text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500 group relative transition duration-700 ease-in-out shadow-lg hover:shadow-white hover:animate-bounce">
              <FaTwitter></FaTwitter>
            </div>
            <div className="w-10 h-10 text-[20px]   hover:bg-gray-900 hover:text-white shadow- text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500 group relative transition duration-700 ease-in-out shadow-lg hover:shadow-white hover:animate-bounce">
              <FaInstagram></FaInstagram>
            </div>
            <div className="w-10 h-10 text-[20px]   hover:bg-gray-900 hover:text-white shadow- text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500 group relative transition duration-700 ease-in-out shadow-lg hover:shadow-white hover:animate-bounce">
              <FaPinterestP></FaPinterestP>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links Container */}
      <div className="flex justify-center z-40 relative">
        <div className="grid grid-cols-1 h-[470px] w-[250px] md:h-[260px] lg:h-40 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center bg-gray-600 md:w-[650px] lg:w-[950px]  xl:w-[1200px] z-50 -mt-32 lg:-mt-16  absolute p-5 lg:px-8">
          <div className="w-[170px] h-[75px] text-[35px] font-bold text-blue-600 flex justify-center gap-2 items-center  bg-gray-800 hover:bg-gray-900 group relative transition duration-700 ease-in-out shadow-xl hover:shadow-white hover:animate-bounce">
            <BsMeta></BsMeta>
            <span className="text-white text-[27px]">Meta</span>
          </div>
          <div className="w-[170px] h-[75px] text-[32px] font-bold text-orange-400 flex justify-center items-center bg-gray-800 hover:bg-gray-900 group relative transition duration-700 ease-in-out shadow-xl hover:shadow-white hover:animate-bounce">
            <span className="text-blue-600">G</span>
            <span className="text-red-600">o</span>
            <span className="text-yellow-600">o</span>
            <span className="text-blue-600">g</span>
            <span className="text-green-600">l</span>
            <span className="text-red-600">e</span>
          </div>
          <div className="w-[170px] h-[75px] text-[28px] font-bold text-blue-600 flex justify-center gap-2 items-center bg-gray-800 hover:bg-gray-900 group relative transition duration-700 ease-in-out shadow-xl hover:shadow-white hover:animate-bounce">
            <span className="text-white">Linked</span>
            <BsLinkedin></BsLinkedin>
          </div>
          <div className="w-[170px] h-[75px] text-[30px] font-bold text-orange-400 flex justify-center gap-2 items-center bg-gray-800 hover:bg-gray-900 group relative transition duration-700 ease-in-out shadow-xl hover:shadow-white hover:animate-bounce">
            <img className="w-[32px] h-[32px]" src="/slack.png" />
            <span className="text-white">slack</span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 gap-16 lg:gap-6 pt-96 md:pt-44 lg:pt-40 px-5 py-10 md:p-14 z-20 bg-gray-900">
        {/* Client Review */}
        <div className="lg:col-span-1 flex flex-col md:gap-5 lg:gap-14">
          <h1 className="text-white text-2xl md:text-[40px] leading-tight xl:w-[350px] font-bold">
            What Can I Do For Your Needs
          </h1>
          <p className="text-gray-400 text-lg md:text-[24px] xl:w-[400px]">
            It is easier to entrust the work to the experts because they are
            able to provide the best result with reliable quality
          </p>

          {/* Rating Section */}
          <div className="grid grid-cols-2 md:grid-cols-2 xl:w-[410px] gap-5 pt-5 md:pt-0 lg:gap-14">
            <div className="xl:w-[220px] xl:h-[50px] flex flex-col gap-2 md:gap-4">
              <h2 className="text-yellow-300 font-bold text-[30px]">250+</h2>
              <p className="text-gray-400 xl:text-[19px]">Projects Completed</p>
            </div>
            <div className="xl:w-[225px] xl:h-[50px] flex flex-col gap-2 md:gap-4">
              <h2 className="text-yellow-300 font-bold text-[30px]">100+</h2>
              <p className="text-gray-400 xl:text-[19px]">Community Network</p>
            </div>
            <div className="xl:w-[220px] xl:h-[50px] flex flex-col gap-2 md:gap-4">
              <h2 className="text-yellow-300 font-bold text-[30px]">30+</h2>
              <p className="text-gray-400 xl:text-[19px]">Contact Remote</p>
            </div>
            <div className="xl:w-[220px] xl:h-[50px] flex flex-col gap-2 md:gap-4">
              <h2 className="text-yellow-300 font-bold text-[30px]">10+</h2>
              <p className="text-gray-400 xl:text-[19px]">Year Experience</p>
            </div>
          </div>
        </div>

        {/* Projects Container */}
        <div className="lg:col-span-2 xl:col-span-1 flex flex-col gap-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="md:flex md:justify-between md:items-center md:gap-4 lg:gap-8">
              <img
                src="/ui.jpg"
                className="w-[190px] h-[120px] md:w-[280px] md:h-[180px]"
              />
              <div className="flex flex-col">
                <p
                  className="text-white font-bold text-[20px] my-1 relative before:content-[''] before:absolute before:block before:w-16 before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400"
                >
                  UI/UX
                </p>
                <p className="text-gray-400 font-semibold  ">217 Projects</p>
              </div>
            </div>
            <a href="#">
              {" "}
              <FaArrowRightLong className="text-yellow-400 text-[25px]"></FaArrowRightLong>
            </a>
          </div>
          <hr className="text-white" />

          <div className="flex flex-wrap justify-between items-center">
            <div className="md:flex md:justify-between md:items-center md:gap-4 lg:gap-8">
              <img
                src="/frontend.jpg"
                className="w-[190px] h-[120px] md:w-[280px] md:h-[180px]"
              />
              <div className="flex flex-col">
                <p
                  className="text-white font-bold text-[20px] my-1 relative before:content-[''] before:absolute before:block before:w-44 before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400 "
                >
                  Front End Develop
                </p>
                <p className="text-gray-400 font-semibold   ">217 Projects</p>
              </div>
            </div>
            <a href="#">
              <FaArrowRightLong className="text-yellow-400 text-[25px]"></FaArrowRightLong>
            </a>
          </div>
          <hr className="text-white" />
          <div className="flex flex-wrap justify-between items-center">
            <div className="md:flex md:justify-between md:items-center md:gap-4 lg:gap-8">
              <img
                src="/mobileApp.webp"
                className="w-[190px] h-[120px] md:w-[280px] md:h-[180px]"
              />
              <div className="flex flex-col">
                <p
                  className="text-white font-bold text-[20px] my-1 relative before:content-[''] before:absolute before:block before:w-48 before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400"
                >
                  Mobile App Develop
                </p>
                <p className="text-gray-400 font-semibold ">217 Projects</p>
              </div>
            </div>
            <a href="#">
              <FaArrowRightLong className=" text-yellow-400 text-[25px]"></FaArrowRightLong>
            </a>
          </div>
          {/* <hr className="text-white" /> */}
        </div>
      </div>
      {/* Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center px-5 bg-black py-8">
        <div className="gap-4 p-10 h-[450px] lg:h-96  bg-gray-700 flex flex-col">
          <div className="group relative transition duration-700 ease-in-out shadow-xl hover:shadow-white w-[100px] p-2 flex justify-center items-center h-[100px] bg-gray-900 rounded-full">
            <img src="/ui.jpg" className="w-full h-full rounded-full" />
          </div>
          <h2 className="text-white font-semibold text-[20px]">UI/UX Design</h2>
          <p className="text-gray-400 text-[16px]">
            Create a beautiful and usefull ui display for ease of use of the
            application for users
          </p>
          <a
            href="#"
            className="w-24 text-yellow-400 my-1 relative before:content-[''] before:absolute before:block before:w-20 before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400  font-medium"
          >
            See Details
          </a>
        </div>
        <div className="p-10 gap-4 h-[450px] lg:h-96 bg-gray-700 flex flex-col">
          <div className="group relative transition duration-700 ease-in-out shadow-xl hover:shadow-white  w-[100px] p-2 flex justify-center items-center h-[100px] bg-gray-900 rounded-full">
            <img
              src="/frontend.jpg"
              className="relative w-full h-full rounded-full"
            />
          </div>
          <h2 className="text-white font-semibold text-[20px]">
            Web Programming
          </h2>
          <p className="text-gray-400 text-[16px]">
            Build a quality website with the best technology and optimization on
            search engine
          </p>
          <a
            href="#"
            className="w-24 text-yellow-400 my-1 relative before:content-[''] before:absolute before:block before:w-20 before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400  font-medium"
          >
            See Details
          </a>
        </div>
        <div className="p-10 gap-4 h-[450px] lg:h-96 bg-gray-700 flex flex-col">
          <div className="group relative transition duration-700 ease-in-out shadow-xl hover:shadow-white w-[100px] p-2 flex justify-center items-center h-[100px] bg-gray-900 rounded-full">
            <img src="/mobileApp.webp" className="w-full h-full rounded-full" />
          </div>
          <h2 className="text-white font-semibold text-[20px]">
            Mobile Development
          </h2>
          <p className="text-gray-400 text-[16px]">
            Create an app from your own business for more professional business
            performanc
          </p>
          <a
            href="#"
            className="w-24 text-yellow-400 my-1 relative before:content-[''] before:absolute before:block before:w-20 before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-sky-400
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 hover:text-sky-400  font-medium"
          >
            See Details
          </a>
        </div>
      </div>
    </div>
  );
}
