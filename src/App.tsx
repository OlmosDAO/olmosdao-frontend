import { useWeb3React } from "@web3-react/core";
import "./assets/App.css";
import ConnectButtons from "./components/ConnectButtons/ConnectButtons";
import StatsDapp from "./components/StatsDapp/StatsDapp";

function App() {
  const web3React = useWeb3React();

  return (
    <div className="App">
      <header className="App-header">
        <StatsDapp account={web3React.account} />
        <ConnectButtons />
      </header>
    </div>
  );
}

export default App;
