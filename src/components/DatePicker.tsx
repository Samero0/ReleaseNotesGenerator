import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  value: Date | null;  
  onChange: (date: Date | null) => void;  
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ value, onChange }) => {

  return (
    <DatePicker
      selected={value}   
      onChange={onChange} 
      showIcon
      dateFormat="yyyy-MM-dd" 
    />
  );
};

export default CustomDatePicker;
