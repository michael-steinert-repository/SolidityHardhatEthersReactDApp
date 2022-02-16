# React decentralized Application (dApp)

## Ethereum
* Ethereum is an Open Source, globally decentralized Computing Infrastructure that executes Smart Contracts
* It uses a Blockchain to synchronize and store its Changes
* It uses a Cryptocurrency called Ether to meter and constrain Execution Resource Costs

## Contract ABI Specification
* The Contract Application Binary Interface (ABI) is the standard Way to interact with Contracts in the Ethereum ecosystem
* ABIs are used for the Interaction from Outside the Blockchain and for Contract-to-Contract Interaction
* It describes the Interfaces from the Smart Contracts
* Data is encoded according to its Type, as described in this Specification
* The Encoding is not self describing and thus requires a Schema in Order to decode
* Using the higher-level Library Web3.js abstracts most of technical Details, but the ABIs in JSON format are still needed to be provided to Web3.js
* ABIs are imported in the Front End to interact with the Blockchain

## Dependencies
### Infura
* Infura allows interacting with a Network (Blockchain) without having an own Node
1) Create Project on https://infura.io/
1) Getting the Project ID from Infura
1) Pasting Project ID to hard.hat.config.js
1) Creating an Account in MetaMask Wallet for Test Network Ropsten
1) Sending through https://faucet.ropsten.be/ 1 ETH to Account
1) Exporting MetaMask Account with the private Key
1) After Deploying the Smart Contract on the Test Network Ropsten it is available to see at https://ropsten.etherscan.io/ und his Address (printed after Deployment in the Console)

### Ethers.js
* The Ethers.js Library aims for Interacting with the Ethereum Blockchain and its Ecosystem  from client-side JavaScript
* Similar Tool in the Ecosystem is Web3.js

### Hardhat
* Hardhat is an Ethereum development Environment and Framework designed for Full Stack Development
* Similar Tools in the Ecosystem are Ganache and Truffle

### Ethereum-Waffle
* Framework for Testing Smart Contracts

### Chai
* Chai is a BDD (Behavior driven Design) / TDD (Test driven Design) Assertion Library for Node.js, and the Browser
* It can be paired with any JavaScript Testing Framework

### MetaMask
* Metamask helps to handle Account Management and Connecting the current User to the Blockchain 
* It enables Users to manage their Accounts and Keys while isolating them from the Site Context
* Once a User has connected their MetaMask Wallet, it can interact with the globally available Ethereum API (window.ethereum)
* The Ethereum API (window.ethereum) identifies the Users of web3-compatible Browsers (like MetaMask Users), and allows to request a Transaction Signature

### OpenZeppelin (Contracts)
* OpenZeppelin provides Security Products to build, automate, and operate decentralized applications 
* It contains Implementations of Standards like ERC20 and ERC721.
* It provides reusable Solidity Components to build Custom Contracts and decentralized Systems

## Setup
### Configure Hardhat
1) Runs: npx hardhat
1) Choose: create a sample project
1) Taking Default for Project Root
1) Choose Yes for .gitignore

### Hardhat Commands
| Command | Description | 
| --- | --- |
| npx hardhat compile | To compile the Smart Contracts in the Blockchain and create their ABIs |
| npx hardhat node | Creating local Network (Blockchain) from initial Node |
| npx hardhat run scripts/deploy.js --network localhost | Deploying the Smart Contracts into the local Network (with the deploy.js script). When deploy from Hardhat localhost, it automatically use the 0th Account ETH Address for paying Gas |
| npx hardhat run scripts/deploy.js --network ropsten | Deploying the Smart Contracts into the Ropsten Test Network (with the deploy.js script) |

## Solidity
### Events
* Events cause the Arguments to be stored in the Log of the Transaction
* The Log of the Transaction exists as long as the Block in the Blockchain exists (in Theory forever)
* Events log Changes into the Blockchain and make it true forever

### Address
* Every Account and Smart Contract has an Address
* It is used to send and receive Ether from one Account to another

### Mapping
* Data Type used to store Associations that allow to get a Value for a corresponding Key

### Require
* Convenience Function that guarantees Validity of Conditions that cannot be detected before Execution

### Struct
* Struct Types are used to represent a Record and allow creating own Data Types

### Enum
* Enums restrict a Variable to have on of predefined Values

