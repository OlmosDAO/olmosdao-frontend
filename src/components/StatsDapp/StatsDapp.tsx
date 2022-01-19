import { useWeb3React } from "@web3-react/core";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserWallet } from "../../redux/storeSlice";
import { loadStats } from "../../services/stats";

function StatsDapp(account: any) {
  // console.log(providerPrinter);
  const dispatch = useDispatch();

  loadStats();
  useEffect(() => {
    console.log("something prop has changed.");
    dispatch(setUserWallet(account));
  }, [account]);

  const web3React = useWeb3React();

  return <h1>{web3React.account}</h1>;
}
export default StatsDapp;
