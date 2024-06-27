import { useMemo, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({
  className = "",
  headerPosition,
  headerTop,
  headerLeft,
  headerBackgroundColor,
  headerFlexDirection,
  headerPadding,
  headerMixBlendMode,
  frameOverflow,
  vector,
  vector1,
  image,
  image1,
  headerWidth,
  frameWidth,
  headerAlignSelf,
}) => {
  const headerStyle = useMemo(() => {
    return {
      position: headerPosition,
      top: headerTop,
      left: headerLeft,
      backgroundColor: headerBackgroundColor,
      flexDirection: headerFlexDirection,
      padding: headerPadding,
      mixBlendMode: headerMixBlendMode,
      width: headerWidth,
      alignSelf: headerAlignSelf,
    };
  }, [
    headerPosition,
    headerTop,
    headerLeft,
    headerBackgroundColor,
    headerFlexDirection,
    headerPadding,
    headerMixBlendMode,
    headerWidth,
    headerAlignSelf,
  ]);

  const frame2Style = useMemo(() => {
    return {
      overflow: frameOverflow,
      width: frameWidth,
    };
  }, [frameOverflow, frameWidth]);

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
    <header className={`header4 ${className}`} style={headerStyle}>
      <header className="frame122" hear style={frame2Style}>
        <header className="header18">
          <header className="header19">
            <div className="header5">
              <button className="logosvs3" onClick={onLogosvsClick}>
                <img className="vector-icon18" alt="" src={vector} />
                <img className="vector-icon19" alt="" src={vector1} />
              </button>
              <div className="container26" />
              <div className="label4">
                <div className="combobox-listbox3">
                  <Autocomplete
                    className="input-main-auto-suggest3"
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
                <button className="button-search3">
                  <img className="image-icon6" alt="" src={image} />
                </button>
              </div>
              <Autocomplete
                className="container27"
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
              <div className="frame123">
                <div className="menuitem-notification3">
                  <div className="button-notifications3">
                    <img className="image-icon7" alt="" src={image1} />
                  </div>
                </div>
                <button
                  className="list-your-business-wrapper1"
                  onClick={onFrameButtonClick}
                >
                  <div className="list-your-business3">List Your Business</div>
                </button>
                <div className="frame-child44" />
                <button className="menuitem6">
                  <div className="menuitem7" onClick={onMenuitemContainerClick}>
                    <div className="button-loginsign-up3">
                      <div className="container28">
                        <div className="login-sign3">Login / Sign Up</div>
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
  );
};

Header1.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,

  /** Style props */
  headerPosition: PropTypes.any,
  headerTop: PropTypes.any,
  headerLeft: PropTypes.any,
  headerBackgroundColor: PropTypes.any,
  headerFlexDirection: PropTypes.any,
  headerPadding: PropTypes.any,
  headerMixBlendMode: PropTypes.any,
  frameOverflow: PropTypes.any,
  headerWidth: PropTypes.any,
  frameWidth: PropTypes.any,
  headerAlignSelf: PropTypes.any,
};

export default Header1;
