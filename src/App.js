import React, { useState } from "react";
import CountryData from "./components/CountryData";
function App() {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState([]);
  function submitHandle(e) {
    e.preventDefault();
    let textUrl = encodeURIComponent(userInput);
    console.log(textUrl);
  }
  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  return (
    <React.Fragment>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Enter the calling Code "
        />
        <button type="submit">Search</button>
      </form>
      <div>{userInput} </div>
      <CountryData result={result}> </CountryData>
    </React.Fragment>
  );
}

export default App;
