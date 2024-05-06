import { ethers } from "hardhat";
import { Token, Voting } from "../typechain-types";
import { VOTING_ADDRESS } from "../constants/votingConstants";

const main = async () => {
  const VotingFactory = await ethers.getContractFactory("Voting");
  const voting = VotingFactory.attach(VOTING_ADDRESS) as Voting;

  console.log("Block number: ", await ethers.provider.getBlockNumber());
  const timestamp = (await ethers.provider.getBlock("latest"))?.timestamp;
  console.log("Timestamp: ", timestamp);
  const futureTimestamp = timestamp ? timestamp + 120 : 1_755_555_555;
  console.log("Future timestamp (+120 sec.): ", futureTimestamp);

  const transaction = await voting.createProposal(
    "title",
    "description",
    futureTimestamp
  );
  await transaction.wait(1);

  // console.log("transaction: ", transaction);
  console.log("Created proposal");
  console.log("Proposal 0 details: ", await voting.proposals(0));
};

main();
