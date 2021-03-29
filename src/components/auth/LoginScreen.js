import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {useForm} from "../../hooks/useForm"
import {login} from "../../actions/auth"

export const LoginScreen = () => {

const [formValues, handleInputChange] = useForm({ email: "prueba@gmail.com", password: "123456" });
const {email, password} = formValues;

const dispatch = useDispatch()
const handleLogin = (e) => {
  e.preventDefault();
  
  dispatch(login(12345, "Alex"));
}

    return (
      <div>
        <h3 className="auth__title mb-5">Login</h3>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Email"
            name="email"
            className="auth__input"
            value={email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            name="password"
            className="auth__input"
            value={password}
          />
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>

          <hr />
          <div className="auth__social-metworks">
            <p>Login with Social Networks</p>
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </div>
          <Link className="link" to="/auth/register">
            Create New Account
          </Link>
        </form>
      </div>
    );
}
