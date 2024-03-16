import { ethers } from "hardhat";

async function main() {
  const sourceVoter = await ethers.deployContract("SourceVoter", []);

  await sourceVoter.waitForDeployment();

  console.log(
    `Source Voter deployed to: https://basescan.com/address/${await sourceVoter.getAddress()}`
  );

  const destinationVoter = await ethers.deployContract("DestinationVoter", []);

  await destinationVoter.waitForDeployment();

  console.log(
    `Destination Voter deployed to: https://basescan.com/address/${await destinationVoter.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
