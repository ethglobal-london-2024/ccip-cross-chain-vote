import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "hardhat-abi-exporter";
import "solidity-coverage";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";

import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    baseSepolia: {
      chainId: 84532,
      url: `https://sepolia.base.org`,
      accounts: [process.env.WALLET_PK || ""],
    },
    arbitrumSepolia: {
      chainId: 421614,
      url: `https://sepolia-rollup.arbitrum.io/rpc`,
      accounts: [process.env.WALLET_PK || ""],
    },
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
        blockNumber: 19091700,
      },
      accounts: {
        count: 150,
      },
    },
  },
  etherscan: {
    apiKey: {
      baseSepolia: process.env.BASESCAN_API_KEY || "",
      arbitrumSepolia: process.env.ARBISCAN_API_KEY || "",
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.24",
      },
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    enabled: true,
  },
};

export default config;
