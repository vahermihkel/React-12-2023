import { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

function Profiil() {
  const emailRef = useRef();
  const aadressRef = useRef();
  const telefonRef = useRef();
  const [email, muudaEmail] = useState(localStorage.getItem("email") || "E-mail sisestamata");
  const [aadress, muudaAadress] = useState(localStorage.getItem("aadress") || "Aadress sisestamata");
  const [telefon, muudaTelefon] = useState(localStorage.getItem("telefon") || "Telefon sisestamata");

  const salvestaEmail = () => {
    // if / else   kui on kõik korras, siis lisa, kui ei ole, siis ära lisa
    // stringi funktsioone --> .length  ,   includes()  ,   .startsWith()
    if (emailRef.current.value.includes("@") === false ) {
      toast.error("E-mail ei ole sobival kujul!");
      return;
    }
    
    localStorage.setItem("email", emailRef.current.value);
    muudaEmail(emailRef.current.value);
    emailRef.current.value = "";

    // kui ei lisa, siis teeme toasti (hüpikakna)
  }

  const salvestaAadress = () => {
    //if (aadressRef.current.value.charAt(0) === aadressRef.current.value.charAt(0).toLowerCase()) {
    if (aadressRef.current.value[0] === aadressRef.current.value[0].toLowerCase()) {
      toast.error("Peab algama suure algustähega!");
      return;
    }

    localStorage.setItem("aadress", aadressRef.current.value);
    muudaAadress(aadressRef.current.value);
    aadressRef.current.value = "";
  }

  // +37255123456    12
  const salvestaTelefon = () => {
    if (telefonRef.current.value.startsWith("+372") === false) {
      toast.error("Peab algama Eesti suunakoodiga!");
      return;
    } 

    if (telefonRef.current.value.length !== 12) {
      toast.error("Peab olema 12 numbrit telefoninumbris!");
      return;
    }

    localStorage.setItem("telefon", telefonRef.current.value);
    muudaTelefon(telefonRef.current.value);
    telefonRef.current.value = "";
  }

  return (
    <div>
      <div>Kasutaja e-mail: {email}</div>
      <div>Kasutaja aadress: {aadress}</div>
      <div>Kasutaja telefon: {telefon}</div>
      <br />
      <label>E-mail</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={salvestaEmail}>Salvesta</button> <br />
      <br />
      <label>Aadress</label> <br />
      <input ref={aadressRef} type="text" /> <br />
      <button onClick={salvestaAadress}>Salvesta</button> <br />
      <br />
      <label>Telefon</label> <br />
      <input ref={telefonRef} type="text" /> <br />
      <button onClick={salvestaTelefon}>Salvesta</button> <br />
      <br />
      <ToastContainer
        position="bottom-right"
        theme="dark"
      />
    </div>
  )
}

export default Profiil