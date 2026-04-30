import { useState, useRef, useContext } from "react";
import classes from "./ProfileForm.module.css";
import { AuthContext } from "../../context/AuthContext";
import { changePassword } from "../../services/authService";



const ProfileForm = () => {
  const passwordInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const authCtx = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current.value.trim();

    if (!enteredPassword || enteredPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
   
      const data = await changePassword(authCtx.token, enteredPassword);

      authCtx.login(data.idToken);

      setSuccess("Password updated successfully");

      // optional: clear input
      passwordInputRef.current.value = "";

    } catch (err) {
      setError(err.message);

      // handle expired session
      if (
        err.message.toLowerCase().includes("session") ||
        err.message.toLowerCase().includes("invalid")
      ) {
        authCtx.logout();
      }

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={passwordInputRef}
        />
      </div>

      {error && <p className={classes.error}>{error}</p>}
      {success && <p className={classes.success}>{success}</p>}

      <div className={classes.action}>
        <button disabled={isLoading}>
          {isLoading ? "Updating..." : "Change Password"}
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;