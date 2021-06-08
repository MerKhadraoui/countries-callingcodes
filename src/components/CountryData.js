import React from "react";
const CountryData = ({ result }) => {
  console.log({ result });
  const country = result.map((obj, i) => {
    const { name, alpha2Code, callingCodes, capital, languages, flag } = obj;
    return (
      <div key={i} className="content">
        <div>
          <h2> country : {name}</h2>
          <h3> code : {alpha2Code} </h3>
        </div>
        <div>
          <h2>capital: {capital} </h2>
        </div>
        <div>
          <h3> calling Code : {callingCodes}</h3>
        </div>
        <img className="image" src={flag} alt={name} />
      </div>
    );
  });
  return <React.Fragment>{country}</React.Fragment>;
};
export default CountryData;
