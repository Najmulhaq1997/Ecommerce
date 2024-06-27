import { useCallback } from "react";
import DashbordDashbordMenu from "./DashbordDashbordMenu";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/dashboard-products");
  }, [navigate]);

  const onFrameClick1 = useCallback(() => {
    navigate("/dashboard-analytics");
  }, [navigate]);

  const onFrameClick2 = useCallback(() => {
    navigate("/dashboard-shop-details");
  }, [navigate]);

  return (
    <div className={`frame-parent31 ${className}`}>
      <div className="frame265">
        <div className="frame-inner4">
          <DashbordDashbordMenu />
        </div>
      </div>
      <div className="frame-parent32">
        <button className="frame266" onClick={onFrameClick}>
          <div className="frame-parent33">
            <img className="frame-icon3" alt="" src="/frame@2x.png" />
            <div className="products3">Products</div>
          </div>
        </button>
        <div className="frame267">
          <button className="frame268" onClick={onFrameClick1}>
            <div className="database-parent">
              <img className="database-icon" alt="" src="/database@2x.png" />
              <div className="shop-details">Analytics</div>
            </div>
          </button>
          <button className="frame269" onClick={onFrameClick2}>
            <div className="vector-parent">
              <img className="vector-icon27" alt="" src="/vector2@2x.png" />
              <div className="shop-details">shop details</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
