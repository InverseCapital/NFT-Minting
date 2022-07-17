import { getNFTContract } from "../utils/contracts";
import "dotenv/config";
import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();

  const myNTFContract = getNFTContract(accounts[0]);

  const items = await myNTFContract.getItems();

  console.log(items);
  console.log(
    "Items: ",
    items.map((item) => item.toNumber())
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
