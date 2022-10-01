import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

import eth from '../../../eth.jpg';
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction, transactions, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-10 px-4">
        <div className="flex flex justify-start items-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient">
          Send your funds<br/> across the world !!
          
          </h1>
          <p className="text-center mt-10 text-white font-light w-full text-base">
            Explore the world of "<b>Digital currency"</b><br/> <p className="text-center"> Do transfer using </p><p className="font-semibold text-center">Krypto !!</p>
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-7 bg-[#2952e3] w-full rounded-full cursor-pointer"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base bg-[#2952e3] rounded-full w-full flex-row cursor-pointer p-3 font-semibold hover:bg-[#2546bd]">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles} font-medium`}>
              Reliable
            </div>
            <div className={`${companyCommonStyles} font-medium`}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles} font-medium`}>
              Easy to Use
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles} font-medium`}>
              Ethereum
            </div>
            <div className={`${companyCommonStyles} font-medium`}>Low fee</div>
            <div className={`rounded-br-2xl ${companyCommonStyles} font-medium`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <img src={eth} className="flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-2" />
        
          <div className="p-5 mt-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Receiver Address" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-300 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
