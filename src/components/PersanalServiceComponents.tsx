import PropTypes from "prop-types";
import "./PersanalServiceComponents.css";

const PersanalServiceComponents = ({ className = "", accountants, image1 }) => {
  return (
    <button className={`clothing-stores ${className}`}>
      <div className="clothing-stores-child" />
      <div className="clothing-stores1">{accountants}</div>
      <img className="image-1-icon2" alt="" src={image1} />
    </button>
  );
};

PersanalServiceComponents.propTypes = {
  className: PropTypes.string,
  accountants: PropTypes.string,
  image1: PropTypes.string,
};

export default PersanalServiceComponents;
