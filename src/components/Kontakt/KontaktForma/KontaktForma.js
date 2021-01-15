import React from "react";
import "./KontaktForma.scss";

import emailjs from "emailjs-com";

const KontaktForma = () => {
  const sendMail = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.init("user_m5hXiIuk1iUHwe4fmK8j6");
    // emailjs.sendForm("user_m5hXiIuk1iUHwe4fmK8j6",'template_vmor4be', e.target,"user_m5hXiIuk1iUHwe4fmK8j6").then(
    //   (result) => {
    //     alert("Message Sent, I'll get back to you shortly", result.text);
    //   },
    //   (error) => {
    //       console.log(error)
    //     alert("An error occured, Plese try again", error.text);
    //   }
    // );

    emailjs.send("service_juismn6", "template_vmor4be", {
        namn:e.target.namn.value,
        efternamn:e.target.efternamn.value,
        telefon:e.target.telefon.value,
        email:e.target.email.value,
        message:e.target.message.value
    }).then(
      function (response) {
        alert("Meddelande skickat!")
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
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

export default KontaktForma;
