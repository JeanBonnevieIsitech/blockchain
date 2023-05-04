const SimpleStorage = artifacts.require("SimpleStorage");
const test = artifacts.require("Test");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(test)
};
