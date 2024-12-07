function FigureDate(props) {
  const dateString = props.date;
  const dateParts = dateString.split("-");

  const [day, month, year] = dateParts;
  const formattedDate = `${year}-${month}-${day}`;

  const dateOfBirth = new Date(formattedDate);

  let dayFormatted = dateOfBirth.toLocaleString("en-US", { day: "2-digit" });
  let monthFormatted = dateOfBirth.toLocaleString("en-US", { month: "long" });
  let yearFormatted = dateOfBirth.getFullYear();

  return (
    <div className="date">
      <div className="date_day">{dayFormatted}</div>
      <div className="date_month">{monthFormatted}</div>
      <div className="date_year">{yearFormatted}</div>
    </div>
  );
}

export default FigureDate;
