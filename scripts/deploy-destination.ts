import { ethers } from "hardhat";

async function main() {
  const destinationVoter = await ethers.deployContract("DestinationVoter", [
    process.env.ROUTER,
    process.env.ENTRY_POINT,
  ]);

  await destinationVoter.waitForDeployment();

  console.log(
    `Destination Voter deployed to: https://etherscan.com/address/${await destinationVoter.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
