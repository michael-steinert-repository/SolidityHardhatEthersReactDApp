//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

/* Using the Hardhat Console to log in the Console */
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/* Approach with ERC20 Standard Implementation of Implementing a Token*/
contract DBCToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        /* Using Implementation of OpenZeppelin (Contracts) */
        _mint(msg.sender, 42 * (10**18));
    }
}
