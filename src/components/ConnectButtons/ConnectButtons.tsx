import React from "react";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
// import { detectingTypeConnector } from "../../libs/connectors/hooks/hooks";

import {
  connectors,
  injected,
  // network,
  // walletconnect,
  // walletlink,
  // ledger,
  // trezor,
  // lattice,
  // frame,
  // authereum,
  // fortmatic,
  // magic,
  // portis,
  // torus,
} from "./../../libs/connectors/connectors";
import { ethers } from "ethers";
import { detectingTypeConnector, loadWallet } from "../../libs/connectors/checkConnectors";
import { useDispatch } from "react-redux";
import { setUserWallet } from "../../redux/storeSlice";

function ConnectButtons(): JSX.Element {
  const web3React = useWeb3React();
  // const dispatch = useDispatch();

  function disconnectWallet() {
    web3React.deactivate();
  }

  const setActivatingConnector = (typeConnector: string) => {
    detectingTypeConnector(typeConnector, web3React);
  };

  React.useEffect(() => {
    loadWallet(web3React);
  }, []);

  return (
    <>
      <div>
        {connectors.map((connector, indexKey) => {
          return (
            <button
              key={indexKey}
              disabled={!!web3React.account}
              onClick={() => setActivatingConnector(connector.label)}
            >
              {connector.label}
            </button>
          );
        })}
        <button
          disabled={!web3React.account}
          onClick={() => {
            disconnectWallet();
          }}
        >
          Deactivate
        </button>
      </div>
    </>
  );
}

export default ConnectButtons;
