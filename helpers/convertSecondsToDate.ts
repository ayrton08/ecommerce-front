import moment from "moment";

export const convertSecondsToDate = (seconds: number) => {
  const time = new Date(Date.UTC(1970, 0, 1));
  time.setUTCSeconds(seconds);
  const date = moment(time).format("DD MMM YYYY, h:mm a");
  return date;
};
