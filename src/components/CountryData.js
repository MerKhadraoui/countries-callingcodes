import React from "react";
const CountryData = ({ result, getCountry }) => {
  const country = result.map((obj, i) => {
    const {
      name,
      alpha2Code,
      callingCodes,
      borders,
      languages,
      capital,
      flag,
    } = obj;
    return (
      <div key={i} className="content">
        <div>
          <h2>
            {" "}
            country : {name} ( code : {alpha2Code}){" "}
          </h2>
        </div>

        <div>
          <h2>capital: {capital}</h2>
        </div>
        <div>
          <h3> calling Code : {callingCodes}</h3>
        </div>
        <img className="image" src={flag} alt={name} />
        <div>
          <h5>
            Show more about
            {borders.map((border, i) => (
              <i
                className="bordor"
                key={i}
                onClick={() => getCountry("name", border)}
              >
                &nbsp;&nbsp; <button>{border}</button>
              </i>
            ))}
          </h5>
        </div>
        <div>
          <h4>
            language:
            {languages.map((lang) => (
              <h4 onClick={() => getCountry("lang", lang.iso639_1)}>
                <button className="lang">
                  {" "}
                  More countrie speak {lang.name}
                </button>
              </h4>
            ))}
          </h4>
        </div>
      </div>
    );
  });
  return <React.Fragment>{country}</React.Fragment>;
};
export default CountryData;
