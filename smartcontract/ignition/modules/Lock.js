const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Owner", (m) => {
  const lock = m.contract("Owner", []);

  return { lock };
});
