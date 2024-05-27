import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { SERVER_URL } from "../environment";
import { UserContext } from '../UserContext';


const Login = () => {
  // VARIABLES
  const navigate = useNavigate();

  // HOOKS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("Login");
  const { setUserInfo } = useContext(UserContext);

  // METHODS
  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(`${SERVER_URL}/api/auth/user/login`, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })



      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
          navigate("/");
        })
        toast.success("Logged in successfully!");

      } else {

        setLoading("Login")
        response.json().then(userInfo => {
          toast.error(userInfo.message);
        })
      }

    } catch (error) {
      setLoading("Login")
      toast.error("Internal server error. Please try again later.");
    }

  }

  const handleLoading = (e) => {
    if (email && password) {
      setLoading("Please wait...");
    }
  }
  return (
    <>
      <main>
        <section className="container card-width d-flex flex-column align-items-center my-5 shadow p-5 mb-5 bg-body rounded">
          <h4 className="display-6 mb-4">Welcome Back</h4>
          <form onSubmit={handleLogin} className="d-flex flex-column gap-3 w-auto border rounded p-4">
            <input type="email" value={email} onChange={ev => { setEmail(ev.target.value) }} className="email form-control" placeholder="email" required />
            <input type="password" value={password} onChange={ev => { setPassword(ev.target.value) }} className="password form-control" placeholder="password" required />
            <p>Don't have an account?<Link to="/signup">Create here.</Link></p>
            <button onClick={handleLoading} className="btn btn-outline-dark">{loading}</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Login