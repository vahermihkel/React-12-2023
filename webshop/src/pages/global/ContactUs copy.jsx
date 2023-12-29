import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();


  const sendEmail = () => {
    const data = {
      "from_name": nameRef.current.value,
      "from_email": emailRef.current.value,
      "message": messageRef.current.value
    }

    emailjs.send('service_fum24bj', 'template_ld2lsyd', data, 'Xbn0xj_4LjNugxYGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <label>Name</label> <br />
      <input type="text" ref={nameRef} /> <br />
      <label>Email</label> <br />
      <input type="email" ref={emailRef} /> <br />
      <label>Message</label> <br />
      <textarea name="message" ref={messageRef} /> <br />
      <button onClick={sendEmail}>Send</button><br />
    </div>
  );
}

export default ContactUs