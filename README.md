# CCIP Cross Chain Voting

CCIP Cross Chain Voting allows users to vote on DAO proposals from different chains than the one they have their governance tokens.

Prerequisites:
- Cross-chain voting is possible by utilising ERC-4337 Smart Wallet Accounts.
- Users should have their governance tokens on the destination chain.

### Installation

```console
$ yarn
```

### Compile

```console
$ yarn compile
```

This task will compile all smart contracts in the `contracts` directory.
ABI files will be automatically exported in `artifacts` directory.

### Testing

```console
$ yarn test
```

### Code coverage

```console
$ yarn coverage
```

The report will be printed in the console and a static website containing full report will be generated in `coverage` directory.

### Code style

```console
$ yarn prettier
```

### Verify & Publish contract source code

```console
$ npx hardhat  verify --network mainnet $CONTRACT_ADDRESS $CONSTRUCTOR_ARGUMENTS
```
