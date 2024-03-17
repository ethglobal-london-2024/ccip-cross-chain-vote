// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";

import {IEntryPoint} from "./interfaces/IEntryPoint.sol";

contract DestinationVoter is CCIPReceiver {
    address public entryPoint;

    event VoteSuccessful();

    constructor(address router, address entryPointAddress) CCIPReceiver(router) {
        entryPoint = entryPointAddress;
    }

    function _ccipReceive(Client.Any2EVMMessage memory message) internal override {
        IEntryPoint.UserOperation memory userOp = abi.decode(message.data, (IEntryPoint.UserOperation));
        bytes memory voteData = abi.encodeWithSelector(IEntryPoint.handleOps.selector, userOp, userOp.sender);
        (bool success,) = address(entryPoint).call(voteData);
        require(success);
        emit VoteSuccessful();
    }
}
