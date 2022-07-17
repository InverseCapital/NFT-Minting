import { getNFTContract } from "../utils/contracts";
import "dotenv/config";
import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();

  const myNTFContract = getNFTContract(accounts[0]);

  const uri = await myNTFContract.tokenURI(0);

  console.log(uri);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
