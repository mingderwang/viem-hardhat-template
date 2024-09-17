import { ethers } from "hardhat";
import { ViemProvider, ViemContract } from "viem";

async function main() {
  // Create a Viem provider
  const provider = new ViemProvider("http://localhost:8545");

  // Create a Viem contract instance
  const contractAddress = "0xYourContractAddress";
  const abi = [
    // ABI of your contract
  ];
  const contract = new ViemContract(contractAddress, abi, provider);

  // Interact with the contract
  const result = await contract.yourContractMethod();
  console.log("Result:", result);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
