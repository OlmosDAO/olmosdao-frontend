import { useWeb3React } from "@web3-react/core";
import "./assets/App.css";
import ConnectButtons from "./components/ConnectButtons/ConnectButtons";
import StatsDapp from "./components/StatsDapp/StatsDapp";
import Sidebar from "./components/Sidebar/Sidebar"
function App() {
  const web3React = useWeb3React();

  return (
    <div className="App">

      <div className="Layout"> 
         <Sidebar/>
         <header className="App-header">
             <StatsDapp account={web3React.account} />
              <ConnectButtons />
         </header>
      </div>
     
 
    </div>
  );
}

export default App;
