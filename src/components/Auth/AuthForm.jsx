import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';
import { loginUser, signupUser } from '../../services/authService';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setError(null);
  };

    const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value.trim();
    const enteredPassword = passwordInputRef.current.value.trim();

    if (!enteredEmail || !enteredPassword) {
      setError("Please enter both email and password.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      let data;

      if (isLogin) {
       
        data = await loginUser(enteredEmail, enteredPassword);
      } else {
       
        data = await signupUser(enteredEmail, enteredPassword);
      }

      console.log("Auth Success:", data);

     
      localStorage.setItem("token", data.idToken);

    
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        {error && <p className={classes.error}>{error}</p>}
        <div className={classes.actions}>
          <button type='submit' disabled={isLoading}>
            {isLoading ? (
              <>
                <span className={classes.loader} />
                {isLogin ? 'Logging in...' : 'Signing up...'}
              </>
            ) : (
              isLogin ? 'Login' : 'Sign Up'
            )}
          </button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
            disabled={isLoading}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
