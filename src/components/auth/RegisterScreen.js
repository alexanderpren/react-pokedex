import React from 'react';
import {Link} from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div>
        <h3 className="auth__title mb-5">Register</h3>
        <form action="">
        <input type="text" autoComplete="off" placeholder="Name" name="name"  className="auth__input" />
          <input type="text" autoComplete="off" placeholder="Email" name="email"  className="auth__input" />
          <input type="password" autoComplete="off" placeholder="Password" name="password" className="auth__input" />
          <input type="password" autoComplete="off" placeholder="Confirm Password" name="password2" className="auth__input" />
          <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>

          <hr />
  
          <Link className="link" to="/auth/login">Already Registered?</Link>
        </form>
      </div>
    )
}
