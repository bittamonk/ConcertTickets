const ConcertTickets = artifacts.require("ConcertTickets");
const assert = require('assert');

contract("ConcertTickets", (accounts) => {
    const BUYER = accounts[1];
    const TICKET_ID = 0;

    it('should allow a user to buy a ticket', async () => {
        const instance = await ConcertTickets.deployed();
        const originalConcertTickets = await instance.tickets(
            TICKET_ID
        );
        await instance.purchaseTicket(TICKET_ID, {
            from: BUYER, 
            value: originalConcertTickets.price,
        });
        const updatedConcertTickets = await instance.tickets(TICKET_ID);
        assert.equal(
            updatedConcertTickets.owner,
            BUYER,
            'the buyer should now be the owner of this ticket'
            );
    });
});