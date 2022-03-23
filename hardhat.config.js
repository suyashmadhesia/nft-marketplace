require("@nomiclabs/hardhat-waffle");
const {projectId, privateKey} = require("./private");
// const fs = require("fs");
// const privateKey = fs.readFileSync(".private").toString();

module.exports = {
  solidity: "0.8.4",
  network: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.1",
};
