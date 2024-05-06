import { ethers } from "hardhat";
import { Token__factory, Token } from "../typechain-types";
import { TOKEN_ADDRESS } from "../constants/tokenConstants";

const main = async (): Promise<void> => {
  const signer = await ethers.provider.getSigner();
  console.log("wallet address: ", signer.address);

  const TokenFactory: Token__factory = await ethers.getContractFactory("Token");

  const Token = (await TokenFactory.attach(TOKEN_ADDRESS)) as Token;
  console.log("Token address: ", await Token.getAddress());

  const transaction = await Token.buyToken({ value: ethers.parseEther("10") });
  transaction.wait(1);

  const newBalance = await Token.balanceOf(signer.address);
  console.log("balance after buying: ", newBalance.toString());
};

main();
