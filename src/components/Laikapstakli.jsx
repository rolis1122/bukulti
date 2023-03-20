import CurrentTime from "./CurrentTime";
import Forecast from "./Forecast";
import TempAndDetails from "./TempAndDetails";

const Laikapstakli = () => {
  return (
    <div id="laikapstakli" className="max-w-[1400px] m-auto md:pl-20 p-4 mb-10">
      <h1 className="text-4xl font-bold text-center mb-5">Laika ziņas</h1>

      <div className="mx-auto max-w-screen-md mt-4 py-5 px-4 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <CurrentTime />
        <div className="flex items-center justify-center my-3">
          <p className="text-white text-3xl font-xl">Bukulti</p>
        </div>
        <TempAndDetails />
        <Forecast />
      </div>
    </div>
  );
};

export default Laikapstakli;
