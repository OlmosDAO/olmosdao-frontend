import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import React, { useContext, useMemo } from "react";
import { JsonRpcProvider, StaticJsonRpcProvider, Web3Provider } from "@ethersproject/providers";

// export const contextWeb3Provider = useWeb3React<Web3Provider>();
// export const provv = contextWeb3Provider.library.provider;
// console.log(contextWeb3Provider);

// const Web3Context = React.createContext<Web3ContextData>(null);
// type onChainProvider = {
//   connect: () => Promise<Web3Provider | undefined>;
//   disconnect: () => void;
//   hasCachedProvider: () => boolean;
//   address: string;
//   connected: boolean;
//   provider: JsonRpcProvider;
//   chainChanged: Boolean;
//   onChainChangeComplete: () => void;
// };

// export type Web3ContextData = {
//   onChainProvider: onChainProvider;
// } | null;

// const Web3Context = React.createContext<Web3ContextData>(null);

// export const useWeb3Context = () => {
//   const web3Context = useContext(Web3Context);
//   if (!web3Context) {
//     throw new Error(
//       "useWeb3Context() can only be used inside of <Web3ContextProvider />, " + "please declare it at a higher level.",
//     );
//   }
//   const { onChainProvider } = web3Context;
//   return useMemo<onChainProvider>(() => {
//     return { ...onChainProvider };
//   }, [web3Context]);
// };
let storeProvider: any = null;

export function setProviderInjected(InjectedConnector: any) {
  storeProvider = InjectedConnector;
}

export function getProviderInjected() {
  return storeProvider;
}
