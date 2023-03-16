import React from "react";
import MyMap from "./MyMap";
import { MdOutlinePhoneInTalk, MdLocalPostOffice } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

const Kontakti = () => {
  return (
    <div id="kontakti" className=" m-auto md:pl-20 p-4">
      <div className="text-4xl font-bold text-center mb-5">Kontakti</div>

      <div className="flex justify-center items-center">
        <MdOutlinePhoneInTalk size={25} />
        <div className="p-1 text-justify">
          zvani <span className="font-bold">9094646</span> un pasūti līdakas
          biksītes uz tuvāko pakomātu
        </div>
      </div>

      <div className="flex justify-center items-center">
        <MdLocalPostOffice size={25} />
        <div className="p-1 text-justify">
          ieteikumiem, sadarbībai un sūdzībām{" "}
          <span className="font-bold">
            niknais-bebrs@juglasezeradome.gov.lv
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-3">
        <MyMap />
        <h1 className="w-[90%] mt-5 text-justify">
          Kartē attēlotas svarīgākās rajona vietas. Kā piemēram Bebru sala,
          Kraukļu sala, kur var <span className="italic">"ķert"</span> līdakas
          (bet nav jau zvanīts, ka sanāks noķert - lol), kur var apēst garšīgu
          šašliku vai fast-food maķīti un citi inčīgi apskates objekti
        </h1>
      </div>

      <div className="w-full flex justify-center mt-3 m-0 p-0 md:hidden">
        <a
          href="#main"
          className="rounded-full flex justify-center items-center w-40 shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineHome size={20} />
        </a>
      </div>
    </div>
  );
};

export default Kontakti;
