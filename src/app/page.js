import Image from "next/image";
// import {GrSearch}from 'react-icon/gr';

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100] bg-stone-50">
        search
        <input className="p-2 bg-black rounded-2xl mt-6 ml-6" />
      </div>
      <div className="w-[50%] h-[100] bg-slate-400"></div>
      {/* <div className="w-100 h-200 bg-pink"></div> */}
    </div>
    
  );
}
