# 🎮 Token Game App
Token Game App is a blockchain-based decentralized application (dApp) that allows users to create their own fungible tokens (ERC20) with a single click. It simplifies the process of token creation and demonstrates how blockchain can be used to gamify token generation.

---
## 🚀 Features

One-click Create Token functionality
Tokens are compliant with the ERC20 standard
All tokens are minted directly to the connected wallet
Fully decentralized using Ethereum blockchain
Integrated with MetaMask for secure wallet interaction

---

## 🧠 How It Works

User connects their wallet via MetaMask
Clicking the Create Token button sends a transaction to the smart contract
A new fungible token is deployed to the blockchain
The token is automatically minted to the user’s wallet

---

## 🛠️ Tech Stack

Blockchain Platform: Ethereum
Smart Contracts: Solidity, Hardhat
Frontend: React, Ethers.js
Wallet Integration: MetaMask
Token Standard: ERC20 (OpenZeppelin-based)

---

## 🔧 Installation & Usage

### 1. Clone the Repo
```bash
git clone git@github.com:kanyas03/Token-Game.git
cd token-game
```
### 2. Install Smart Contract Dependencies
```bash
cd smart-contract
npm install
npx hardhat compile
```
### 3. Deploy Smart Contract
```bash
npx hardhat run scripts/deploy.js --network sepolia
```
### 4. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```
## 🔗 MetaMask Setup

Install MetaMask
Connect to the same network (e.g., Sepolia Testnet)
Import test ETH from a faucet (e.g., https://sepoliafaucet.com)

## 🔐 Security

All tokens are minted to the sender's wallet
Each token has a unique contract address
Uses OpenZeppelin contracts for security standards

## 📜 License

This project is licensed under the MIT License.


## 🙌 Acknowledgements
Hardhat

Ethers.js

OpenZeppelin Contracts

MetaMask


