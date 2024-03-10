import Image from "next/image";

export default function ProjectSection() {
  const projectList = [
    {
      title: "Faizan Global Relief Foundation",
      desc: "This is my first project of frontend",
      img: "/fgrf.png",
    },
    {
      title: "Wopond",
      desc: "This is my second project fo frontend",
      img: "/wopond.png",
    },
  ];
  return (
    <div className="bg-slate-800 py-2 md:py-12 p-5 lg:px-8">
      {projectList.map((p, index) => (
        <div key={index} className="flex flex-col gap-4 bg-slate-400 p-5">
          <Image src={p.img} alt="projectImage" className="w-44 h-80" />
          <p>{p.title}</p>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
