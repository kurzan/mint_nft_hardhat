const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("NFT", () => {

  let contract;
  let NFT;
  beforeEach( async () => {
    NFT = await ethers.getContractFactory("NFT");  
    contract = await NFT.deploy();
  });

  it("Shoul change base uri", async () => {
    const baseUri = "uri";
    const changeBaseUri = await contract.changeBaseURI(baseUri);
    
    assert.equal(baseUri, await contract.baseURI);
  });
});