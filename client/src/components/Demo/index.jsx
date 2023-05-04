import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Title from "./Title";
import Cta from "./Cta";
import Contract from "./Contract";
import ContractBtns from "./ContractBtns";
import Contract_greeting from "./Contract_greeting";
import ContractBtns_greeting from "./ContractBtns_greeting"
import Desc from "./Desc";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";

function Demo() {
  const { state } = useEth();
  const [value, setValue] = useState("?");
  const [greeting, setGreeting] = useState("Non définie");


  const demo =
    <>
      <Cta />
      <div className="contract-container">
        <Contract value={value} />
        <ContractBtns setValue={setValue} />
      </div>
      <Desc />
      <div className="contract-container">

        <Contract_greeting value={greeting} />
        <ContractBtns_greeting setValue={setGreeting} />
      </div>
      <Desc />
    </>;

  return (
    <div className="demo">
      <Title />
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            demo
      }
    </div>
  );
}

export default Demo;
