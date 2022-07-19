
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import React from 'react';
import {useState} from 'react';

export default function CalendarPage() {

  const [date, setDate] = useState('');
  const onChange = (value) => {

    setDate(value.format("YYYY-MM-DD"))
  }
 

  return(
    <Space direction="vertical">
    <DatePicker onChange={onChange} /> 
    
    <span>
      {date}
    </span>

    </Space> 
  )
}         

