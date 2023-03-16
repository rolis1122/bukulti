import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Kubls from "./components/Kubls";
import Laiva from "./components/Laiva";
import Laikapstakli from "./components/Laikapstakli";
import Kontakti from "./components/Kontakti";
// import Weather from "./components/weather";

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
    </div>
  );
}

export default App;
