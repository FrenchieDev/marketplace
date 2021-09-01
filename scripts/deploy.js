const { ethers, upgrades } = require("hardhat");

const Uniswap = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

async function main() {
  const Dex = await ethers.getContractFactory("Dex");
  const dex = await upgrades.deployProxy(Dex, [Uniswap]);
  await dex.deployed();

  console.log("dex deployed to:", dex.address);
}

main();