import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100] bg-stone-50">
        search
        <input className="p-2 bg-black rounded-2xl mt-6 ml-6" />
      </div>
      <div className="w-[50%] h-[100] bg-slate-400"></div>
    </div>
  );
}
