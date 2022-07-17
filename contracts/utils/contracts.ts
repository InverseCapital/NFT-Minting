import {
  Contract,
  ContractInterface,
  getDefaultProvider,
  Signer,
} from "ethers";
import { ethers } from "hardhat";

import { NFTCollection } from "../typechain-types/contracts/NFTCollection";
import * as nftJson from "../artifacts/contracts/NFTCollection.sol/NFTCollection.json";

export function getContract<T extends Contract>(
  address: string,
  abi: ContractInterface,
  withSigner = true
) {
  const provider = getDefaultProvider();

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY || "");
  const signer = wallet.connect(provider);

  return new Contract(address, abi, withSigner ? signer : provider) as T;
}

export function getNFTContract(signer?: Signer) {
  return new Contract(
    process.env.NFT_CONTRACT_ADDRESS || "",
    nftJson.abi,
    signer
  ) as NFTCollection;
}

export async function deployContract<T extends Contract>(
  contractName: string,
  ...args: unknown[]
) {
  // Get contract factory
  const contractFactory = await ethers.getContractFactory(contractName);

  // Deploy contract
  const contract = await contractFactory.deploy(...args);
  await contract.deployed();

  return contract as T;
}
