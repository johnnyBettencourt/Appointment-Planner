import React from "react";

export const ContactPicker = ({ contacts, contact, setContact }) => {
  return (
    <label>Contact: {contact}
      <select onChange={(e) => {setContact(e.target.value)}} value={contact} name="contact">
        <option key='default' value=''>No Contact Selected</option>
        {
          contacts.map((item, i) => {
            return <option key={i} value={item.name} >{item.name}</option>
          })
        }
      </select>
    </label>
    
  );
};
