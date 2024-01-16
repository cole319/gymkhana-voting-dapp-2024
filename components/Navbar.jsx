import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [accountAddress, setAccountAddress] = useState("");

  useEffect(() => {
    getConnectedWalletAddress();
    walletStateModifier();
  });

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccountAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install Metamask");
    }
  };

  const getConnectedWalletAddress = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          setAccountAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("You're not connected to Metamask");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.error("install metamask");
    }
  };

  const walletStateModifier = async () => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccountAddress(accounts[0]);
        console.log(accounts[0]);
        // console.log(accounts[0]);
      });
    } else {
      setAccountAddress("");
      console.log("Please install Metamask");
    }
  };

  return (
    <div>
      <div className="bg-sky-950 px-40 py-3 flex justify-between items-center ">
        {/* <div className="bg-gradient-to-r from-slate-900  to-transparent px-40 py-3 flex justify-between items-center fixed w-full"> */}
        <div className="font-bold text-2xl">LOGO</div>
        <div>
          <button
            className="w-fit bg-[#FC4F00] text-neutral-50 font-semibold px-4 py-1 text-lg 
                    rounded-md border-2 border-[#FC4F00] hover:bg-transparent hover:border-neutral-50"
            onClick={connectWallet}
          >
            {accountAddress && accountAddress.length > 0
              ? `${accountAddress.substring(0, 6)}...${accountAddress.substring(
                  accountAddress.length - 6
                )}`
              : `Connect Wallet`}
          </button>
        </div>
      </div>
    </div>
  );
}
