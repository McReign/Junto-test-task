import moment from "moment";

const format = 'DD.MM.YYYY';

export const dateCompare = (a, b) => { //сортировка даты по убыванию
  if(moment(a.date, format) > moment(b.date, format)) return -1;
  if(moment(a.date, format) < moment(b.date, format)) return 1;
};

export const priceCompare = (a, b) => { //сортировка цены по убыванию
  if(+a.price > +b.price) return -1;
  if(+a.price < +b.price) return 1;
};

export const filterByDate = (data) => { //фильрация элементов массива по промежутку даты
  const dates = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')).homePage.dates : [];
  if (localStorage.getItem('data') && dates[0] && dates[1]) {
    return data.filter(item =>
      moment(item.date, format).add(1, 'day') >= moment(dates[0]) &&
      moment(item.date, format) <= moment(dates[1]))
  }
  return data;

};