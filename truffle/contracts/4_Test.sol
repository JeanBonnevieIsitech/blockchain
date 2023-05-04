// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Test{
    
    uint16 _number;

    mapping(address => bytes32) _greeting; 

    function getMyBalance() public view returns (uint) {
        return msg.sender.balance;
    }

    function getNumber() public view returns (uint16) {
        return _number;
    }

    function setNumber(uint16 newNumber) public {
        _number = newNumber;
    }

    function ruinMyWallet() public pure {
        uint i=0;
        while(true) {
            i+=1;
        }
    }

    function setGreeting(bytes32 myGreeting) public {
         _greeting[msg.sender] = myGreeting;
    }

    function getMYGreeting() public view returns (bytes32) {
        if (_greeting[msg.sender] == 0){
            return (bytes32("undefined"));
        }

        return (_greeting[msg.sender]);
    }

}