import { EtherscanProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import OlympusERC20Token from "../abi/OlympusERC20Token.json";
import aggregatorV3InterfaceABI from "../abi/aggregatorV3InterfaceABI.json";
import UniswapV3PoolABI from "../abi/UniswapV3Pool.json";
import UniswapV3FactoryABI from "../abi/UniswapV3Factory.json";

// import { useWeb3Context } from "./../contexts/contextWeb3Provider";

// const { provider } = useWeb3Context();

//   const { connect, address, provider, hasCachedProvider } = useWeb3Context();

// @ts-ignore */}
export const Stats = OlympusERC20Token.abi;

// export const providerPrinter = new ethers.providers.JsonRpcProvider();

// const provider = new ethers.providers.Web3Provider(web3.currentProvider);

// const provider = new EtherscanProvider();

// There is only ever up to one account in MetaMask exposed
// const signer = provider.getSigner();

// const contextWeb3Provider = useWeb3React<Web3Provider>();

// const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

export const provider0 = new EtherscanProvider();

const provider1 = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

const provider2 = new ethers.providers.InfuraProvider("homestead", "9aa3d95b3bc440fa88ea12eaa4456161");

const provider3 = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");

const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331";

const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI.abi, provider1);

// const web3 = new Web3(window["ethereum"]);
// window.web3.currentProvider.isMetaMask;
// export const provider1 = new ethers.providers.Web3Provider();
// const provider = ...; (use ethers.providers.InfuraProvider for a Node app or ethers.providers.Web3Provider(window.ethereum/window.web3) for a React app)
// export const provider2 = new ethers.providers.JsonRpcProvider();
// const provider2 = new AlchemyProvider();
// const provider3 = new ethers.providers.InfuraProvider("homestead", "4bf032f2d38a4ed6bb975b80d6340847");
// const provider4 = ethers.getDefaultProvider();
// new ethers.providers.JsonRpcProvider("https://ropsten.infura.io/v3/ea9fcb17397d4e2994424dcd677d2a2f");
// export function loadStats() {
// const provider = new ethers.providers.JsonRpcProvider("https://kovan.infura.io/v3/<infura_project_id>");

export const loadStats = async () => {
  (async () => {
    const wsohmContract = new ethers.Contract("0xca76543cf381ebbb277be79574059e32108e3e65" as string, Stats, provider1);
    const totalSupply = await wsohmContract.totalSupply();
    const symbol = await wsohmContract.symbol();
  })();

  // v2 Oraclew sushiswap
  const OHMLUSD = new ethers.Contract(
    "0xfDf12D1F85b5082877A6E070524f50F6c84FAa6b",
    aggregatorV3InterfaceABI.abi,
    provider1,
  );
  // v2 Oraclew sushiswap
  (async () => {
    const reserves = await OHMLUSD.getReserves();
    const price0CumulativeLast = await OHMLUSD.price0CumulativeLast();
    const price1CumulativeLast = await OHMLUSD.price1CumulativeLast();
    // console.log(price0CumulativeLast);
    // console.log(price1CumulativeLast);
    let price = Number(reserves._reserve0) / Number(reserves._reserve1 * 1e12);

    // console.log(price.toPrecision(18)); // mid price
  })();

  //etherscan.io/address/0xcf7e21b96a7dae8e1663b5a266fd812cbe973e70#code
};
const loadPriceToken = (async () => {
  var UniswapV3Pool = new ethers.Contract(
    "0xcf7e21b96a7dae8e1663b5a266fd812cbe973e70",
    UniswapV3PoolABI.abi,
    provider1,
  );
  var factory = await UniswapV3Pool.factory();

  var UniswapV3FactoryPool = new ethers.Contract(factory, UniswapV3FactoryABI.abi, provider1);
  var pool = await UniswapV3FactoryPool.getPool(
    "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f", //gOHM
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // WETH
    10000,
  );

  var UniswapV3Factory = new ethers.Contract(pool, UniswapV3PoolABI.abi, provider1);
  var slot0 = await UniswapV3Factory.slot0();
  var sqrtPriceX96 = slot0[0];

  var tokenPrice0 = sqrtPriceX96 ** 2 / 2 ** 192; //gOHM
  var tokenPrice1 = 2 ** 192 / sqrtPriceX96 ** 2; // WETH

  console.log("1 gOHM --> WETH " + tokenPrice0); //gOHM-- > WETH
  // console.log("1 WETH --> gOHM " + tokenPrice1); //WETH --> gOHM
})();
