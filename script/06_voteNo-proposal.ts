import { ethers } from "hardhat";
import { Token, Voting } from "../typechain-types";
import { VOTING_ADDRESS } from "../constants/votingConstants";

const main = async () => {
  const VotingFactory = await ethers.getContractFactory("Voting");
  const voting = VotingFactory.attach(VOTING_ADDRESS) as Voting;

  const transaction = await voting.voteNo(0);
  await transaction.wait(1);

  console.log("Voted No for proposal 0");
  console.log("Proposal 0 details: ", await voting.proposals(0));
};

main();
