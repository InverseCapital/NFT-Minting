// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFTCollection is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("NFTCollection", "ITM") {}

  function create(string memory baseTokenURI) public returns (uint256) {
    uint256 newItemId = _tokenIds.current();
    string memory tokenURI = string(
      abi.encodePacked(baseTokenURI, Strings.toString(newItemId))
    );

    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);

    _tokenIds.increment();
    return newItemId;
  }

  // Returns all the minted NFTs
  function getItems() public view returns (uint256[] memory) {
    uint256 itemCount = _tokenIds.current();

    uint256[] memory ids = new uint256[](itemCount);

    for (uint256 i = 0; i < itemCount; i++) {
      ids[i] = i;
    }

    return ids;
  }
}
