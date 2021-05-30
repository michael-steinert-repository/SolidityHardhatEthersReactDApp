require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.3",
    paths: {
        artifacts: './src/artifacts'
    },
    networks: {
        hardhat: {
            chainId: 1337
        },
        ropsten: {
            url: "https://ropsten.infura.io/v3/57632112265541db9c7278632b3c8049",
            /* Private Key from Wallet should never be accessible in a Config */
            accounts: [`0x95a19c286615dfc01872681723084732453c8d2e635a020e1af5d387a78180e5`]
        }
    }
};

