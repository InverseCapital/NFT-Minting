import { ethers } from "hardhat";
import { getContract, getNFTContract } from "../utils/contracts";
import "dotenv/config";

async function main() {
  const accounts = await ethers.getSigners();
  const tokensToMint = 100;
  const myNTFContract = getNFTContract();

  console.log(`Minting ${tokensToMint} to address: `, accounts[0].address);

  //   const mintTx = await myNTFContract....
  //   await mintTx.wait();
  //   console.log("Mint transaction hash: ", mintTx.hash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
