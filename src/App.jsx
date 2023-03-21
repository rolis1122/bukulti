import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Kubls from "./components/Kubls";
import Laiva from "./components/Laiva";
import Laikapstakli from "./components/Laikapstakli";
import Kontakti from "./components/Kontakti";
import FishCard from "./components/FishCard";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Kubls />
      <Laiva />
      <FishCard />
      <Laikapstakli />
      <Kontakti />
    </div>
  );
}

export default App;
