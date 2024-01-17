import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

type AuthFormProps = {
  authUrl: string
  buttonName: string
}

const AuthForm = ({ authUrl, buttonName }: AuthFormProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const { setLoggedIn } = useContext(AuthContext);
  const url = authUrl + process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  const submit = () => {
    if(emailRef.current === null || passwordRef.current === null) {
      return;
    }

    const payload = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
      "returnSecureToken": true
    }
    const headers = {
      "Content-Type": "application/json"
    }
    fetch(url, {"method": "POST", "body": JSON.stringify(payload), "headers": headers})
      .then(res => res.json())
      .then(json => {
        if (json.error === undefined) {
          setLoggedIn(true);
          navigate("/admin");
          sessionStorage.setItem("token", json.idToken);
        } else {
          setMessage(json.error.message);
        }
      })
  }

  return (
    <div>
      <div>{message}</div>
      <label>E-mail</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label> <br />
      <input ref={passwordRef} type="password" /> <br />
      <button onClick={submit}>{buttonName}</button>
    </div>
  )
}

export default AuthForm