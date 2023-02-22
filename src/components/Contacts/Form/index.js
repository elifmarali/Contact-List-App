import React, { useEffect } from "react";
import { useState } from "react";
function Form({ addContacts, contacts }) {
  const initialFormValue = { fullname: "", phone_number: "" };
  const [form, setForm] = useState(initialFormValue);

  useEffect(() => {
    setForm(initialFormValue);
  }, [contacts]);

  //Fonksiyon sayesinde bir inputun icerigi degistigi anda bunun state a atamasini yapilacak
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //butona bastigimiz anda olacak olan fonksiyonlar
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btnClass">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
