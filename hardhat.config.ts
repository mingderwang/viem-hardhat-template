import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  typechain: {
    outDir: "typechain",
    target: "ethers-v6",
  },
  networks: {
    hardhat: {},
    // Configure other networks as needed
  },
};

export default config;
