import React, { useState } from "react";
import axios from "axios";
import CountryData from "./components/CountryData";
function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  const getCountry = (status, callCod) => {
    let textUrl = encodeURIComponent(callCod);
    console.log(textUrl);
    let endPoint = `https://restcountries.eu/rest/v2/${status}/${textUrl}`;
    //console.log(endPoint);
    axios(endPoint)
      .then((res) => setResult(res.data))
      .catch((err) => console.log(`err ${err}`));
  };
  function submitHandle(e) {
    e.preventDefault();
    getCountry("callingcode", userInput);
  }
  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={submitHandle}>
        <input
          type="number"
          value={userInput}
          onChange={changeHandle}
          placeholder="Enter the calling Code "
        />
        <button type="submit">Search</button>
      </form>

      <CountryData result={result} getCountry={getCountry}></CountryData>
    </React.Fragment>
  );
}

export default App;
