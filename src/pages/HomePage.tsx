import { useCallback } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Ad from "../components/Ad";
import HomePageComponents from "../components/HomePageComponents";
import QuickLink from "../components/QuickLink";
import Bottom from "../components/Bottom";
import "./HomePage.css";

const HomePage = () => {
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
    <div className="home-page">
      <header className="header1">
        <header className="header11">
          <header className="header1">
            <div className="header">
              <button className="logosvs" onClick={onLogosvsClick}>
                <img className="vector-icon" alt="" src="/vector@2x.png" />
                <img className="vector-icon1" alt="" src="/vector@2x.png" />
              </button>
              <div className="container" />
              <div className="label">
                <div className="combobox-listbox">
                  <Autocomplete
                    className="input-main-auto-suggest"
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
                <button className="button-search">
                  <img className="image-icon" alt="" src="/image@2x.png" />
                </button>
              </div>
              <Autocomplete
                className="container1"
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
              <div className="frame">
                <div className="menuitem-notification">
                  <div className="button-notifications">
                    <img className="image-icon1" alt="" src="/image@2x.png" />
                  </div>
                </div>
                <button
                  className="list-your-business-wrapper"
                  onClick={onFrameButtonClick}
                >
                  <div className="list-your-business">List Your Business</div>
                </button>
                <div className="frame-child" />
                <button className="menuitem">
                  <div className="menuitem1" onClick={onMenuitemContainerClick}>
                    <div className="button-loginsign-up">
                      <div className="container2">
                        <div className="login-sign">Login / Sign Up</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </header>
        </header>
      </header>
      <Ad
        sellingOnlineWithAnEcommeAnimationDirection="unset"
        sellingOnlineWithAnEcommeAlignSelf="unset"
        sellingOnlineWithAnEcommeWidth="1200px"
        sellingOnlineWithAnEcommeBackgroundImage="url('/sellingonlinewithanecommercestore-1@3x.png')"
        sellingOnlineWithAnEcommePosition="relative"
        sellingOnlineWithAnEcommeTop="unset"
        sellingOnlineWithAnEcommeLeft="unset"
      />
      <HomePageComponents />
      <QuickLink />
      <Bottom
        containerAlignSelf="unset"
        containerWidth="1200px"
        containerWidth1="unset"
        copyrights200824AllFlex="unset"
        linkFlex="unset"
        containerWidth2="5.29%"
        containerRight="8.09%"
        containerLeft="86.62%"
        linkFlex1="unset"
        containerWidth3="6.43%"
        containerRight1="9.46%"
        containerLeft1="84.11%"
        linkFlex2="unset"
        containerPosition="unset"
        containerTop="unset"
        containerLeft2="unset"
        containerHeight="unset"
        containerAlignSelf1="stretch"
        privacyFlex="unset"
        divAlignSelf="unset"
        termsFlex="unset"
        divAlignSelf1="unset"
        infringementFlex="unset"
      />
    </div>
  );
};

export default HomePage;
