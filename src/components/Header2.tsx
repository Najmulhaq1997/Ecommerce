import { useMemo, useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header2.css";

const Header2 = ({
  className = "",
  header1Width,
  header1AlignSelf,
  header1Height,
  header1Width1,
  header1Flex,
  logosvsWidth,
  logosvsHeight,
  logosvsDisplay,
  logosvsFlexDirection,
  logosvsGap,
  vector,
  vectorIconPosition,
  vectorIconHeight,
  vectorIconWidth,
  vectorIconTop,
  vectorIconRight,
  vectorIconBottom,
  vectorIconLeft,
  vectorIconOverflow,
  vectorIconMaxHeight,
  vector1,
  vectorIconPosition1,
  vectorIconHeight1,
  vectorIconWidth1,
  vectorIconTop1,
  vectorIconRight1,
  vectorIconBottom1,
  vectorIconLeft1,
  vectorIconOverflow1,
  vectorIconMaxHeight1,
  inputMainAutoSuggestWidth,
  inputMainAutoSuggestAlignSelf,
  image,
  image1,
}) => {
  const header1Style = useMemo(() => {
    return {
      width: header1Width,
      alignSelf: header1AlignSelf,
      height: header1Height,
    };
  }, [header1Width, header1AlignSelf, header1Height]);

  const header11Style = useMemo(() => {
    return {
      width: header1Width1,
      flex: header1Flex,
    };
  }, [header1Width1, header1Flex]);

  const logosvsStyle = useMemo(() => {
    return {
      width: logosvsWidth,
      height: logosvsHeight,
      display: logosvsDisplay,
      flexDirection: logosvsFlexDirection,
      gap: logosvsGap,
    };
  }, [
    logosvsWidth,
    logosvsHeight,
    logosvsDisplay,
    logosvsFlexDirection,
    logosvsGap,
  ]);

  const vectorIconStyle = useMemo(() => {
    return {
      position: vectorIconPosition,
      height: vectorIconHeight,
      width: vectorIconWidth,
      top: vectorIconTop,
      right: vectorIconRight,
      bottom: vectorIconBottom,
      left: vectorIconLeft,
      overflow: vectorIconOverflow,
      maxHeight: vectorIconMaxHeight,
    };
  }, [
    vectorIconPosition,
    vectorIconHeight,
    vectorIconWidth,
    vectorIconTop,
    vectorIconRight,
    vectorIconBottom,
    vectorIconLeft,
    vectorIconOverflow,
    vectorIconMaxHeight,
  ]);

  const vectorIcon1Style = useMemo(() => {
    return {
      position: vectorIconPosition1,
      height: vectorIconHeight1,
      width: vectorIconWidth1,
      top: vectorIconTop1,
      right: vectorIconRight1,
      bottom: vectorIconBottom1,
      left: vectorIconLeft1,
      overflow: vectorIconOverflow1,
      maxHeight: vectorIconMaxHeight1,
    };
  }, [
    vectorIconPosition1,
    vectorIconHeight1,
    vectorIconWidth1,
    vectorIconTop1,
    vectorIconRight1,
    vectorIconBottom1,
    vectorIconLeft1,
    vectorIconOverflow1,
    vectorIconMaxHeight1,
  ]);

  const inputMainAutoSuggestStyle = useMemo(() => {
    return {
      width: inputMainAutoSuggestWidth,
      alignSelf: inputMainAutoSuggestAlignSelf,
    };
  }, [inputMainAutoSuggestWidth, inputMainAutoSuggestAlignSelf]);

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
    <header className={`header110 ${className}`} style={header1Style}>
      <header className="header111" style={header11Style}>
        <div className="header6">
          <button
            className="logosvs4"
            onClick={onLogosvsClick}
            style={logosvsStyle}
          >
            <img
              className="vector-icon20"
              alt=""
              src={vector}
              style={vectorIconStyle}
            />
            <img
              className="vector-icon21"
              alt=""
              src={vector1}
              style={vectorIcon1Style}
            />
          </button>
          <div className="container34" />
          <div className="label5">
            <div className="combobox-listbox4">
              <Autocomplete
                className="input-main-auto-suggest4"
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
                style={inputMainAutoSuggestStyle}
              />
            </div>
            <button className="button-search4">
              <img className="image-icon8" alt="" src={image} />
            </button>
          </div>
          <Autocomplete
            className="container35"
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
          <div className="frame165">
            <div className="menuitem-notification4">
              <div className="button-notifications4">
                <img className="image-icon9" alt="" src={image1} />
              </div>
            </div>
            <button
              className="list-your-business-wrapper2"
              onClick={onFrameButtonClick}
            >
              <div className="list-your-business4">List Your Business</div>
            </button>
            <div className="frame-child48" />
            <button className="menuitem8">
              <div className="menuitem9" onClick={onMenuitemContainerClick}>
                <div className="button-loginsign-up4">
                  <div className="container36">
                    <div className="login-sign4">Login / Sign Up</div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
    </header>
  );
};

Header2.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,
  image: PropTypes.string,
  image1: PropTypes.string,

  /** Style props */
  header1Width: PropTypes.any,
  header1AlignSelf: PropTypes.any,
  header1Height: PropTypes.any,
  header1Width1: PropTypes.any,
  header1Flex: PropTypes.any,
  logosvsWidth: PropTypes.any,
  logosvsHeight: PropTypes.any,
  logosvsDisplay: PropTypes.any,
  logosvsFlexDirection: PropTypes.any,
  logosvsGap: PropTypes.any,
  vectorIconPosition: PropTypes.any,
  vectorIconHeight: PropTypes.any,
  vectorIconWidth: PropTypes.any,
  vectorIconTop: PropTypes.any,
  vectorIconRight: PropTypes.any,
  vectorIconBottom: PropTypes.any,
  vectorIconLeft: PropTypes.any,
  vectorIconOverflow: PropTypes.any,
  vectorIconMaxHeight: PropTypes.any,
  vectorIconPosition1: PropTypes.any,
  vectorIconHeight1: PropTypes.any,
  vectorIconWidth1: PropTypes.any,
  vectorIconTop1: PropTypes.any,
  vectorIconRight1: PropTypes.any,
  vectorIconBottom1: PropTypes.any,
  vectorIconLeft1: PropTypes.any,
  vectorIconOverflow1: PropTypes.any,
  vectorIconMaxHeight1: PropTypes.any,
  inputMainAutoSuggestWidth: PropTypes.any,
  inputMainAutoSuggestAlignSelf: PropTypes.any,
};

export default Header2;
