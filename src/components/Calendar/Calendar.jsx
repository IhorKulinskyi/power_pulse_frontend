import DatePicker from 'react-datepicker';
import { DatePickerWrapper } from './Calendar.styled';
import 'react-datepicker/dist/react-datepicker.css';

export const Calendar = ({ input, selectedDate, setSelectedDate }) => {
  return (
    <DatePickerWrapper>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        customInput={input}
        calendarStartDay={1}
      />
    </DatePickerWrapper>
  );
};
