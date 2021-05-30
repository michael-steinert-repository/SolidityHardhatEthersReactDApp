/* Hardhat Runtime Environment for running the Script in a standalone fashion through `node <script>` */
/* The Hardhat Runtime Environment Members are available in the global Scope */
const hre = require("hardhat");

async function main() {
    /* Hardhat always runs the Compile Task when running Scripts `await hre.run('compile')` */

    /* Getting the Smart Contract to deploy */
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    /* Passing the Constructor Argument and calling it */
    const greeter = await Greeter.deploy("Hello, Hardhat!");
    /* Waiting until Smart Contract is deployed */
    await greeter.deployed();
    /* Log into Console of Hardhat */
    console.log("Greeter deployed to:", greeter.address);

    /* Getting the Smart Contract to deploy */
    const Token = await hre.ethers.getContractFactory("Token");
    /* Passing the Constructor Argument and calling it */
    const token = await Token.deploy();
    /* Waiting until Smart Contract is deployed */
    await token.deployed();
    /* Log into Console of Hardhat */
    console.log("Token deployed to:", token.address);
}

/* Pattern to be able to use async/await everywhere and properly handle Errors */
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
