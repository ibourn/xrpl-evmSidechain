# XRPL - EVM SIDECHAIN

> Discovering the XRPL EVM sidechain during 2 days of training offered by [XRPL-Commons](https://www.xrpl-commons.org/).  
> _See also: [xrpl-training](https://github.com/ibourn/xrpl-training)._

## Table of Contents

- [Presentation](#presentation)
- [Repo Content](#repo-content)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)

## Presentation

Thanks to the work of [Peersyst](https://peersyst.com/), the integration of an EVM sidechain to XRPL could soon be realized. The amendment that would allow its integration is currently in the voting phase.

XRPL has been operational for about ten years. Its security, transaction speed, and cost-efficiency make it a prime choice for payment solutions. The integration of the EVM sidechain will extend the utility of XRPL by adding the capability for smart contracts.

XRP is the native token of the sidechain, and a decentralized bridge, also developed by Peersyst, ensures a balanced 1:1 XRP circulation.

The consensus mechanism utilized is Proof of Authority (PoA), similar to that of the XRPL, maintaining the original network's efficiency with a 3.5-second block time and a capacity of 1,000 transactions per second.

The sidechain is built on the Cosmos SDK, which allows it to interact with the Cosmos ecosystem.

## Repo Content

This repository contains a simple Hardhat project for utilizing the sidechain. It includes a voting contract and an ERC20 token used as a weighting mechanism for votes.

**Note:** The contracts are incomplete and the solution is not safe for real-world use! These are just minimal features meant for testing purposes.

### Prerequisites:

First, obtain some testnet tokens to cover transaction fees:

1. Visit the bridge: https://bridge.devnet.xrpl.org/
2. On the left side, select XRPL Devnet.
3. Click "Connect" then "Faucet" to generate an account with XRP Devnet tokens.
4. On the right side, connect your [Metamask](https://metamask.io/) and switch it to EVM Sidechain Devnet.
5. Select an amount and click "Transfer".

### Installation:

- Clone the repo: `git clone https://github.com/ibourn/xrpl-evmSidechain.git`
- Move inside the repo directory: `cd xrpl-evmSidechain`
- Install the dependencies: `npm install`
- Compile the contracts: `npx hardhat compile`
- Rename `.env.example` to `.env` and add your private key as indicated.

### Usage:

To **run the scripts**:

1. `npm run deploy-token` to deploy the token.
2. `npm run buy-token` to purchase some tokens.
3. `npm run deploy-voting` to deploy the Voting contract.
4. `npm run create-proposal` to create a proposal.
5. `npm run vote-yes` or `npm run vote-no` to vote on the proposal.

Use the [explorer](https://evm-sidechain.xrpl.org/) to **check your transactions**.

To **verify the contracts** with the explorer, follow these steps:

1. Run `npx hardhat flatten > Flattened.sol` to create a file with all the necessary code.
2. Click _Verify & Submit_.
3. Choose the _Flattened Source Code Method_.
4. Select the Solidity version used (_v0.8.24_).
5. Select the EVM version (_Paris_).
6. Ensure optimization is unselected.
7. Paste the content of your `Flattened.sol` file.
8. Click _Verify & Publish_.
