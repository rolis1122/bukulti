import React from "react";

const Laiva = () => {
  return (
    <div id="laiva" className="max-w-[1400px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center">Lodkas sadaļa</h1>
      <div className=" grid sm:grid-cols-2 gap-12 py-5">
        <img
          className="rounded-3xl shadow-xl"
          src="./laiva-1.jpg"
          alt="laiva-1"
        />
        <p>
          Laiva bija, ir un būs! Vēsturiski bijusi slavenā "mazda", ar kuru pa
          Juglas ezeru veikots, kad vēl bija liegums un nemaz tā nedrīkstēja
          darīt. Tad kādu laiku bija "melnā pērle". Laba laiva jau bij, tik
          dzenis iemetās motorā. Tad nāca "baltās pērles" laikmets un daudz,
          daudz čakars līdzi tai. Nu nekad nevarēja zināt, vai krastā sanāks
          atkuģot. Bet nu tfu, tfu, tfu un parasti jau viss bija labi. Protams,
          Gulbis arī turpat blakām vienmēr stāv un visu to vēro. Tam gan viss
          čotka - tik piešķil un brauc! Bet nu pēdējais pulciņā pievienojies
          slavenais "omikrons", tas ar tāds pats kā Gulbis - tik piešķil un
          mauc. Paredzēts vēl mazliet ar fleksi padarboties un tad moš sanāks
          baigā copes laiva un varēs lielo zandartu beidzot izmānīt no ezera
          dzīlēm!
        </p>
      </div>
    </div>
  );
};

export default Laiva;
