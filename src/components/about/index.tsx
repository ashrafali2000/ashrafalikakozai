import Image from "next/image";
import { DiCodeigniter } from "react-icons/di";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter, FaUserTie
} from "react-icons/fa";
import { FaLaptopCode, FaUserCheck } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineWebhook } from "react-icons/md";
import { SiJirasoftware, SiWebmoney } from "react-icons/si";
export default function AboutSection() {
  return (
    <div className="bg-slate-800 py-2 md:py-12 p-5 lg:px-8">
      <div className="flex items-center pb-10 gap-2">
        <span className="bg-gray-500 h-1 w-full"></span>
        <h2 className="text-gray-500 font-semibold text-2xl text-nowrap">
          About me
        </h2>
        <span className="bg-gray-500 h-1 w-full"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-20">
        <div className="flex flex-col gap-8">
          <div className="bg-gray-600 flex justify-center items-center rounded-full w-11/12 md:h-96">
            <Image
              src={"/my5.png"}
              alt="myimg"
              width={800}
              height={800}
              className="w-80 h-80 md:h-[400px] md:w-[440px] lg:h-[500px]"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 xl:gap-6">
            <div className="w-10 h-10 md:w-20 md:h-20 text-[20px]  hover:bg-gray-900 hover:text-white shadow-  text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500 group relative transition duration-700 ease-in-out shadow-lg hover:shadow-white hover:animate-bounce">
              <FaFacebookF className="md:w-10 md:h-10" />
            </div>
            <div className="w-10 h-10 md:w-20 md:h-20 text-[20px]  hover:bg-gray-900 hover:text-white shadow-  text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500 group relative transition duration-700 ease-in-out shadow-lg hover:shadow-white hover:animate-bounce">
              <FaTwitter className="md:w-10 md:h-10" />
            </div>
            <div className="w-10 h-10 md:w-20 md:h-20 text-[20px]   hover:bg-gray-900 hover:text-white shadow- text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500 group relative transition duration-700 ease-in-out shadow-lg hover:shadow-white hover:animate-bounce">
              <FaInstagram className="md:w-10 md:h-10" />
            </div>
            <div className="w-10 h-10 md:w-20 md:h-20 text-[20px]   hover:bg-gray-900 hover:text-white shadow- text-bold text-yellow-400 flex justify-center items-center rounded-full bg-gray-500 group relative transition duration-700 ease-in-out shadow-lg hover:shadow-white hover:animate-bounce">
              <FaPinterestP className="md:w-10 md:h-10" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white pt-5 md:top-0">
            MERN stack developer to solve the maintenance of websites
          </h2>
          <div className="flex flex-col gap-6 py-6">
            <p className="text-base text-gray-300 pt-2">
              Hi, I&#39;m Ashraf ali, a passionate MERN stack developer with 6
              months years of experience in building robust and scalable web
              applications.
            </p>
            <p className="text-base text-gray-300 pt-2">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="p-2 bg-gray-500 border border-teal-400 rounded-xl flex flex-col gap-2 justify-center items-center">
              <SiWebmoney className="w-6 h-6 text-white" />
              <h2 className="text-white text-xl font-semibold">
                Complete Project
              </h2>
              <p className="text-3xl font-bold">10</p>
            </div>
            <div className="p-2 bg-gray-500 border border-teal-400 rounded-xl flex flex-col gap-2 justify-center items-center">
              <FaUserTie className="w-6 h-6 text-white" />
              <h2 className="text-white text-xl font-semibold">
                Remote Client
              </h2>
              <p className="text-3xl font-bold">30</p>
            </div>
            <div className="p-2 bg-gray-500 border border-teal-400 rounded-xl flex flex-col gap-2 justify-center items-center">
              <FaUserCheck className="w-6 h-6 text-white" />
              <h2 className="text-white text-xl font-semibold">
                Client Satisfied
              </h2>
              <p className="text-3xl font-bold">20</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col gap-10">
        {/* Education */}
        <div>
          <div className="flex justify-center">
            <span className="animate-bounce flex justify-center text-xl items-center border rounded-full text-white bg-gray-600  w-12 h-12">
              1
            </span>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <span className="bg-gray-500 h-1 w-full"></span>
            <div className="relative">
              <h2 className="text-white font-bold text-2xl text-nowrap border rounded-xl py-2 px-3">
                Education
              </h2>
            </div>
            <span className="bg-gray-500 h-1 w-full"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-500 p-4 border border-teal-400 rounded-xl">
              <div className="bg-gray-200 flex justify-center items-center w-16 h-16  rounded-full">
                <IoSchoolSharp className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-teal-400 text-lg lg:text-2xl font-semibold py-2">
                Bachelor&#39;s Degree in Computer Science & Engineering
              </h2>
              <p>Deenbandhu Chhotu Ram University Of Science And Technology</p>
              <p>Hons. - Blockchain</p>
              <p>CGPA - 8.7</p>
              <p>2019 - 2023</p>
            </div>
            <div className="bg-gray-500 p-4 border border-teal-400 rounded-xl">
              <div className="bg-gray-200 flex justify-center items-center w-16 h-16  rounded-full">
                <IoSchoolSharp className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-teal-400 text-lg lg:text-2xl font-semibold py-2">
                High School, Central Board of Secondary Education
              </h2>
              <p>Scored 96% in PCM (Non-Medical) with Informatics Practices</p>
              <p>2019</p>
            </div>
            <div className="bg-gray-500 p-4 border border-teal-400 rounded-xl">
              <div className="bg-gray-200 flex justify-center items-center w-16 h-16  rounded-full">
                <IoSchoolSharp className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-teal-400 text-lg lg:text-2xl font-semibold py-2">
                Secondary School, Central Board of Secondary Education
              </h2>
              <p>Scored 10 CGPA</p>
              <p>2017</p>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div>
          <div className="flex justify-center">
            <span className="animate-bounce flex justify-center text-xl items-center border rounded-full text-white bg-gray-600  w-12 h-12">
              2
            </span>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <span className="bg-gray-500 h-1 w-full"></span>
            <div className="relative">
              <h2 className="text-white font-bold text-2xl text-nowrap border rounded-xl py-2 px-3">
                Skills
              </h2>
            </div>
            <span className="bg-gray-500 h-1 w-full"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-500 p-4 border border-teal-400 rounded-xl">
              <div className="bg-gray-200 flex justify-center items-center w-16 h-16  rounded-full">
                <MdOutlineWebhook className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-teal-400 text-lg lg:text-2xl font-semibold py-2">
                Web Design
              </h2>
              <p>Deenbandhu Chhotu Ram University Of Science And Technology</p>
              <p>Hons. - Blockchain</p>
              <p>CGPA - 8.7</p>
            </div>
            <div className="bg-gray-500 p-4 border border-teal-400 rounded-xl">
              <div className="bg-gray-200 flex justify-center items-center w-16 h-16  rounded-full">
                <MdOutlineWebhook className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-teal-400 text-lg lg:text-2xl font-semibold py-2">
                Web Development
              </h2>
              <p>Scored 96% in PCM (Non-Medical) with Informatics Practices</p>
              <p>2019</p>
            </div>
            <div className="bg-gray-500 p-4 border border-teal-400 rounded-xl">
              <div className="bg-gray-200 flex justify-center items-center w-16 h-16  rounded-full">
                <MdOutlineWebhook className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-teal-400 text-lg lg:text-2xl font-semibold py-2">
                App Development
              </h2>
              <p>Scored 10 CGPA</p>
              <p>2017</p>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div>
          <div className="flex justify-center">
            <span className="animate-bounce flex justify-center text-xl items-center border rounded-full text-white bg-gray-600  w-12 h-12">
              3
            </span>
          </div>
          <div className="flex items-center pb-10 gap-2">
            <span className="bg-gray-500 h-1 w-full"></span>
            <div className="relative">
              <h2 className="text-white font-bold text-2xl text-nowrap border rounded-xl py-2 px-3">
                Experience
              </h2>
            </div>
            <span className="bg-gray-500 h-1 w-full"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-500 p-4 border border-teal-400 rounded-xl">
              <div className="bg-gray-200 flex justify-center items-center w-16 h-16  rounded-full">
                <SiJirasoftware className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-teal-400 text-lg lg:text-2xl font-semibold py-2">
                Software Development Engineer (SDE)
              </h2>
              <p>
                Began as an intern, worked on Rails project similar to Medium,
                moved to client project shortly due to my project work. Working
                as a Ruby on Rails consultant with a US Healthcare client and
                working in the billing team after shield team. I’ve effectively
                handled numerous release tickets and improvement stories,
                consistently delivering high-quality work and garnering praise
                from colleagues, managers, and team leads for my efficiency,
                collaboration, and attention to detail.
              </p>
              <p>February 2023 - Present</p>
            </div>
            <div className="bg-gray-500 p-4 border border-teal-400 rounded-xl">
              <div className="bg-gray-200 flex justify-center items-center w-16 h-16  rounded-full">
                <DiCodeigniter className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-teal-400 text-lg lg:text-2xl font-semibold py-2">
                Full Stack MERN Developer
              </h2>
              <p>
                SWorked on their ERP system and implemented 3 major statistical
                dashboards for admin, sales and purchase. Implemented charts
                using apexcharts and other profile related tables and components
                along with other assigned work. Documented the project about
                setup and use, frontend and backend files containing folder
                structure and API guides.
              </p>
              <p>August 2022 - October 2022 </p>
            </div>
            <div className="bg-gray-500 p-4 border border-teal-400 rounded-xl">
              <div className="bg-gray-200 flex justify-center items-center w-16 h-16  rounded-full">
                <FaLaptopCode className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-teal-400 text-lg lg:text-2xl font-semibold py-2">
                Web Development
              </h2>
              <p>
                I designed and developed a website for Virat Packaging, a
                Printing and Packaging company. I created UI design in AdobeXD
                and received feedback regarding it, then I developed the website
                using React.js.
              </p>
              <p>June 2022 - August 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
