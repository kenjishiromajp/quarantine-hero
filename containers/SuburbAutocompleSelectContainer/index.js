import React, { useState } from 'react';
import { Select } from 'antd';
import { API_URL } from '../../constants';
const { Option } = Select;

const SuburbAutocompleteSelectContainer = ({ cityId, ...props }) => {
  const [suburbs, setSuburbs] = useState([]);
  const handleSearch = async ( value ) => {
    if ( value ) {
      try{
        // const url = `${API_URL}/suburbs${cityId ? `?cityId=${cityId}` : ''}`;
        // const res = await fetch( url );
        // const suburbs = await res.json();
        // setSuburbs(suburbs);
        setSuburbs([
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
      setSuburbs([]);
    }
  };
  const options = suburbs.map(d => <Option key={d.id}>{d.name}</Option>);
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

export default SuburbAutocompleteSelectContainer;
