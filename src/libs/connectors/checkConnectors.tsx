import { Web3Provider } from "@ethersproject/providers";
import { Observable } from "@reduxjs/toolkit";
import { getWeb3ReactContext, useWeb3React } from "@web3-react/core";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { setUserWallet } from "../../redux/storeSlice";
import { injected } from "./connectors";

// const web3ReactContext = getWeb3ReactContext();

// @ts-ignore */}
// const win = window["ethereum"];
// const isIframe = window.location !== window.parent.location;

// const context = useWeb3React<Web3Provider>();
// debugger;

// const provider = new ethers.providers.Web3Provider(win, "any");
// Prompt user for account connections

/**
 * determine if in IFrame for Ledger Live
 */
// win.enable().catch(console.error);
//  if (typeof ethereum !== "undefined") {
//    ethereum.enable().catch(console.error);
//  }

// const { connector, library, chainId, account, activate, deactivate, active, error } = context;

// const [setActivatingConnector] = React.useState<any>();
function Injected() {
  // @ts-ignore */}
  const win = window["ethereum"];
  win.enable().catch(console.error);
}

export function detectingTypeConnector(typeConnector: string, Web3ReactContex: Web3ReactContextInterface) {
  switch (typeConnector) {
    case "Injected":
      loadWallet(Web3ReactContex);
      break;
    default:
      break;
  }
}

export function loadWallet(Web3ReactContex: Web3ReactContextInterface) {
  injected.isAuthorized().then((isAuthorized: boolean) => {
    if (isAuthorized) {
      Web3ReactContex.activate(injected);
    } else {
      Injected();
    }
  });
}
