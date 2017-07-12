var SafeMath = artifacts.require("./SafeMath.sol");
var A2BToken = artifacts.require("./A2BToken.sol");

module.exports = function(deployer) {
  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));


  deployer.deploy(SafeMath);
  deployer.link(SafeMath, A2BToken);

  deployer.deploy(A2BToken);
};
