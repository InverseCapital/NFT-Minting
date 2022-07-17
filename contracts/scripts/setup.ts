import { ethers } from "hardhat";
import { getNFTContract } from "../utils/contracts";
import "dotenv/config";

const METADATA_BASE_URI = "http://localhost:3000/";

async function main() {
  const accounts = await ethers.getSigners();

  const myNTFContract = getNFTContract(accounts[0]);

  for (const account of accounts.slice(0, 10)) {
    console.log("Minting NFT to ", account.address);

    const mintTx = await myNTFContract
      .connect(account)
      .create(METADATA_BASE_URI);

    await mintTx.wait();
    console.log("Mint transaction hash: ", mintTx.hash);
  }

  const items = await myNTFContract.getItems();
  console.log(items);
  // console.log(
  //   "Minted token ids: ",
  //   ids.map((id) => id.toNumber())
  // );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
