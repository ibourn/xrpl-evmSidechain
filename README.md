# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

## Ressources:

https://bridge.devnet.xrpl.org/

1. On the left side, select XRPL Devnet.
2. Click Faucet, it will generate an account with dev net token.
3. On the right side, connect your Metamask and switch to EVM Sidechain Devnet.
4. Select an amount and click transfer.

https://evm-sidechain.xrpl.org/

//typechain-types is generated when compiling

// npx hardhat flatten => to get flattened.sol to verify in explorer
