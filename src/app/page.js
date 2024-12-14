import { SearchInput } from "./components/SearchInput";
import WeatherCard from "./components/WeatherCard";
import Circle from "./components/circles";

// const = "15ce7f6cb50a4224b3672555241312";

export default function Home() {
  // const [search, setSearch] = useState("");
  // const [city, setCity] = useState('');

  const onChangeText = (event) => {
    setSearch(event.target.value);
  };

  // console.log(search);

  return (
    <div className="w-full h-screen flex ">
      <div className="w-[50%] h-screen bg-stone-50 flex flex--col-reverse items-center justify-between pb-32">
        <Card value="day" temperature={12} condition={"Sunny"} />
        {/* <SearchInput search={search} onChangeText={onChangeText} /> */}
      </div>
      <div className="w-full h-full flex relative">
        <div className="w-[50%] h-full  bg-[#F3F4F6] relative">
          <div className="w-[50%] h-screen bg-stone-50 flex flex--col-reverse items-center pb-32">
            <Card value="night" temperature={17} />
          </div>
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
const Card = ({ value, temperature, condition }) => {
  const nightCardColors =
    "bg-[#111827BF] bg-gradient-to-b from-[#111827] to-[#1F2937] text-white shadow-[#111827]";
  const colors = value === "night" ? nightCardColors : "bg-[#F9FAFB]";
  return (
    <div className="{'w-[414px] h-[600px] rounded-2xl drop-shadow shadow-[#fff] z-20 ${colors}"></div>
  );
};
