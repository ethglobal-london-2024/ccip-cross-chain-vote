// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {IGovernor} from "@openzeppelin/contracts/governance/IGovernor.sol";

contract DestinationVoter is CCIPReceiver {
    IGovernor governor;

    event VoteSuccessful();

    constructor(address router, address governorAddress) CCIPReceiver(router) {
        governor = IGovernor(governorAddress);
    }

    function _ccipReceive(Client.Any2EVMMessage memory message) internal override {
        (bool success,) = address(governor).call(message.data);
        require(success);
        emit VoteSuccessful();
    }
}
