// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * ERC20 token used for voting ponderation in the Voting contract
 *
 * This contract is a simple ERC20 token FOR TESTING PURPOSES to use the evm sidechain
 * There's no mechanism to secure the vote process (snapshot ...)
 */
contract Token is ERC20 {
    constructor(string memory symbol, string memory currencyCode) ERC20(symbol, currencyCode) {}

    function buyToken() public payable {
        require(msg.value > 0, "Must send some XRP");
        _mint(msg.sender, msg.value);
    }
}
