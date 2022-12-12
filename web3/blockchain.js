// Import the bitcoinjs-lib library
const bitcoin = require("bitcoinjs-lib");

// Create an object to store the records
const cryptoRecords = {};

// Function to add new records
function addRecord(currency, amount) {
  // Check if the currency is Bitcoin
  if (currency === "Bitcoin") {
    // Generate a new address for the user
    const keyPair = bitcoin.ECPair.makeRandom();
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

    // Add a new entry to the records with the generated address
    cryptoRecords[address] = amount;
  } else {
    // If it's not Bitcoin, add a new entry to the records
    cryptoRecords[currency] = amount;
  }
}

// Function to retrieve records
function getRecords() {
  // Loop through the records and log them to the console
  for (const currency in cryptoRecords) {
    console.log(`${currency}: ${cryptoRecords[currency]}`);
  }
}

// Add some records
addRecord("Bitcoin", 5);
addRecord("Ethereum", 10);
addRecord("Litecoin", 7);

// Retrieve the records
getRecords();
