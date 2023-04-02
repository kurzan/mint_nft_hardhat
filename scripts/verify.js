const hre = require("hardhat");

async function main() {

  await run(`verify:verify`, {
    address: "0x61C0A8C1eA7e715F3DBf0365b56E4Ee57be51E22",
    constructorArguments: [],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});