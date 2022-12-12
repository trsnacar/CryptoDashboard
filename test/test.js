// Import the web3.js library
const Web3 = require("web3");

// Connect to the Ethereum network
const web3 = new Web3("http://localhost:8545");

// Get the contract's address and ABI from the deployment
const contractAddress = "0x...";
const contractABI = [...];

// Create an instance of the contract
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Test the addRecord function
contract.methods.addRecord("0x123...", 5)
  .send({ from: "0x456..." })
  .then(() => {
    // If the transaction is successful, log a message
    console.log("Record added successfully!");
  })
  .catch((err) => {
    // If there is an error, log it
    console.error(err);
  });

// Test the getRecord function
contract.methods.getRecord("0x123...")
  .call()
  .then((result) => {
    // If the call is successful, log the result
    console.log(`Amount: ${result}`);
  })
  .catch((err) => {
    // If there is an error, log it
    console.error(err);
  });
