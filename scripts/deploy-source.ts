import { ethers } from "hardhat";

async function main() {
  const sourceVoter = await ethers.deployContract("SourceVoter", [
    process.env.BASE_ROUTER,
    process.env.LINK_ON_BASE,
  ]);

  await sourceVoter.waitForDeployment();

  console.log(
    `Source Voter deployed to: https://basescan.com/address/${await sourceVoter.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
