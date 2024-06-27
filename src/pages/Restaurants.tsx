import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import List1 from "../components/List1";
import List from "../components/List";
import QuickLinks from "../components/QuickLinks";
import Bottom from "../components/Bottom";
import "./Restaurants.css";

const Restaurants = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/restaurants-menu");
  }, [navigate]);

  const onLinkContainerClick = useCallback(() => {
    window.open("https://www.justdial.com/Terms-of-Use");
  }, []);

  return (
    <div className="restaurants">
      <main className="frame-parent">
        <section className="frame1">
          <header className="frame2" hear>
            <header className="header13">
              <header className="header14">
                <header className="header13">
                  <Header />
                </header>
              </header>
            </header>
          </header>
        </section>
        <List1 />
        <div className="frame3" />
        <img className="frame-item" alt="" src="/rectangle-153847@2x.png" />
        <List
          propTop="569px"
          propLeft="-4.5px"
          frameOpacity="0.66"
          onRectangleButtonClick={onRectangleButtonClick}
        />
        <List />
        <List propTop="1339px" propLeft="-4.5px" frameOpacity="unset" />
        <List propTop="1724px" propLeft="6.5px" frameOpacity="unset" />
        <QuickLinks />
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
          containerPosition="absolute"
          containerTop="2549px"
          containerLeft2="-4.5px"
          onLinkContainerClick={onLinkContainerClick}
          containerHeight="unset"
          containerAlignSelf1="stretch"
          privacyFlex="unset"
          divAlignSelf="unset"
          termsFlex="unset"
          divAlignSelf1="unset"
          infringementFlex="unset"
        />
      </main>
    </div>
  );
};

export default Restaurants;
