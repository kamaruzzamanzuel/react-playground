import {
  format as dfFormat,
  parse as dfParse,
  addDays as dfAddDays,
  differenceInCalendarDays as dfDifferenceInCalendarDays,
  differenceInMinutes as dfDifferenceInCalendarMinutes
} from 'date-fns';


export const formatDateTime = (date: Date) => {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();

  return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hour + ':' + minute;
};

/**
 * @param  {string|number|Date} date - Date to be formatted
 * @param  {string} [format=dd/MM/yyyy] - Format to be used, default is "dd/MM/yyyy"
 * @return {string} - Formatted date
 */
export const formatDateToString = (date?: string | number | Date | null, format = "dd/MM/yyyy") => {
  // console.log({ date });

  // return (moment(new Date(date)).format(format)).toString();
  if (!date) {
    return "";
  }

  return dfFormat(new Date(date), format);
};