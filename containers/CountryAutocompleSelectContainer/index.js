import React, { useState } from 'react';
import { Select } from 'antd';
import { API_URL } from '../../constants';
const { Option } = Select;

const CountryAutocompleteSelectContainer = ({ ...props }) => {
  const [countries, setCountries] = useState([]);
  const handleSearch = async ( value ) => {
    if ( value ) {
      try{
        // const url = `${API_URL}/countries`;
        // const res = await fetch( url );
        // const countries = await res.json();
        // setCountries(countries);
        setCountries([
          {
            id: 1,
            name: 'Loucura',
          },
          {
            id: 2,
            name: 'Loucura2',
          },
          {
            id: 3,
            name: 'Loucura3',
          }
        ]);
      }catch(err){
        console.log(err);
        // throw new err;
      }
    } else {
      setCountries([]);
    }
  };
  const options = countries.map(d => <Option key={d.id}>{d.name}</Option>);
  return (
    <Select
      showSearch
      {...props}
      onSearch={handleSearch}
    >
      {options}
    </Select>
  )
};

export default CountryAutocompleteSelectContainer;
