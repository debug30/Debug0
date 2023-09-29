import dayjs from "dayjs";

const formatDate = (dateString: any) => {
  const date = dayjs(dateString);
  const day = date.format("D");
  const month = date.format("MMMM");
  const year = date.format("YYYY");

  // Add a suffix to the day
  let daySuffix = "th";
  if (day === "1" || day === "21" || day === "31") {
    daySuffix = "st";
  } else if (day === "2" || day === "22") {
    daySuffix = "nd";
  } else if (day === "3" || day === "23") {
    daySuffix = "rd";
  }

  return `${day}${daySuffix} ${month} ${year}`;
};

export default formatDate;
