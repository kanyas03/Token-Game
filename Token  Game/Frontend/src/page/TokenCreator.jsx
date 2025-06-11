// src/TokenCreator.jsx
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import MyTokenABI from "../abi/MyToken.json";

const CONTRACT_ADDRESS = "0x8221737318ccdB7F817Da84FE6d774241BDA1D51";

const TokenCreator = () => {
  const [currentAccount, setCurrentAccount] = useState(null);

  useEffect(() => {
    checkWalletConnection();
  }, []);

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
    } else {
      alert("MetaMask not found");
    }
  };

  const handleCreateToken = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, MyTokenABI.abi, signer);
      const tx = await contract.createToken(currentAccount, ethers.parseUnits("1000", 18));
      await tx.wait();
      alert("Token created!");
    } catch (err) {
      console.error(err);
      alert("Error creating token: " + (err?.reason || "Unknown error"));
    }
  };

  return (
    <div className="App">
      <h1 className="text-2xl font-bold p-4">Token Game</h1>
      <button onClick={handleCreateToken}>Create Token</button>
    </div>
  );
};

export default TokenCreator;
