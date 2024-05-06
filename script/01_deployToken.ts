import { ethers } from "hardhat";
import { Token__factory } from "../typechain-types";
import fs from "fs";

const main = async (): Promise<void> => {
  const TokenFactory: Token__factory = await ethers.getContractFactory("Token");
  const Token = await TokenFactory.deploy("TestToken", "TT1");
  const tokenAddress = await Token.getAddress();

  console.log("Writting token address to constants/tokenConstants.ts ..");
  if (!fs.existsSync("constants")) {
    fs.mkdirSync("constants");
  }
  fs.writeFileSync(
    "constants/tokenConstants.ts",
    `export const TOKEN_ADDRESS = "${tokenAddress}";`
  );
  console.log("tokenAddress: ", tokenAddress);
};

main();
