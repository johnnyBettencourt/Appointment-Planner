import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>Title: {name}
        <input value={name} type="text" name="name" id="title" placeholder="Title" onChange={(e) => setName(e.target.value)} />
      </label>
      <label>Date: {date}
        <input value={date} type="date" name="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} min={getTodayString()}/>
      </label>
      <label>Time: {time}
        <input value={time} type="time" name="time" placeholder="Time" onChange={(e) => setTime(e.target.value)} min={getTodayString()}/>
      </label>
      <ContactPicker contacts={contacts} contact={contact} setContact={setContact}/>
      <button type="submit">Submit</button>
    </form>
  );
};
