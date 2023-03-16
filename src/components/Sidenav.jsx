import { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { TbSpeedboat } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineBathtub, MdOutlineImportContacts } from "react-icons/md";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        size={30}
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden hover:scale-110 ease-in duration-200"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Sākums</span>
          </a>
          <a
            onClick={handleNav}
            href="#kubls"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdOutlineBathtub size={20} />
            <span className="pl-4">Kubls</span>
          </a>
          <a
            onClick={handleNav}
            href="#laiva"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <TbSpeedboat size={28} />
            <span className="pl-4">Laiva</span>
          </a>
          <a
            onClick={handleNav}
            href="#laikapstakli"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <TiWeatherPartlySunny size={28} />
            <span className="pl-4">Laikapstākļi</span>
          </a>
          <a
            onClick={handleNav}
            href="#kontakti"
            className="w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdOutlineImportContacts size={20} />
            <span className="pl-4">Kontakti</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#kubls"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <MdOutlineBathtub size={20} />
          </a>
          <a
            href="#laiva"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <TbSpeedboat size={20} />
          </a>
          <a
            href="#laikapstakli"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <TiWeatherPartlySunny size={20} />
          </a>
          <a
            href="#kontakti"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <MdOutlineImportContacts size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
