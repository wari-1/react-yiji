import moment from "moment";
const time = item => {
  if (item.isDisplaying) {
    const m1 = moment().format("YYYY-MM-DD HH:mm:ss");
    const day = moment(item.endTime).diff(m1, "day");
    return day;
  } else {
    const m1 = moment().format("YYYY-MM-DD HH:mm:ss");
    const day = moment(item.startTime).diff(m1, "day");
    return day;
  }
};
export default { time };
