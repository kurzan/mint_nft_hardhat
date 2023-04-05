require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-exposed");
require("hardhat-gas-reporter");

const TBNB_PRIVATE_KEY = process.env.TBNB_PRIVATE_KEY;
const ETHERSCAN_API = process.env.ETHERSCAN_API;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwor: "localhost",
  networks: {
    tbnb: {
      url: "https://bsc-testnet.public.blastapi.io",
      chainId: 97,
      accounts: [TBNB_PRIVATE_KEY]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API
  },
  gasReporter: {
    enabled: true,
    outputFile: "gasReporter.txt",
    noColors: true,
  },
};
