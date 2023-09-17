const ConcertTickets = artifacts.require("ConcertTickets");

module.exports = function (deployer) {
    deployer.deploy(ConcertTickets);
};