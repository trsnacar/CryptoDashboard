pragma solidity ^0.8.0;

// Declare the contract
contract CryptoDashboard {
  // Define a mapping to store the records
  mapping (address => uint) public records;

  // Function to add a new record
  function addRecord(address _address, uint _amount) public {
    // Update the record with the new information
    records[_address] = _amount;
  }

  // Function to retrieve a record
  function getRecord(address _address) public view returns (uint) {
    // Return the record for the specified address
    return records[_address];
  }
}
