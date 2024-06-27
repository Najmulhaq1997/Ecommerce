import PropTypes from "prop-types";
import "./TravelAndAccoComp.css";

const TravelAndAccoComp = ({ className = "", hotels, image1 }) => {
  return (
    <button className={`hotels6 ${className}`}>
      <div className="hotels-child" />
      <div className="hotels7">{hotels}</div>
      <img className="image-1-icon3" alt="" src={image1} />
    </button>
  );
};

TravelAndAccoComp.propTypes = {
  className: PropTypes.string,
  hotels: PropTypes.string,
  image1: PropTypes.string,
};

export default TravelAndAccoComp;
