import Image from "next/image";
import { SiWebmoney } from "react-icons/si";
import { FaUserTie } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="bg-slate-800 py-12 p-5 lg:px-8">
      <div className="flex items-center pb-10 gap-2">
        <span className="bg-gray-500 h-1 w-full"></span>
        <h2 className="text-gray-500 font-semibold text-2xl text-nowrap">
          About me
        </h2>
        <span className="bg-gray-500 h-1 w-full"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-20">
        <div className="bg-gray-600 flex justify-center items-center rounded-full w-11/12 h-96">
          <Image
            src={"/myimg.png"}
            alt="myimg"
            width={800}
            height={800}
            className="w-80 h-80"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white ">
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
            <div className="p-2 bg-gray-500 rounded-lg flex flex-col gap-2 justify-center items-center">
              <SiWebmoney className="w-6 h-6 text-white" />
              <h2 className="text-white text-xl font-semibold">
                Complete Project
              </h2>
              <p className="text-3xl font-bold">10</p>
            </div>
            <div className="p-2 bg-gray-500 rounded-lg flex flex-col gap-2 justify-center items-center">
              <FaUserTie className="w-6 h-6 text-white" />
              <h2 className="text-white text-xl font-semibold">
                Remote Client
              </h2>
              <p className="text-3xl font-bold">30</p>
            </div>
            <div className="p-2 bg-gray-500 rounded-lg flex flex-col gap-2 justify-center items-center">
              <FaUserCheck className="w-6 h-6 text-white" />
              <h2 className="text-white text-xl font-semibold">
                Client Satisfied
              </h2>
              <p className="text-3xl font-bold">20</p>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <div className="flex justify-center">
          <span className="flex justify-center text-xl items-center border rounded-full text-white bg-gray-600  w-12 h-12">
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
          <div className="h-80 bg-gray-500 p-4">
            <h2 className="text-gray-200 text-2xl">BScs in Computer Science</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, qui!
            </p>
          </div>
          <div className="h-80 bg-gray-500 p-4">
            <h2 className="text-gray-200 text-2xl">BScs in Computer Science</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, qui!
            </p>
          </div>
          <div className="h-80 bg-gray-500 p-4">
            <h2 className="text-gray-200 text-2xl">BScs in Computer Science</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Expedita, qui!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
