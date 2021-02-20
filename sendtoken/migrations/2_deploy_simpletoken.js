const SimpleToken = artifacts.require("./SimpleToken.sol");

module.exports = function(deployer, network, accounts) {
	const name = "SimpleToken";
	const symbol = "ST";
	const decimals = 18;
	const initSupply = web3.utils.toBN(100**decimals);

	return deployer.then(() => {
		return deployer.deploy(
			SimpleToken,
			name,
			symbol,
			decimals,
			initSupply
		);
	});
}
