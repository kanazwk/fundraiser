const SimpleToken = artifacts.require("SimpleToken.sol");

contract("SimpleToken", accounts => {
	it("...should put 100ST in the first account.", async () => {
		const simpleTokenInstance = await SimpleToken.deployed();
		let balance = await simpleTokenInstance.balanceOf(accounts[0]);
		balance = web3.utils.fromWei(balance, "ether");
		assert.equal(balance, 100, "First account don't have 100 ST.");
	});
});
