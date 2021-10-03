import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default function App() {
  const[selectedDate,setSelectedDate] = useState(null);
  return (
    <div className="App">
     <DatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)} />
     
    </div>
  );
}
