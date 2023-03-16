import { AiOutlineHome } from "react-icons/ai";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Kubls from "./components/Kubls";
import Laiva from "./components/Laiva";
import Laikapstakli from "./components/Laikapstakli";
import Kontakti from "./components/Kontakti";
import Weather from "./components/weather";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Kubls />
      <Laiva />
      <Laikapstakli />
      {/* <Weather /> */}
      <Kontakti />
      <div className="w-full flex justify-center m-0 p-0 md:hidden">
        <a
          href="#main"
          className="rounded-full flex justify-center items-center w-40 shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <AiOutlineHome size={20} />
        </a>
      </div>
    </div>
  );
}

export default App;
