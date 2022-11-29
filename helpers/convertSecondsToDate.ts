import moment from "moment";

export const convertSecondsToDate = (seconds: number) => {
  var t = new Date(Date.UTC(1970, 0, 1));
  t.setUTCSeconds(seconds);
  const date = moment(t).format("DD MMM YYYY, h:mm a");
  return date;
};
