import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const dateInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button");


let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates;
    console.log(selectedDates[0]);
  },
};
const fp = flatpickr(dateInput, options);


iziToast.show({
  title: 'Error',
  message: 'Please choose a date in the future',
  backgroundColor: '#EF4040',
  titleColor: '#FFF',
  titleSize: '16px',
  messageColor: '#FFF',
  messageSize: '16px',
  position: 'topCenter'
});

