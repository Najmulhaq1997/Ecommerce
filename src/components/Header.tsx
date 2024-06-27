import { useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogosvsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/list-your-product-page");
  }, [navigate]);

  const onMenuitemContainerClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  return (
    <div className={`header2 ${className}`}>
      <button className="logosvs1" onClick={onLogosvsClick}>
        <img className="vector-icon10" alt="" src="/vector@2x.png" />
        <img className="vector-icon11" alt="" src="/vector@2x.png" />
      </button>
      <div className="container17" />
      <div className="label2">
        <div className="combobox-listbox1">
          <Autocomplete
            className="input-main-auto-suggest1"
            sx={{ width: "100%" }}
            disablePortal
            options={["SmartZen", "ProMobile"]}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                label="Search"
                variant="outlined"
                placeholder=""
                helperText=""
              />
            )}
          />
        </div>
        <button className="button-search1">
          <img className="image-icon2" alt="" src="/image@2x.png" />
        </button>
      </div>
      <Autocomplete
        className="container18"
        sx={{ width: 343 }}
        disablePortal
        options={["kalmunai", "colombo", "ampara"]}
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            label="Location"
            variant="outlined"
            placeholder=""
            helperText=""
          />
        )}
      />
      <div className="frame84">
        <div className="menuitem-notification1">
          <div className="button-notifications1">
            <img className="image-icon3" alt="" src="/image@2x.png" />
          </div>
        </div>
        <button
          className="list-your-business-container"
          onClick={onFrameButtonClick}
        >
          <div className="list-your-business1">List Your Business</div>
        </button>
        <div className="frame-child36" />
        <button className="menuitem2">
          <div className="menuitem3" onClick={onMenuitemContainerClick}>
            <div className="button-loginsign-up1">
              <div className="container19">
                <div className="login-sign1">Login / Sign Up</div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
