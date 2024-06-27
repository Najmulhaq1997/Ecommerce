import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DashbordProductMenu.css";

const DashbordProductMenu = ({
  className = "",
  dukaan,
  showComponent14,
  showGroupDiv,
  groupDivVisible,
  groupDivVisible1,
  groupDivVisible2,
  groupDivVisible3,
  groupDivVisible4,
  groupDivVisible5,
  groupDivPosition,
  groupDivTop,
  groupDivLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      position: groupDivPosition,
      top: groupDivTop,
      left: groupDivLeft,
    };
  }, [groupDivPosition, groupDivTop, groupDivLeft]);

  return (
    <div className={`rectangle-root ${className}`} style={groupDivStyle}>
      <div className="component-child" />
      <div className="dukaan">{dukaan}</div>
      <div className="rectangle-parent19">
        <div className="group-child3" />
        <img className="group-icon1" alt="" src="/group.svg" />
      </div>
      <div className="component-14-wrapper">
        {showComponent14 && (
          <div className="component-14">
            <div className="dashboard-container">
              <img className="dashboard-icon" alt="" src="/dashboard.svg" />
              <b className="dashboard3">Dashboard</b>
            </div>
          </div>
        )}
      </div>
      {showGroupDiv && (
        <div className="messages-parent">
          <div className="messages">Messages</div>
          <img className="group-child4" alt="" src="/group-1000003273.svg" />
        </div>
      )}
      {groupDivVisible && (
        <div className="customer-parent">
          <div className="customer">Customer</div>
          <img className="group-child5" alt="" src="/group-1000003272.svg" />
        </div>
      )}
      <div className="settings-parent">
        <div className="settings">Settings</div>
        <img className="layer-2-icon" alt="" src="/layer-2.svg" />
      </div>
      {groupDivVisible1 && (
        <div className="products-group">
          <div className="products1">Products</div>
          <img className="group-child6" alt="" src="/group-1000003228.svg" />
        </div>
      )}
      {groupDivVisible2 && (
        <div className="transactions-parent">
          <div className="transactions">Transactions</div>
          <img className="group-child7" alt="" src="/group-1000003229.svg" />
        </div>
      )}
      {groupDivVisible3 && (
        <div className="dashboard-parent1">
          <div className="dashboard4">Dashboard</div>
          <img className="vector-icon7" alt="" src="/vector3.svg" />
        </div>
      )}
      {groupDivVisible4 && (
        <div className="statistics-parent">
          <div className="statistics">Statistics</div>
          <div className="rectangle-parent20">
            <div className="group-child8" />
            <div className="group-child9" />
            <div className="group-child10" />
          </div>
        </div>
      )}
      {groupDivVisible5 && (
        <div className="payment-parent">
          <div className="payment">Payment</div>
          <img className="vector-icon8" alt="" src="/vector.svg" />
        </div>
      )}
      <div className="logout-parent">
        <div className="logout">Logout</div>
        <img className="vector-icon9" alt="" src="/vector4.svg" />
      </div>
      <div className="component-item" />
      <img className="shape-icon" alt="" src="/shape.svg" />
    </div>
  );
};

DashbordProductMenu.propTypes = {
  className: PropTypes.string,
  dukaan: PropTypes.string,
  showComponent14: PropTypes.bool,
  showGroupDiv: PropTypes.bool,
  groupDivVisible: PropTypes.bool,
  groupDivVisible1: PropTypes.bool,
  groupDivVisible2: PropTypes.bool,
  groupDivVisible3: PropTypes.bool,
  groupDivVisible4: PropTypes.bool,
  groupDivVisible5: PropTypes.bool,

  /** Style props */
  groupDivPosition: PropTypes.any,
  groupDivTop: PropTypes.any,
  groupDivLeft: PropTypes.any,
};

export default DashbordProductMenu;
