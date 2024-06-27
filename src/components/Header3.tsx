import { useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header3.css";

const Header3 = ({ className = "" }) => {
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
    <header className={`header112 ${className}`}>
      <header className="header113">
        <header className="header114">
          <header className="header113">
            <header className="header114">
              <div className="header7">
                <button className="logosvs5" onClick={onLogosvsClick}>
                  <img className="vector-icon22" alt="" src="/vector@2x.png" />
                  <img className="vector-icon23" alt="" src="/vector@2x.png" />
                </button>
                <div className="container47" />
                <div className="label6">
                  <div className="combobox-listbox5">
                    <Autocomplete
                      className="input-main-auto-suggest5"
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
                  <button className="button-search5">
                    <img className="image-icon10" alt="" src="/image@2x.png" />
                  </button>
                </div>
                <Autocomplete
                  className="container48"
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
                <div className="frame218">
                  <div className="menuitem-notification5">
                    <div className="button-notifications5">
                      <img
                        className="image-icon11"
                        alt=""
                        src="/image@2x.png"
                      />
                    </div>
                  </div>
                  <button
                    className="list-your-business-wrapper3"
                    onClick={onFrameButtonClick}
                  >
                    <div className="list-your-business5">
                      List Your Business
                    </div>
                  </button>
                  <div className="frame-child49" />
                  <button className="menuitem10">
                    <div
                      className="menuitem11"
                      onClick={onMenuitemContainerClick}
                    >
                      <div className="button-loginsign-up5">
                        <div className="container49">
                          <div className="login-sign5">Login / Sign Up</div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </header>
          </header>
        </header>
      </header>
    </header>
  );
};

Header3.propTypes = {
  className: PropTypes.string,
};

export default Header3;
