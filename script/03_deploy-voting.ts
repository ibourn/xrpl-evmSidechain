import { ethers } from "hardhat";
import { TOKEN_ADDRESS } from "../constants/tokenConstants";
import fs from "fs";

const main = async () => {
  const VotingFactory = await ethers.getContractFactory("Voting");
  const voting = await VotingFactory.deploy(TOKEN_ADDRESS);
  const votingAddress = await voting.getAddress();

  console.log("Writting voting address to constants/votingConstants.ts ..");
  if (!fs.existsSync("constants")) {
    fs.mkdirSync("constants");
  }
  fs.writeFileSync(
    "constants/votingConstants.ts",
    `export const VOTING_ADDRESS = "${votingAddress}";`
  );
  console.log("Voting address: ", votingAddress);
};

main();
