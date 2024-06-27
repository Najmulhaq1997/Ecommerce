import PropTypes from "prop-types";
import "./DashbordDashbordMenu.css";

const DashbordDashbordMenu = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent26 ${className}`}>
      <div className="instance-child" />
      <div className="dukaan1">SHop Name</div>
      <button className="group-button">
        <div className="group-child18" />
        <img className="group-icon3" alt="" src="/group@2x.png" />
      </button>
      <button className="component-14-container">
        <div className="component-141">
          <div className="dashboard-parent2">
            <img className="dashboard-icon1" alt="" src="/dashboard.svg" />
            <b className="dashboard5">Dashboard</b>
          </div>
        </div>
      </button>
      <div className="messages-group">
        <div className="messages1">Messages</div>
        <img className="group-child19" alt="" src="/group-1000003273.svg" />
      </div>
      <div className="customer-group">
        <div className="customer1">Customer</div>
        <img className="group-child20" alt="" src="/group-1000003272.svg" />
      </div>
      <button className="settings-group">
        <div className="settings1">Settings</div>
        <img className="layer-2-icon1" alt="" src="/layer-2@2x.png" />
      </button>
      <div className="products-container">
        <div className="products2">Products</div>
        <img className="group-child21" alt="" src="/group-1000003228.svg" />
      </div>
      <div className="transactions-group">
        <div className="transactions1">Transactions</div>
        <img className="group-child22" alt="" src="/group-1000003229.svg" />
      </div>
      <div className="dashboard-parent3">
        <div className="dashboard6">Dashboard</div>
        <img className="vector-icon24" alt="" src="/vector@2x.png" />
      </div>
      <div className="statistics-group">
        <div className="statistics1">Statistics</div>
        <div className="rectangle-parent27">
          <div className="group-child23" />
          <div className="group-child24" />
          <div className="group-child25" />
        </div>
      </div>
      <div className="payment-group">
        <div className="payment1">Payment</div>
        <img className="vector-icon25" alt="" src="/vector.svg" />
      </div>
      <button className="logout-group">
        <div className="logout1">Logout</div>
        <img className="vector-icon26" alt="" src="/vector1@2x.png" />
      </button>
      <div className="instance-item" />
      <img className="shape-icon1" alt="" src="/shape@2x.png" />
    </div>
  );
};

DashbordDashbordMenu.propTypes = {
  className: PropTypes.string,
};

export default DashbordDashbordMenu;
