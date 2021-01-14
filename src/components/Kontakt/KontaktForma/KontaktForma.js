import React from "react";
import "./KontaktForma.scss";

import emailjs from "emailjs-com";

const kontaktForma = () => {
  const sendMail = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser

    emailjs.sendForm("gmail",'template_vmor4be', e.target, 'user_m5hXiIuk1iUHwe4fmK8j6').then(
      (result) => {
        alert("Message Sent, I'll get back to you shortly", result.text);
      },
      (error) => {
          console.log(error)
        alert("An error occured, Plese try again", error.text);
      }
    );

    // console.log(e.target.namn.value)
    // emailjs.send("service_c4eaya5", "template_vmor4be", {
    //   namn: e.target.namn.value,
    //   efternamn: e.target.efternamn.value,
    //   to_name: "Andrej",
    //   from_name: e.target.namn.value + " " + e.target.efternamn.value,
    //   message: e.target.message.value,
    //   email: e.target.email.value,
    // });
  };

  return (
    <form className="KontaktForma" onSubmit={sendMail}>
      <div className="row">
        <input type="text" name="namn" placeholder="Namn" />
        <input type="text" name="efternamn" placeholder="Efternamn" />
      </div>
      <div className="row">
        <input type="text" name="telefon" placeholder="Telefon" />
        <input type="email" name="email" placeholder="E-mail" />
      </div>
      <textarea name="message" />
      <button type="submit">Skicka</button>
    </form>
  );
};

export default kontaktForma;
