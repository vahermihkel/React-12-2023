import AuthForm from "../../components/AuthForm"


const Login = () => {
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="

  return (
    <AuthForm authUrl={url} buttonName="Login" />
  )
}

export default Login