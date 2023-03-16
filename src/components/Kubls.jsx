import React from "react";

const Kubls = () => {
  return (
    <div id="kubls" className="max-w-[1400px] m-auto md:pl-20 p-4 mb-10 ">
      <h1 className="text-4xl font-bold text-center ">Kubls</h1>
      <div className=" grid sm:grid-cols-3 gap-12 py-5">
        <img
          className="rounded-3xl shadow-xl"
          src="./kubls-1.jpg"
          alt="kubls-1"
        />
        <img
          className="rounded-3xl shadow-xl"
          src="./kubls-3.jpg"
          alt="kubls-3"
        />
        <img
          className="rounded-3xl shadow-xl"
          src="./kubls-2.jpg"
          alt="kubls-2"
        />
      </div>
      <p className="text-justify">
        Cik gan ideāli, ja var iekurināt "vannu" un iziet pasēdēt tajā! Ūdens
        nav hlorēts, bet gan turpat no zemes dzīlēm nācis (vai arī no ezera
        iekačāts). Tik samet malku, piešķil uguni un pēc brīža jau var sūkt
        aliņu un vannoties.
      </p>
    </div>
  );
};

export default Kubls;
