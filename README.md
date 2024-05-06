# XRPL - EVM SIDECHAIN

> Discovering the XRPL sidechain evm during 2 days of training offered by [XRPL-Commons](https://www.xrpl-commons.org/).

## Presentation

Thanks to the work of [Peersyst](https://peersyst.com/), the integration of an EVM sidechain could soon see the light of day, the amendment allowing its integration to XRPL is still in the voting phase.

XRPL has been around for about ten years. Its security, transaction speed and cost-efficiency make it a prime choice for payment solutions. The integration of the evm sidechain makes it possible to extend the use of XRPL by enriching it with the capabilities of smarts contracts .

XRP is the native token of the sidechain, and a decentralized bridge (also brought by Peersyst) ensures a balanced 1:1 XRP circulation.

The consensus used is the Proof of Authority (PoA) as for the xrp ledger maintaining the original network’s efficiency with a 3.5-second block time and 1,000 TPS capacity.

The sidechain being built on the cosmos SDK this allows it to interact with the Cosmos ecosystem.

## Repo content

This repo is a simple hardhat project to use the sidechain.
It contains a voting contract and an erc20 token used as a weighting for votes.

The contracts are not complete! And this solution is not safe for real use!
These are just minimalist features for a test purpose.

### Prerequisite:

You need first to get some testnet tokens to pay the tx fees.

1. Go to the bridge: https://bridge.devnet.xrpl.org/
2. On the left side, select XRPL Devnet.
3. Click Connect then Faucet, it will generate an account with XRP Devnet tokens.
4. On the right side, connect your [Metamask](https://metamask.io/) and switch it to EVM Sidechain Devnet.
5. Select an amount and click transfer.

### Installation:

- Clone the repo: `git clone https://github.com/ibourn/xrpl-evmSidechain.git`
- Move inside the repo: `cd xrpl-evmSidechain`
- Install the dependencies: `npm install`
- Compile the contracts: `npx hardhat compile`
- Rename the `.env.example` to `.env` and add your private key where indicated.

### Usage:

To **run the scripts**:

1. `npm run deploy-token` to deploy the token.
2. `npm run buy-token` to buy some tokens.
3. `npm run deploy-voting` to deploy the Voting contract.
4. `npm run create-proposal` to create a proposal.
5. `npm run vote-yes` or `npm run vote-no` to vote for the proposal.

You can use the [explorer](https://evm-sidechain.xrpl.org/) to **check your transactions**.

To **verify the contracts** with the explorer, go to the page of the contract address, then:

1. Run `npx hardhat flatten > Flattened.sol` to get a file with all the necessary elements.
2. Click _Verify & submit_.
3. Select the _flattened source code method_.
4. Select the solidity version used (_v0.8.24_).
5. Select EVM version (_paris_).
6. Unselect optimization.
7. Paste the content of your `Flattened.sol` file.
8. Click _Verify & publish_
