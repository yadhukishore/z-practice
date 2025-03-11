import React, { useEffect, useState } from "react";
import { Form, Input } from "informed";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { userAtom, isAuthenticatedAtom } from "../../atom";
import { useLogin } from "../../services/auth";

const Login = () => {
  const [, setUser] = useAtom(userAtom);
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();
  const { trigger, isMutating } = useLogin();

  // Redirect to /userzz if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/userzz", { replace: true }); // Prevent going back to login
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async ({ values }) => {
    try {
      const userData = await trigger(values);
      setUser(userData);
      setIsAuthenticated(true);
      navigate("/userzz", { replace: true }); // Replace login in history
    } catch (error) {
      console.error("Login failed:", error);
      setFormError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Input field="username" id="username" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input field="password" id="password" type="password" required />
        </div>

        <button type="submit" disabled={isMutating}>
          {isMutating ? "Logging in..." : "Login"}
        </button>

        {formError && <div className="form-error">{formError}</div>}
      </Form>
    </div>
  );
};

export default Login;
