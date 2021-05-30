import {useState} from 'react';
import {ethers} from 'ethers';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import Token from './artifacts/contracts/Token.sol/Token.json';

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const tokenAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

function App() {
    const [greeting, setGreeting] = useState('');
    const [userAccount, setUserAccount] = useState('');
    const [amount, setAmount] = useState(0);

    async function fetchGreeting() {
        /* Check if MetaMask Extension is connected */
        if (typeof window.ethereum !== 'undefined') {
            /* Create Provider */
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            /* Create (Javascript based) Instance of Smart Contract (for only read from it) */
            const smartContract = new ethers.Contract(greeterAddress, Greeter.abi, provider);
            try {
                /* Calling Function greet() from Smart Contract Greeter */
                const data = await smartContract.greet();
                console.log('Data from Smart Contract: ', data);
            } catch (error) {
                console.log('Error, while fetching Smart Contract Greeting', error);
            }
        }
    }

    async function requestAccount() {
        /* Requesting Information about Account from their MetaMask Wallet */
        await window.ethereum.request({
            method: 'eth_requestAccounts'
        });
    }

    async function setGreetingValue() {
        if (!greeting) {
            return;
        }
        if (typeof window.ethereum !== 'undefined') {
            /* Requesting Information about Account */
            /* Checking Access to Wallet */
            await requestAccount();
            /* Create Provider */
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            /* For Creating an Update on the Blockchain it is needed to create a Transaction */
            /* The Transaction have to be signed */
            const signer = provider.getSigner();
            /* Create (Javascript based) Instance of Smart Contract (to write in it) */
            const smartContract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
            /* Creating a Transaction to write in the Blockchain */
            const transaction = await smartContract.setGreeting(greeting);
            /* Reset local State */
            setGreeting('');
            /* Waiting until the Transaction is confirmed in the Blockchain */
            await transaction.wait();
            /* Fetching the Greeting from the Blockchain */
            await fetchGreeting();
        }
        /* Requesting Information about Account */
        /* Checking Access to Wallet */
        await requestAccount();
    }

    async function getBalance() {
        if(typeof window.ethereum !== 'undefined') {
            /* Getting Information about Account from Wallet */
            /* Array contains only User Account */
            const [account] = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            /* Create Provider */
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            /* Create (Javascript based) Instance of Smart Contract (for only read from it) */
            const smartContract = new ethers.Contract(tokenAddress, Token.abi, provider);
            /* Getting Balance from Smart Contract */
            const balance = await smartContract.balanceOf(account);
            console.log("Balance: ", balance.toString());
        }
    }

    async function transferBalance() {
        if(typeof window.ethereum !== 'undefined') {
            /* Checking Access to Wallet */
            await requestAccount();
            /* Create Provider */
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            /* For Creating an Update on the Blockchain it is needed to create a Transaction */
            /* The Transaction have to be signed */
            const signer = provider.getSigner();
            /* Create (Javascript based) Instance of Smart Contract (to write in it) */
            const smartContract = new ethers.Contract(tokenAddress, Token.abi, signer);
            /* Creating a Transaction to write in the Blockchain */
            /* Sending an Amount of Token to the UserAccount from the Receiver */
            const transaction = await smartContract.transfer(userAccount, amount);
            console.log(`${amount} Token successfully sent to ${userAccount}`);
        }
    }

    return (
        <div>
            <button onClick={fetchGreeting}>Fetch Greeting</button>
            <button onClick={setGreetingValue}>Set Greeting</button>
            <input
                onChange={event => setGreeting(event.target.value)}
                placeholder="Set Greeting"
                value={greeting}
            />
            <br/>
            <button onClick={getBalance}>Get Balance</button>
            <button onClick={transferBalance}>Send Balance</button>
            <input
                onChange={event => setUserAccount(event.target.value)}
                placeholder="Set User Account"
                value={userAccount}
            />
            <input
                onChange={event => setAmount(event.target.value)}
                placeholder="Set Amount"
                value={amount}
            />
        </div>
    );
}

export default App;
