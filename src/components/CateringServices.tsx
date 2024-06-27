import PropTypes from "prop-types";
import "./CateringServices.css";

const CateringServices = ({ className = "" }) => {
  return (
    <button className={`catering-services ${className}`}>
      <div className="catering-services-child" />
      <div className="catering-services1">
        <span className="catering-services-txt-container">
          <p className="catering">Catering</p>
          <p className="catering"> Services</p>
        </span>
      </div>
      <img className="image-1-icon4" alt="" src="/image-1@2x.png" />
    </button>
  );
};

CateringServices.propTypes = {
  className: PropTypes.string,
};

export default CateringServices;
