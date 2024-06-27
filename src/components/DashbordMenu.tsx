import { useCallback } from "react";
import DashbordProductMenu from "./DashbordProductMenu";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./DashbordMenu.css";

const DashbordMenu = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/dashboard-shop-details");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onFrameClick1 = useCallback(() => {
    navigate("/dashboard-analytics");
  }, [navigate]);

  return (
    <div className={`instance-parent ${className}`}>
      <DashbordProductMenu
        dukaan="SHop Name"
        showComponent14={false}
        showGroupDiv={false}
        groupDivVisible={false}
        groupDivVisible1={false}
        groupDivVisible2={false}
        groupDivVisible3={false}
        groupDivVisible4={false}
        groupDivVisible5={false}
        groupDivPosition="absolute"
        groupDivTop="0px"
        groupDivLeft="0px"
      />
      <button className="frame343" onClick={onFrameClick}>
        <div className="shop-details-parent">
          <div className="shop-details1">shop details</div>
          <img className="vector-icon28" alt="" src="/vector5.svg" />
        </div>
      </button>
      <button className="frame344">
        <div className="vector-group" onClick={onFrameContainerClick}>
          <img className="vector-icon29" alt="" src="/vector6.svg" />
          <div className="dashboard7">Dashboard</div>
        </div>
      </button>
      <button className="frame345">
        <div className="component-142">
          <div className="component-14-child" />
          <div className="group-parent1">
            <img
              className="frame-child73"
              alt=""
              src="/group-10000032281.svg"
            />
            <div className="products5">Products</div>
          </div>
        </div>
      </button>
      <button className="frame346" onClick={onFrameClick1}>
        <div className="database-group">
          <img className="database-icon1" alt="" src="/database.svg" />
          <div className="analytics2">Analytics</div>
        </div>
      </button>
    </div>
  );
};

DashbordMenu.propTypes = {
  className: PropTypes.string,
};

export default DashbordMenu;
