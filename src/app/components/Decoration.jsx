import { AiOutlineSearch } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
 
export default function Logo(){
    return(
     <div className="absolute z-30 flex justify-center items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 space-x-5">
        <img src='/logoLeft.png' width='43' height='86' layout="responsive"/>
        <img src='/logoRight.png' width='43' height='86' layout="responsive"/>
      </div>
    )
}
 

export function Search({ search, onChangeText, onPressEnter }) {
  return (
    <div className={`${visible ? 'block' : 'invisible'} w-[400px] h-[55px] bg-white rounded-3xl flex items-center ml-10 mt-10 absolute z-40 opacity-35`}>
      <AiOutlineSearch className="text-2xl ml-5" />
      <input className="p-3 text-xl border-none  focus:outline-none" placeholder="City name..."
      value ={search} 
      onChange={onChangeText} onKeyDown={onPressEnter}
       />
    </div>
  );
}

 
export function Icons({ iconColor = 'black' }) {
  const iconClass = iconColor === 'white' ? 'text-white' : 'text-black';

  return (
    <div className="absolute ml-[120px] mt-[770px] h-32 w-[360px] flex justify-around z-40 overflow-visible">
      <CiHome className={`text-xl ${iconClass} hover:text-black`} />
      <CiLocationOn className={`text-xl ${iconClass} hover:text-black`} />
      <CiHeart className={`text-xl ${iconClass} hover:text-black`} />
      <IoPersonOutline className={`text-xl ${iconClass} hover:text-black`} />
    </div>
  );
}

  

