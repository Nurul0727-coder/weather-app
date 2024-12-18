
import { AiOutlineSearch } from "react-icons/ai"; 
import { CiHome, CiLocationOn, CiHeart } from "react-icons/ci"; 	 

  

export const Search = ({ visible = true, search, onChangeText, onPressEnter }) => {
  return (
    <div
      className={`${
        visible ? "block" : "invisible"
      } w-[400px] h-[55px] bg-white rounded-3xl flex items-center ml-10 mt-10 z-40 absolute`}
    >
      <AiOutlineSearch className="text-2xl ml-5" />
      <input
        className="p-3 text-xl text-black border-none focus:outline-none"
        placeholder="Search"
        value={search}
        onChange={onChangeText}
        onKeyDown={onPressEnter}
      />
    </div>
  );
};
	 

export function Icons({ iconColor = "black" }) {
  const iconClass = iconColor === "white" ? "text-white" : "text-black";

  return (
    <div className="absolute ml-[120px] my-[900px] h-32 w-[360px] flex justify-around z-40 overflow-visible">
      <CiHome className={`text-xl ${iconClass}`} />
      <CiLocationOn className={`text-xl ${iconClass}`} />
      <CiHeart className={`text-xl ${iconClass}`} />
    </div>
  );
}
 	 	 	 	 
export function YellowCircle() {
  return (
    <div className="absolute ml-[60px] mt-[140px]">
      <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 176 176">
        <circle cx="88" cy="88" r="88" fill="#FF8E27" />
        <circle cx="88" cy="88" r="88" fill="url(#paint0_radial)" fillOpacity="0.35" style={{ mixBlendMode: "overlay" }} />
      </svg>
    </div>
  );
}
export function BlueCircle() {	 	 	 
  return (	 	 	  	 	 
    <div className="absolute ml-[400px] mt-[880px]">	 	 	 
      <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">	 	 	 
        <circle cx="64" cy="64" r="64" fill="#6E72C9" />	 	 	 
        <circle cx="64" cy="64" r="64" fill="url(#paint0_radial_139_563)" fillOpacity="0.35" style={{ mixBlendMode: 'overlay' }} />			

      </svg>
    </div>
  );
}
