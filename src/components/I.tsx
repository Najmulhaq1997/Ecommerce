import { useMemo } from "react";
import DashbordProductList from "./DashbordProductList";
import PropTypes from "prop-types";
import "./I.css";

const I = ({ className = "", frameLeft }) => {
  const frame9Style = useMemo(() => {
    return {
      left: frameLeft,
    };
  }, [frameLeft]);

  return (
    <div className={`frame340 ${className}`} style={frame9Style}>
      <div className="frame-parent38">
        <div className="frame341">
          <div className="frame342">
            <div className="frame-child71" />
          </div>
          <div className="kisspng-chow-mein-chinese-nood-parent1">
            <img
              className="kisspng-chow-mein-chinese-nood-icon3"
              alt=""
              src="/kisspngchowmeinchinesenoodleslomeinfriednoodlesyayakisoba5b216a6b858fa5-1@2x.png"
            />
            <div className="chinese-yakisbo7">{`Chinese Yakisbo `}</div>
            <div className="frame-child72" />
          </div>
        </div>
        <DashbordProductList
          maskGroup="/mask-group@2x.png"
          maskGroup1="/mask-group@2x.png"
          maskGroup2="/mask-group@2x.png"
          maskGroup3="/mask-group@2x.png"
          maskGroup4="/mask-group@2x.png"
        />
      </div>
    </div>
  );
};

I.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameLeft: PropTypes.any,
};

export default I;
