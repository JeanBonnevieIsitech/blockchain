import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import web3 from "web3";
import Test from "../../contracts/Test.json" 

function ContractBtns_greeting({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {

      setInputValue(e.target.value);

  };

  const getMYGreeting = async () => {
    const value = await contract.methods.getMYGreeting().call({ from: accounts[0] });
    if (value == ""){
      value = "Non définie";
    }
    setValue(web3.utils.toAscii(value));
  };

  const setGreeting = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }

    const newValue =  web3.utils.fromAscii(inputValue);
    await contract.methods.setGreeting(newValue).send({ from: accounts[0]});
  };

  return (
    <div className="btns">

      <button onClick={getMYGreeting}>
        Voir votre salutation
      </button>

      <div onClick={setGreeting} className="input-btn">
        éditer (<input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default ContractBtns_greeting;
