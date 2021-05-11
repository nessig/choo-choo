const { expect } = require('chai');

describe('ChooChooToken', function () {
  it('Should assign initial balance of token to deployer, then transfer correct amount between accounts', async function () {
    const Token = await ethers.getContractFactory('ChooChooToken');
    const initialSupply = 100e18;
    const token = await Token.deploy(initialSupply.toString());

    await token.deployed();

    const [deployerAccount, otherAccount] = await ethers.getSigners();
    expect(await await token.balanceOf(deployerAccount.address)).to.equal(
      initialSupply.toString()
    );
    const transferAmount = 3e18;
    await token.transfer(otherAccount.address, transferAmount.toString());
    expect(await await token.balanceOf(otherAccount.address)).to.equal(
      transferAmount.toString()
    );
    expect(await await token.balanceOf(deployerAccount.address)).to.equal(
      (initialSupply - transferAmount).toString()
    );
  });
});
