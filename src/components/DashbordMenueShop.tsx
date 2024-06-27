import { useCallback } from "react";
import DashbordShopMenu from "./DashbordShopMenu";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./DashbordMenueShop.css";

const DashbordMenueShop = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameButtonClick1 = useCallback(() => {
    navigate("/dashboard-analytics");
  }, [navigate]);

  const onFrameButtonClick2 = useCallback(() => {
    navigate("/dashboard-products");
  }, [navigate]);

  return (
    <div className={`instance-group ${className}`}>
      <DashbordShopMenu />
      <button className="dashboard-parent8" onClick={onFrameButtonClick}>
        <div className="dashboard12">Dashboard</div>
        <img className="vector-icon37" alt="" src="/vector6.svg" />
      </button>
      <button className="database-parent1" onClick={onFrameButtonClick1}>
        <img className="database-icon3" alt="" src="/database2.svg" />
        <div className="analytics4">Analytics</div>
      </button>
      <button className="component-151">
        <div className="component-15-item" />
        <div className="shop-details-container">
          <div className="shop-details3">shop details</div>
          <img className="vector-icon38" alt="" src="/vector7.svg" />
        </div>
      </button>
      <button className="products-parent4" onClick={onFrameButtonClick2}>
        <div className="products9">Products</div>
        <img className="frame-child74" alt="" src="/group-1000003228.svg" />
      </button>
    </div>
  );
};

DashbordMenueShop.propTypes = {
  className: PropTypes.string,
};

export default DashbordMenueShop;
