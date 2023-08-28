import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit} >
      <input value={name} type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input value={phone} type="text" name="phone" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
      <input value={email} type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

