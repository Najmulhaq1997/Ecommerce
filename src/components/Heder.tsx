import { useMemo, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Heder.css";

const Heder = ({
  className = "",
  frameWidth,
  frameOverflow,
  frameAlignSelf,
  vector,
  vector1,
  image,
  image1,
  framePosition,
  frameTop,
  frameLeft,
}) => {
  const frame1Style = useMemo(() => {
    return {
      width: frameWidth,
      overflow: frameOverflow,
      alignSelf: frameAlignSelf,
      position: framePosition,
      top: frameTop,
      left: frameLeft,
    };
  }, [
    frameWidth,
    frameOverflow,
    frameAlignSelf,
    framePosition,
    frameTop,
    frameLeft,
  ]);

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
    <header className={`frame101 ${className}`} hear style={frame1Style}>
      <header className="header16">
        <header className="header17">
          <div className="header3">
            <button className="logosvs2" onClick={onLogosvsClick}>
              <img className="vector-icon12" alt="" src={vector} />
              <img className="vector-icon13" alt="" src={vector1} />
            </button>
            <div className="container23" />
            <div className="label3">
              <div className="combobox-listbox2">
                <Autocomplete
                  className="input-main-auto-suggest2"
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
              <button className="button-search2">
                <img className="image-icon4" alt="" src={image} />
              </button>
            </div>
            <Autocomplete
              className="container24"
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
            <div className="frame102">
              <div className="menuitem-notification2">
                <div className="button-notifications2">
                  <img className="image-icon5" alt="" src={image1} />
                </div>
              </div>
              <button
                className="list-your-business-frame"
                onClick={onFrameButtonClick}
              >
                <div className="list-your-business2">List Your Business</div>
              </button>
              <div className="frame-child37" />
              <button className="menuitem4">
                <div className="menuitem5" onClick={onMenuitemContainerClick}>
                  <div className="button-loginsign-up2">
                    <div className="container25">
                      <div className="login-sign2">Login / Sign Up</div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </header>
      </header>
    </header>
  );
};

Heder.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,

  /** Style props */
  frameWidth: PropTypes.any,
  frameOverflow: PropTypes.any,
  frameAlignSelf: PropTypes.any,
  framePosition: PropTypes.any,
  frameTop: PropTypes.any,
  frameLeft: PropTypes.any,
};

export default Heder;
