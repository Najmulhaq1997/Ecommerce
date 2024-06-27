import PropTypes from "prop-types";
import "./Blank.css";

const Blank = ({ className = "" }) => {
  return (
    <section className={`frame124 ${className}`}>
      <div className="frame125">
        <div className="reviews" />
      </div>
    </section>
  );
};

Blank.propTypes = {
  className: PropTypes.string,
};

export default Blank;
