//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

/* Using the Hardhat Console to log in the Console */
import "hardhat/console.sol";

/* Own Approach of Implementing a Token */
contract Token {
    string public name = "Decentralized Bank Currency";
    string public symbol = "DBC";
    uint public totalSupply = 1000000;
    /* Mapping each Address to theirs Amount of Ether */
    /*
    JavaScript Equivalent for Mappings in Solidity:
    const balances = {
        address: unit
    }
    The Map balances uses the Type address as Key and Type unit as Value
*/
    mapping(address => uint) public balances;

    constructor() {
        /* Set the Balance of this People who deployed the Smart Contract to 10000000 */
        balances[msg.sender] = totalSupply;
    }

    function transfer(address receiver, uint amount) external {
        /* Check enough Tokens for this Transaction */
        require(balances[msg.sender] >= amount, "Not enough Tokens");
        /* Decrease the Balance of Sender */
        balances[msg.sender] -= amount;
        /* Increase the Balance of Receiver */
        balances[receiver] += amount;
    }

    function balanceOf(address account) external view returns (uint) {
        return balances[account];
    }
}