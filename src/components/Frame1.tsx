import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Frame1.css";

const Frame1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/dashboard-products");
  }, [navigate]);

  const onFrameClick1 = useCallback(() => {
    navigate("/dashboard-shop-details");
  }, [navigate]);

  return (
    <div className={`frame347 ${className}`}>
      <button className="frame348" onClick={onFrameClick}>
        <div className="products-parent2">
          <div className="products7">Products</div>
          <img className="frame-icon8" alt="" src="/group-1000003228.svg" />
        </div>
      </button>
      <button className="frame349" onClick={onFrameClick1}>
        <div className="shop-details-group">
          <div className="shop-details2">shop details</div>
          <img className="vector-icon33" alt="" src="/vector5.svg" />
        </div>
      </button>
      <button className="frame350">
        <div className="frame351">
          <div className="component-144">
            <div className="component-14-item" />
          </div>
        </div>
        <div className="frame352">
          <div className="database-container">
            <img className="database-icon2" alt="" src="/database1.svg" />
            <div className="analytics3">Analytics</div>
          </div>
        </div>
      </button>
    </div>
  );
};

Frame1.propTypes = {
  className: PropTypes.string,
};

export default Frame1;
