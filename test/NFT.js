const { ethers } = require("hardhat");
const { assert, expect } = require("chai");
const { Signer } = require("ethers");
const baseURI = "ipfs://QmeB6E2pJJwb3MX6kQ1WZb7DkjWnSqU7JfQWE2CP9CpBUY/";
const expTokenURI =
  "ipfs://QmeB6E2pJJwb3MX6kQ1WZb7DkjWnSqU7JfQWE2CP9CpBUY/0.json";

describe("NFT", () => {
  let NftFactory, contract;
  let owner, addr1, addr2;
  beforeEach(async () => {
    [owner, addr1, addr2] = await ethers.getSigners();
    NftFactory = await ethers.getContractFactory("NFT");
    contract = await NftFactory.deploy();
  });

  it("Should check tokenURI is correct", async () => {
    await contract.safeMint(addr1.address, {
      value: ethers.utils.parseEther("0.001"),
    });
    const tokenURI = await contract.tokenURI(0);
    assert.equal(expTokenURI, tokenURI);
  });

  it("Should be correct BaseURI", async () => {
    NftFactorySPEC = await ethers.getContractFactory("$NFT");
    contractSPEC = await NftFactorySPEC.deploy();

    const _baseURI = "ipfs://QmeB6E2pJJwb3MX6kQ1WZb7DkjWnSqU7JfQWE2CP9CpBUY/";
    const baseURI = await contractSPEC.$_baseURI();
    assert.equal(_baseURI, baseURI);
  });

  it("Should change BaseURI", async () => {
    NftFactorySPEC = await ethers.getContractFactory("$NFT");
    contractSPEC = await NftFactorySPEC.deploy();

    newBaseURI = "ipfs://QmeB6E2pJJwb3MX6kQ1WZb7DkjWnSqU7JfQWE2CP9CpBUY/";
    setNew = await contractSPEC.changeBaseURI(newBaseURI);
    assert.equal(newBaseURI, await contractSPEC.$_baseURI());
  });

  it("Should revert about not enough money", async () => {
    await expect(
      contract.safeMint(addr1.address, {
        value: ethers.utils.parseEther("0.00023"),
      })
    ).to.be.revertedWith("Please add valid amount of ETH");
  });

  it("Should revert about reaching totalSupply", async () => {
    for (let i = 0; i < 10; i++) {
      contract.safeMint(addr1.address, {
        value: ethers.utils.parseEther("0.001"),
      });
    }

    await expect(
      contract.safeMint(addr1.address, {
        value: ethers.utils.parseEther("0.001"),
      })
    ).to.be.revertedWith("You reached max supply");
  });

  it("Should be successful", async () => {
    expect(contract.connect(addr1).withdraw()).to.be.revertedWith;
  });

  it("Should withdraw all contract money", async () => {
    await contract.safeMint(addr1.address, {
      value: ethers.utils.parseEther("0.001"),
    });

    await contract.withdraw();

    const provider = ethers.getDefaultProvider();
    const balance = await provider.getBalance(contract.address);

    assert(balance, 0);
  });
});
