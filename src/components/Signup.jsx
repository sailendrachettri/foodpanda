import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <main>
            <section className="container card-width d-flex flex-column align-items-center my-4 shadow p-5 mb-5 bg-body rounded">
                <h4 className="display-6 mb-4">Welcome User</h4>
                <form className="d-flex flex-column gap-3 w-auto border rounded p-4">
                    <input type="text" className="form-control" name="fullname" placeholder="full name" />
                    <input type="email" className="email form-control" name="email" placeholder="email" />
                    <input type="password" className="password form-control" name="password" placeholder="password" />
                    <input type="password" className="password form-control" name="cpassword"placeholder="confirm password" />
                    <input type="number" className="form-control" name="phone" placeholder="phone" />
                    <p>Already have an account <Link to="/login">Login</Link> here</p>
                    <button type="submit" name="submit" className="btn btn-outline-dark">Signup</button>
                </form>
            </section>
        </main>
    </>
  )
}

export default Signup