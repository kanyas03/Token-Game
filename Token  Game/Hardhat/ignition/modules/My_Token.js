// ignition/modules/TokenModule.js
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenModule", (m) => {
  const initialSupply = 1000n; // You can change this value

  const token = m.contract("MyToken", [initialSupply]);

  return { token };
});
