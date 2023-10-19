import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import AOS from "aos";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsMeta, BsLinkedin } from "react-icons/bs";
import ashrafimg from "../../../src/components/images/Ashrafali.png";
import slack from "../../../src/components/images/slack.png";
export default function Home() {
  AOS.init();
  return (
    <div>
      <div className="flex flex-wrap p-5 pt-20 bg-slate-800 text-gray-600 items-center justify-evenly">
        {/* Intro Container */}
        <div className="flex pb-[70px] flex-col gap-8">
          <h1 className="text-6xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            <span className="lg:text-[60px]  tracking-tight text-gray-400 text-[35px]">
              I'm
            </span>
          </h1>
          <span className="lg:text-[80px]  text-6xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            Ashraf ali
          </span>
          <hr className="h-1 bg-orange-600 w-[300px]"></hr>
          <p className="w-80 text-[22px] text-gray-400">
            A freelancer who provides services for digital programming and
            design content need,for all businesses with more than 10 years of
            experiences
          </p>
        </div>
        {/* Image Container */}
        <div className=" bg-gray-700  flex justify-center items-center lg:w-[570px] lg:h-[570px] w-[400px] h-[400px] rounded-full ">
          <img
            src={ashrafimg}
            alt=""
            className="lg:h-[550px] lg:w-[410px] h-[370px] w-[240px]  "
          />
        </div>

        {/* Social Links Container */}
        <div className="w-[250px] pb-56 flex flex-col gap-3 ">
          <h2 className="text-gray-200 text-[25px] font-bold">Services</h2>
          <p className="text-gray-400 text-[18px]">
            Let's build quality products in programming and design with my
            Services
          </p>
          <Link className="text-yellow-400 font-bold text-[17px]">
            Show more...
          </Link>

          <div className="flex flex-wrap justify-between w-[200px]">
            <div className="w-10 h-10 text-[20px] shadow-2xl hover:shadow-white hover:bg-gray-900 hover:text-white shadow-  text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500">
              <FaFacebookF></FaFacebookF>
            </div>
            <div className="w-10 h-10 text-[20px] shadow-2xl hover:shadow-white hover:bg-gray-900 hover:text-white shadow-  text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500">
              <FaTwitter></FaTwitter>
            </div>
            <div className="w-10 h-10 text-[20px] shadow-2xl hover:shadow-white  hover:bg-gray-900 hover:text-white shadow- text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500">
              <FaInstagram></FaInstagram>
            </div>
            <div className="w-10 h-10 text-[20px] shadow-2xl hover:shadow-white  hover:bg-gray-900 hover:text-white shadow- text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500">
              <FaPinterestP></FaPinterestP>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Links Container */}
      <div className="flex justify-center z-40  relative">
        <div className="flex justify-evenly flex-wrap gap-4 items-center bg-gray-600 w-[900px] z-50 h-[150px] -mt-10  absolute">
          <div className="w-[170px] h-[75px] text-[35px] font-bold text-blue-600 flex justify-center gap-2 items-center  bg-gray-800 hover:bg-gray-900 shadow-2xl hover:shadow-white">
            <BsMeta></BsMeta>
            <span className="text-white text-[27px]">Meta</span>
          </div>
          <div className="w-[170px] h-[75px] text-[32px] font-bold text-orange-400 flex justify-center items-center bg-gray-800 hover:bg-gray-900 shadow-2xl hover:shadow-white">
            <span className="text-blue-600">G</span>
            <span className="text-red-600">o</span>
            <span className="text-yellow-600">o</span>
            <span className="text-blue-600">g</span>
            <span className="text-green-600">l</span>
            <span className="text-red-600">e</span>
          </div>
          <div className="w-[170px] h-[75px] text-[28px] font-bold text-blue-600 flex justify-center gap-2 items-center bg-gray-800 hover:bg-gray-900 shadow-2xl hover:shadow-white">
            <span className="text-white">Linked</span>
            <BsLinkedin></BsLinkedin>
          </div>
          <div className="w-[170px] h-[75px] text-[30px] font-bold text-orange-400 flex justify-center gap-2 items-center bg-gray-800 hover:bg-gray-900 shadow-2xl hover:shadow-white">
            <img className="w-[32px] h-[32px]" src={slack} />
            <span className="text-white">slack</span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full flex flex-wrap justify-between h-screen pt-40 p-14 z-20 bg-gray-900 absolute">
        {/* Client Review */}
        <div className="flex flex-col gap-14">
          <h1 className="text-white text-[40px] w-[350px] font-bold">
            What Can I Do For Your Needs
          </h1>
          <p className="text-gray-400 text-[24px] w-[400px]">
            It is easier to entrust the work to the experts because they are
            able to provide the best result with reliable quality
          </p>

          {/* Rating Section */}
          <div className="flex flex-wrap w-[410px] gap-14">
            <div className="w-[170px] h-[50px] flex flex-col gap-4">
              <h2 className="text-yellow-300 font-bold text-[30px]">250+</h2>
              <p className="text-gray-400 text-[19px]">Projects Completed</p>
            </div>
            <div className="w-[175px] h-[50px] flex flex-col gap-4">
              <h2 className="text-yellow-300 font-bold text-[30px]">100+</h2>
              <p className="text-gray-400 text-[19px]">Community Network</p>
            </div>
            <div className="w-[170px] h-[50px] flex flex-col gap-4">
              <h2 className="text-yellow-300 font-bold text-[30px]">30+</h2>
              <p className="text-gray-400 text-[19px]">Contact Remote</p>
            </div>
            <div className="w-[170px] h-[50px] flex flex-col gap-4">
              <h2 className="text-yellow-300 font-bold text-[30px]">10+</h2>
              <p className="text-gray-400 text-[19px]">Year Experience</p>
            </div>
          </div>
        </div>

        {/* Projects Container */}
        <div className="w-[600px] flex flex-col gap-8">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-between items-center gap-8">
              <img
                src="https://www.user.com.sg/wp-content/uploads/2021/05/Minimalist-Design-Maximum-Experience-A-Trending-UX-Challenge.jpg"
                className="w-[280px] h-[180px]"
              />
              <div className="flex flex-col">
                <p className="text-white font-bold text-[20px] ">UI/UX</p>
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
            <div className="flex justify-between items-center gap-8">
              <img
                src="https://www.aceinfoway.com/blog/wp-content/uploads/2020/07/front-end-developer.jpg"
                className="w-[280px] h-[180px]"
              />
              <div className="flex flex-col">
                <p className="text-white font-bold text-[20px] ">
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
            <div className="flex justify-between items-center gap-8">
              <img
                src="https://assets.skyfilabs.com/images/blog/how-to-develop-mobile-application.webp"
                className="w-[280px] h-[180px]"
              />
              <div className="flex flex-col">
                <p className="text-white font-bold text-[20px] ">
                  Mobile App Develop
                </p>
                <p className="text-gray-400 font-semibold ">217 Projects</p>
              </div>
            </div>
            <a href="#">
              <FaArrowRightLong className="text-yellow-400 text-[25px]"></FaArrowRightLong>
            </a>
          </div>
          <hr className="text-white" />
        </div>

        {/* Details Section */}
        <div data-aos="fade-up" className="flex  flex-wrap gap-10 items-center">
          <div className="w-[300px] gap-4 p-10 h-[500] bg-gray-700 flex flex-col">
            <div className="w-[100px] flex justify-center items-center h-[100px] bg-gray-900 rounded-full">
              <img
                src="https://www.user.com.sg/wp-content/uploads/2021/05/Minimalist-Design-Maximum-Experience-A-Trending-UX-Challenge.jpg"
                className="w-[90px] h-[60px] rounded-full"
              />
            </div>
            <h2 className="text-white font-semibold text-[20px]">
              UI/UX Design
            </h2>
            <p className="text-gray-400 text-[16px]">
              Create a beautiful and usefull ui display for ease of use of the
              application for users
            </p>
            <a href="#" className="text-yellow-400 font-semibold">
              See Details...
            </a>
          </div>
          <div className="w-[300px] p-10 gap-4 h-[500] bg-gray-700 flex flex-col">
            <div className="w-[100px] flex justify-center items-center h-[100px] bg-gray-900 rounded-full">
              <img
                src="https://www.aceinfoway.com/blog/wp-content/uploads/2020/07/front-end-developer.jpg"
                className="w-[90px] h-[60px] rounded-full"
              />
            </div>
            <h2 className="text-white font-semibold text-[20px]">
              Web Programming
            </h2>
            <p className="text-gray-400 text-[16px]">
              Build a quality website with the best technology and optimization
              on search engine
            </p>
            <a href="#" className="text-yellow-400 font-semibold">
              See Details...
            </a>
          </div>
          <div className=" w-[300px] p-10 gap-4  h-[500] bg-gray-700 flex flex-col">
            <div className="w-[100px] flex justify-center items-center h-[100px] bg-gray-900 rounded-full">
              <img
                src="https://assets.skyfilabs.com/images/blog/how-to-develop-mobile-application.webp"
                className="w-[90px] h-[60px] rounded-full"
              />
            </div>
            <h2 className="text-white font-semibold text-[20px]">
              Mobile Development
            </h2>
            <p className="text-gray-400 text-[16px]">
              Create an app from your own business for more professional
              business performanc
            </p>
            <a href="#" className="text-yellow-400 font-semibold">
              See Details...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
