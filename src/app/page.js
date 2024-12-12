import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-[100] bg-stone-50 flrx flex-col-reverse items-center justify-center pb-32">
        {/* <Card value="day" /> */}
        {/* <SearchInput /> */}
      </div>
      <input className="relative w-[50] h-screen bg-[#0F141E] flex-col-reverse items-center pb-32" />
      {/* <Card value="night" /> */}
      {/*  White circle */}
      <div className="w-[160px] h-[160px] rounded-full bg-stone-50 absolute -left-[80px] top-[420px]"></div>
      {/* top corner */}
      <div className="w-[100px] h-[100px] absolute -left-0 top-[326px] rounded-[36px] bg-[#0F141E] z-10"></div>
      <div className="w-[40px] h-[60px] bg-stone-50 absolute -left-3 top-[380px]"></div>
      bottom corner
      <div className="w-[100px] h-[100px] absolute -left-0 top-[574px] rounded-[36px] bg-[#0F141E] z-10"></div>
      <div className="w-[40px] h-[60px] bg-stone-50 absolute -left-3 top-[500px]"></div>
      {/* circles */}
      <div className="w-[600px h-[600px] absolute border rounded-full -left-[300px] top-[200px]"></div>
      <div className="w-[800px h-[800px] absolute border rounded-full -left-[400px] top-[100px]"></div>
      <div>hi</div>
    </div>
  );
}
