import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./SignUp1.css";

const SignUp1 = ({ className = "" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onSignInClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <section className={`login1 ${className}`}>
      <div className="welcome-back1">WELCOME BACK!</div>
      <div className="register-your-account">{`Register Your Account `}</div>
      <div className="input-field1">
        <div className="username2">
          <div className="name">Name</div>
          <TextField
            className="username-item"
            color="primary"
            label="Enter Your Name "
            required={true}
            fullWidth={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "81px" } }}
          />
        </div>
        <div className="username2">
          <div className="name">Email</div>
          <TextField
            className="username-item"
            color="primary"
            label="Enter Your Email "
            required={true}
            fullWidth={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "81px" } }}
          />
        </div>
        <div className="username2">
          <div className="name">Password</div>
          <TextField
            className="password-item"
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
      </div>
      <button className="sign-in2" onClick={onSignInClick}>
        <div className="sign-up2">Sign up</div>
      </button>
      <div className="social-title1">
        <button className="or-continue-with-container">
          <div className="or-continue-with1">or continue with</div>
        </button>
        <img className="social-title-item" alt="" src="/vector-1@2x.png" />
      </div>
      <div className="social-login1">
        <button className="social-login-child">
          <img className="frame-child51" alt="" src="/frame-18@2x.png" />
        </button>
        <button className="iconfont-awesome-freebrands-container">
          <img
            className="iconfont-awesome-freebrands1"
            alt=""
            src="/iconfont-awesome-freebrandsffacebook@2x.png"
          />
        </button>
        <button className="social-login-child">
          <img className="apple-icon1" alt="" src="/apple@2x.png" />
        </button>
      </div>
    </section>
  );
};

SignUp1.propTypes = {
  className: PropTypes.string,
};

export default SignUp1;
