import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

// GraphQL Query to Fetch Countries and Their States
const GET_COUNTRIES = gql`
  query {
    countries {
      name
      code
      states {
        name
      }
    }
  }
`;

const CountryStateDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  // Fetch data using Apollo Client
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const countries = data.countries;
  console.log('Countries data:', countries); // Debugging API response

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState('');
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const selectedCountryObj = countries.find(
    (country) => country.name === selectedCountry
  );

  // Ensure `states` is always an array
  const states = selectedCountryObj && selectedCountryObj.states ? selectedCountryObj.states : [];

  return (
    <div>
      <h1>DropDown</h1>
      <br />
      <label>Select Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a Country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
      <h2>{selectedCountry}</h2>
      <br />

      {selectedCountry && states.length > 0 ? (
        <>
          <label htmlFor="state">Select State:</label>
          <select id="state" value={selectedState} onChange={handleStateChange}>
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          <h2>{selectedState}</h2>
        </>
      ) : (
        selectedCountry && <p>No states available for this country.</p>
      )}
    </div>
  );
};

export default CountryStateDropdown;
