//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

/* Using the Hardhat Console to log in the Console */
import "hardhat/console.sol";

contract Greeter {
    string greeting;

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    /*
    Keyword:
      - public: The Function can be executed from Outside the Blockchain (for Example from the Front End)
      - view: The Function can only read and not write in the Blockchain (or not modify any States)
      - pure: The Function can not read and write in the Blockchain, only can return a hardcoded Value
    */
    function greet() public view returns (string memory) {
        return greeting;
    }

    /* For Functions that write in the Blockchain is needed to pay Fees (Gas) */
    function setGreeting(string memory _greeting) public {
        console.log("Changing Greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
