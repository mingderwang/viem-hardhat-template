import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  networks: {
    hardhat: {},
    // Configure other networks as needed
  },
};

export default config;
