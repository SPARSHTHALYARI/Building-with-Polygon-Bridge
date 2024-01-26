/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/vlKeMAXFdRr_6ygIczeSyrbVycLyxMfB",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
 