import WeatherCard from "./components/WeatherCard";
import Circle from "./components/circles";

// const = "15ce7f6cb50a4224b3672555241312";
export default function Home() {
  return (
    <div className="w-full h-screen flex ">
      <div className="w-full h-full flex relative">
        <div className="w-1/2 h-full  bg-[#F3F4F6] relative">
          <input className="p-2" placeholder="Search" />
          <WeatherCard bgcolor="black" />
        </div>
        <Circle size={140} />
        <Circle size={340} />
        <Circle size={540} />
        <Circle size={940} />
        <Circle size={1340} />
      </div>
    </div>
  );
}
