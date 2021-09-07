/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("hardhat-deploy");

module.exports = {
  networks: {
    hardhat: {
      // Uncomment these lines to use mainnet fork
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/oQw-zKsi9jCv4BqW-N0Gc-kChUooKTv9`,
        blockNumber: 11589707,
      },
    },
    live: {
      url: `https://eth-mainnet.alchemyapi.io/v2/oQw-zKsi9jCv4BqW-N0Gc-kChUooKTv9`,
      accounts: ["0xf2b77e51Ac80b865A2dd2b415923291D18f7E5F0"],
    },
  },
  namedAccounts: {
    deployer: 0,
    // admin: {
    //   default: 1,
    //   mainnet: "0x2cf7252e74036d1da831d11089d326296e64a728",
    // },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 240000,
  },
};
