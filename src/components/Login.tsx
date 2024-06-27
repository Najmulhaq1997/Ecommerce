import { useState, useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Login.css";

const Login = ({ className = "" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onSignInClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={`login ${className}`}>
      <h2 className="welcome-back">WELCOME BACK!</h2>
      <button className="dont-have-a-container">
        <span className="dont-have-a">{`Don’t have a account, `}</span>
        <b className="sign-up1">Sign up</b>
      </button>
      <div className="input-field">
        <div className="username">
          <h3 className="username1">Username</h3>
          <TextField
            className="username-child"
            color="primary"
            label="deniel123@gmail.com"
            required={true}
            fullWidth={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "81px" } }}
          />
        </div>
        <div className="username">
          <h3 className="username1">Password</h3>
          <TextField
            className="password-child"
            color="primary"
            required={true}
            fullWidth={true}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleShowPasswordClick}
                    aria-label="toggle password visibility"
                  >
                    <Icon>
                      {showPassword ? "visibility_off" : "visibility"}
                    </Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ "& .MuiInputBase-root": { height: "80px" } }}
          />
        </div>
        <div className="remenber">
          <div className="group-parent">
            <FormControlLabel
              className="group-formcontrollabel"
              label=""
              control={<Checkbox defaultChecked size="2x" />}
            />
            <div className="remember-me-wrapper">
              <div className="remember-me">Remember me</div>
            </div>
          </div>
          <button className="frame-wrapper33">
            <div className="frame264">
              <div className="forget-password">Forget password?</div>
            </div>
          </button>
        </div>
      </div>
      <button className="sign-in" onClick={onSignInClick}>
        <h3 className="sign-in1">Sign In</h3>
      </button>
      <div className="social-title">
        <button className="or-continue-with-wrapper">
          <div className="or-continue-with">or continue with</div>
        </button>
        <img className="social-title-child" alt="" src="/vector-1@2x.png" />
      </div>
      <div className="social-login">
        <button className="social-login-inner">
          <img className="frame-child50" alt="" src="/frame-18@2x.png" />
        </button>
        <button className="iconfont-awesome-freebrands-wrapper">
          <img
            className="iconfont-awesome-freebrands"
            alt=""
            src="/iconfont-awesome-freebrandsffacebook@2x.png"
          />
        </button>
        <button className="social-login-inner">
          <img className="apple-icon" alt="" src="/apple@2x.png" />
        </button>
      </div>
    </section>
  );
};

Login.propTypes = {
  className: PropTypes.string,
};

export default Login;
