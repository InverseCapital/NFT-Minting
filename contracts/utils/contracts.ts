import { Contract, ContractInterface } from "ethers";
import { ethers } from "hardhat";

import { getProvider } from "./providers";
import { NFTCollection } from "../typechain-types/contracts/ERC721.sol/NFTCollection";
import * as nftJson from "../artifacts/contracts/ERC721.sol/NFTCollection.json";

export function getContract<T extends Contract>(
  address: string,
  abi: ContractInterface,
  withSigner = true
) {
  const provider = getProvider();

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY || "");
  const signer = wallet.connect(provider);

  return new Contract(address, abi, withSigner ? signer : provider) as T;
}

export function getNFTContract(withSigner = true) {
  return getContract<NFTCollection>(
    process.env.BALLOT_CONTRACT_ADDRESS || "",
    nftJson.abi,
    withSigner
  );
}

export async function deployContract(contractName: string, ...args: unknown[]) {
  // Get contract factory
  const contractFactory = await ethers.getContractFactory(contractName);

  // Deploy contract
  const contract = await contractFactory.deploy(...args);
  await contract.deployed();

  return contract;
}
