import { ethers } from "hardhat";
import { getNFTContract } from "../utils/contracts";
import "dotenv/config";

const METADATA_BASE_URI = "http://localhost:3000/metadata/";

async function main() {
  const accounts = await ethers.getSigners();
  const myNTFContract = getNFTContract(accounts[0]);

  const mintTx = await myNTFContract.create(METADATA_BASE_URI);

  await mintTx.wait();
  console.log("Mint transaction hash: ", mintTx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
