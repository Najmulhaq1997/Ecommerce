import { useMemo } from "react";
import PropTypes from "prop-types";
import "./HomePageComp.css";

const HomePageComp = ({
  className = "",
  sportsAndOutdoors,
  image1,
  propFlex,
  propBorder,
  propPosition,
  propTop,
  propLeft,
  onFoodAndDiningClick,
  sportsAndOutdoorsMargin,
  sportsAndOutdoorsFontWeight,
  sportsAndOutdoorsOpacity,
}) => {
  const sportsAndOutdoorsStyle = useMemo(() => {
    return {
      flex: propFlex,
      border: propBorder,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propFlex, propBorder, propPosition, propTop, propLeft]);

  const sportsAndOutdoors1Style = useMemo(() => {
    return {
      margin: sportsAndOutdoorsMargin,
      fontWeight: sportsAndOutdoorsFontWeight,
      opacity: sportsAndOutdoorsOpacity,
    };
  }, [
    sportsAndOutdoorsMargin,
    sportsAndOutdoorsFontWeight,
    sportsAndOutdoorsOpacity,
  ]);

  return (
    <button
      className={`sports-and-outdoors ${className}`}
      style={sportsAndOutdoorsStyle}
      onClick={onFoodAndDiningClick}
    >
      <div className="sports-and-outdoors-child" />
      <div className="sports-and-outdoors1" style={sportsAndOutdoors1Style}>
        {sportsAndOutdoors}
      </div>
      <img className="image-1-icon1" alt="" src={image1} />
    </button>
  );
};

HomePageComp.propTypes = {
  className: PropTypes.string,
  sportsAndOutdoors: PropTypes.string,
  image1: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propBorder: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  sportsAndOutdoorsMargin: PropTypes.any,
  sportsAndOutdoorsFontWeight: PropTypes.any,
  sportsAndOutdoorsOpacity: PropTypes.any,

  /** Action props */
  onFoodAndDiningClick: PropTypes.func,
};

export default HomePageComp;
