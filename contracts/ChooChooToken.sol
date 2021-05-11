// contracts/ChooChooToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract ChooChooToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Choo-Choo Coin", "CHOO") {
        _mint(msg.sender, initialSupply);
    }
}