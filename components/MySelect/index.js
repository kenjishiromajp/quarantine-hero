import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const MySelect = ({ arrayData, id='id', label='name', emptyLabel = "Select a value", ...props }) => (
  <Select {...props} disabled={!!arrayData.length==0} >
    <Option key="0" value={null}>{emptyLabel}</Option>
    {arrayData.map(dataItem => (
      <Option key={dataItem[id]} value={dataItem[id]}>{dataItem[label]}</Option>
    ))}
  </Select>
);

export default MySelect;
