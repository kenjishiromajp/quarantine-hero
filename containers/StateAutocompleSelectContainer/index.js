import React, { useState } from 'react';
import { Select } from 'antd';
import { API_URL } from '../../constants';
const { Option } = Select;

const StateAutocompleteSelectContainer = ({ countryId, ...props }) => {
  const [states, setStates] = useState([]);
  const handleSearch = async ( value ) => {
    if ( value ) {
      try{
        // const url = `${API_URL}/states{countryId ? `?countryId=${countryId}` : ''}`;
        // const res = await fetch( url );
        // const suburbs = await res.json();
        // setStates(states);
        setStates([
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
      setStates([]);
    }
  };
  const options = states.map(d => <Option key={d.id}>{d.name}</Option>);
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

export default StateAutocompleteSelectContainer;
