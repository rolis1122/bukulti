import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Kubls from "./components/Kubls";
import Laiva from "./components/Laiva";
import Laikapstakli from "./components/Laikapstakli";
import Kontakti from "./components/Kontakti";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Kubls />
      <Laiva />
      <Laikapstakli />
      <Kontakti />
    </div>
  );
}

export default App;
