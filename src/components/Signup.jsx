import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SERVER_URL } from "../environment";
import { toast } from 'react-toastify';
import PageLoading from '../utils/PageLoading';

const Signup = () => {
  // VARIABLES
  let navigate = useNavigate();

  // HOOKS
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("Signup");
  const [pageLoading, setPageLoading] = useState(true);

  // METHODS
  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${SERVER_URL}/api/auth/user/signup`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ fullname, password, cpassword, phone, email })
      })

      const data = await response.json();

      if (data.success) {
        toast.success(`Thank you ${fullname.split(" ")[0]} for registration.`);
        navigate("/login");

      } else {

        toast.error(data.message);
        setLoading("Signup")
      }
    } catch (error) {

      setLoading("Signup")
      toast.error("Internal server error. Please try again later.");
    }
  }

  const handleLoading = () => {
    // if user entered all the details then only show msg
    if (fullname && password && email && cpassword && phone)
      setLoading("Please wait...");
  }

  setTimeout(() => {
    setPageLoading(false);
  }, 2000);

  if (pageLoading) {
    return (
      <div className='d-flex justify-content-center align-items-center' style={{minHeight: '50vh'}}>
        <PageLoading />
      </div>
    );
  }

  return (
    <>
      <main>
        <section className="container card-width d-flex flex-column align-items-center my-4 shadow p-5 mb-5 bg-body rounded">
          <h4 className="display-6 mb-4">Welcome User</h4>
          <form onSubmit={handleSignup} className="d-flex flex-column gap-3 w-auto border rounded p-4">
            <input type="text" className="form-control" name="fullname" value={fullname} onChange={ev => { setFullname(ev.target.value) }} placeholder="full name" required />
            <input type="email" className="email form-control" value={email} onChange={ev => { setEmail(ev.target.value) }} name="email" placeholder="email" required />
            <input type="password" className="password form-control" value={password} onChange={ev => { setPassword(ev.target.value) }} name="password" placeholder="password" required />
            <input type="password" className="password form-control" value={cpassword} onChange={ev => setCpassword(ev.target.value)} name="cpassword" placeholder="confirm password" required />
            <input type="number" className="form-control" value={phone} onChange={ev => { setPhone(ev.target.value) }} name="phone" placeholder="phone" required />
            <p>Already have an account?<Link to="/login">Loginhere</Link> </p>
            <button onClick={handleLoading} type="submit" className="btn btn-outline-dark">{loading}</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default Signup