import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
     <main>
            <section  className="container card-width d-flex flex-column align-items-center my-5 shadow p-5 mb-5 bg-body rounded">
                <h4 className="display-6 mb-4">Welcome Back</h4>
                <form className="d-flex flex-column gap-3 w-auto border rounded p-4">
                    <input type="email" name="email" className="email form-control" placeholder="email" />
                    <input type="password" name="password" className="password form-control" placeholder="password" />
                    <p>Don't have an account <Link to="/signup">Create</Link> here</p>
                    <button className="btn btn-outline-dark">Signup</button>
                </form>
            </section>
        </main>
    </>
  )
}

export default Login