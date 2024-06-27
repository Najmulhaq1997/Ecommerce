import PropTypes from "prop-types";
import "./DashBordMenuAny.css";

const DashBordMenuAny = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent28 ${className}`}>
      <div className="instance-inner" />
      <div className="dukaan2">SHop Name</div>
      <div className="rectangle-parent29">
        <div className="group-child26" />
        <img className="group-icon4" alt="" src="/group.svg" />
      </div>
      <div className="component-14-frame">
        <div className="component-143">
          <div className="dashboard-parent4">
            <img className="dashboard-icon2" alt="" src="/dashboard.svg" />
            <b className="dashboard8">Dashboard</b>
          </div>
        </div>
      </div>
      <div className="messages-container">
        <div className="messages2">Messages</div>
        <img className="group-child27" alt="" src="/group-1000003273.svg" />
      </div>
      <div className="customer-container">
        <div className="customer2">Customer</div>
        <img className="group-child28" alt="" src="/group-1000003272.svg" />
      </div>
      <button className="settings-container">
        <div className="settings2">Settings</div>
        <img className="layer-2-icon2" alt="" src="/layer-2.svg" />
      </button>
      <div className="products-parent1">
        <div className="products6">Products</div>
        <img className="group-child29" alt="" src="/group-1000003228.svg" />
      </div>
      <div className="transactions-container">
        <div className="transactions2">Transactions</div>
        <img className="group-child30" alt="" src="/group-1000003229.svg" />
      </div>
      <div className="dashboard-parent5">
        <div className="dashboard9">Dashboard</div>
        <img className="vector-icon30" alt="" src="/vector3.svg" />
      </div>
      <div className="statistics-container">
        <div className="statistics2">Statistics</div>
        <div className="rectangle-parent30">
          <div className="group-child31" />
          <div className="group-child32" />
          <div className="group-child33" />
        </div>
      </div>
      <div className="payment-container">
        <div className="payment2">Payment</div>
        <img className="vector-icon31" alt="" src="/vector.svg" />
      </div>
      <button className="logout-container">
        <div className="logout2">Logout</div>
        <img className="vector-icon32" alt="" src="/vector4.svg" />
      </button>
      <div className="instance-child1" />
      <img className="shape-icon2" alt="" src="/shape.svg" />
    </div>
  );
};

DashBordMenuAny.propTypes = {
  className: PropTypes.string,
};

export default DashBordMenuAny;
