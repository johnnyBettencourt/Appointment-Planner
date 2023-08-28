import React, { useEffect, useState } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  let [name, setName] = useState('');
  let [phone, setPhone] = useState('');
  let [email, setEmail] = useState('');
  let [isDuplicate, setIsDublicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    contacts.find(el => el.name === name) ? 
    setIsDublicate(true) :
    setIsDublicate(false);
  }, [name, contacts])
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {isDuplicate && <h4 style={{color: 'red'}}>Error: This contact already exists.</h4>}
        <ContactForm
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList arr={contacts} />
      </section>
    </div>
  );
};
