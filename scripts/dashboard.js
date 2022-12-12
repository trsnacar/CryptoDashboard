// Create an object to store the records
const cryptoRecords = {};

// Function to add new records
function addRecord(currency, amount) {
  // Check if the currency already exists in the records
  if (cryptoRecords[currency]) {
    // If it does, update the amount
    cryptoRecords[currency] += amount;
  } else {
    // If it doesn't, add a new entry to the records
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
