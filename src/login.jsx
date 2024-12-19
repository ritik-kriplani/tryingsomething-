import  { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // React Router hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect to the home page after form submission
    navigate("/home");
  };

  return (
    <div className="full">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-group">
            <button type="submit" className="btn">Login</button>
          </div>
        </form>
      </div>
      <div>
        <div className="notepad">
          By Team <br /><br />
          <b>JECRC</b>
        </div>
      </div>
    </div>
  );
};

export default Login;
