// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

uint256 constant TICKET_TOTAL = 10;

contract ConcertTickets {
    address public owner = msg.sender;

    struct Tickets {
        uint256 price;
        address owner;
    }

    Tickets[TICKET_TOTAL] public tickets;

    constructor() {
        for (uint256 i = 0; i < TICKET_TOTAL; i++) {
            tickets[i].price = 100; //0.06121 ETH
            tickets[i].owner = address(0x0);
        }
    }

// User buys the tickets and has parameter values. 
    function purchaseTicket(uint256 _index) external payable {
        require(_index < TICKET_TOTAL && _index >= 0);
        require(tickets[_index].owner == address(0x0));
        require(msg.value >= tickets[_index].price);
        tickets[_index].owner = msg.sender;
    }
}
