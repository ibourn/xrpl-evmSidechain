// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * This contract is a simple voting contract FOR TESTING PURPOSES to use the evm sidechain
 *
 * IT IS NOT SECURE!
 *
 * checks are missing, a voter can vote multiple times, the token balance is not checked,
 * a voter can farm tokens and vote with them etc..
 */
contract Voting {
    struct Proposal {
        address author;
        string description;
        string title;
        uint256 endBlock;
        uint256 yeas;
        uint256 noes;
    }

    ERC20 public s_votingToken;
    uint256 public s_proposalCount;
    mapping(uint256 => Proposal) public proposals;

    constructor(address votingToken) {
        s_votingToken = ERC20(votingToken);
        s_proposalCount = 0;
    }

    function createProposal(string memory title, string memory description, uint256 endBlock) public {
        require(endBlock > block.timestamp, "endBlock shoulb be higher than current block");

        Proposal memory p =
            Proposal({author: msg.sender, description: description, title: title, endBlock: endBlock, yeas: 0, noes: 0});

        uint256 proposalId = s_proposalCount;
        s_proposalCount++;

        proposals[proposalId] = p;
    }

    function voteYes(uint256 proposalId) public {
        require(proposalId <= s_proposalCount, "proposal does not exist");
        require(proposalId >= 0, "proposal muste be positive");

        Proposal memory currentProposal = proposals[proposalId];
        require(currentProposal.endBlock > block.number, "vote is finished");

        uint256 balance = s_votingToken.balanceOf(msg.sender);

        currentProposal.yeas = currentProposal.yeas + balance;
        proposals[proposalId] = currentProposal;
    }

    function voteNo(uint256 proposalId) public {
        require(proposalId <= s_proposalCount, "proposal does not exist");
        require(proposalId >= 0, "proposal muste be positive");

        Proposal memory currentProposal = proposals[proposalId];
        require(currentProposal.endBlock > block.number, "vote is finished");

        uint256 balance = s_votingToken.balanceOf(msg.sender);

        currentProposal.noes = currentProposal.noes + balance;
        proposals[proposalId] = currentProposal;
    }
}
