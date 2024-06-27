import PropTypes from "prop-types";
import "./DashbordShopMenu.css";

const DashbordShopMenu = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent31 ${className}`}>
      <div className="instance-child2" />
      <div className="dukaan3">SHop Name</div>
      <div className="rectangle-parent32">
        <div className="group-child34" />
        <img className="group-icon5" alt="" src="/group.svg" />
      </div>
      <div className="component-14-wrapper1">
        <div className="component-145">
          <div className="dashboard-parent6">
            <img className="dashboard-icon3" alt="" src="/dashboard.svg" />
            <b className="dashboard10">Dashboard</b>
          </div>
        </div>
      </div>
      <div className="messages-parent1">
        <div className="messages3">Messages</div>
        <img className="group-child35" alt="" src="/group-1000003273.svg" />
      </div>
      <div className="customer-parent1">
        <div className="customer3">Customer</div>
        <img className="group-child36" alt="" src="/group-1000003272.svg" />
      </div>
      <div className="settings-parent1">
        <div className="settings3">Settings</div>
        <img className="layer-2-icon3" alt="" src="/layer-2.svg" />
      </div>
      <div className="products-parent3">
        <div className="products8">Products</div>
        <img className="group-child37" alt="" src="/group-1000003228.svg" />
      </div>
      <div className="transactions-parent1">
        <div className="transactions3">Transactions</div>
        <img className="group-child38" alt="" src="/group-1000003229.svg" />
      </div>
      <div className="dashboard-parent7">
        <div className="dashboard11">Dashboard</div>
        <img className="vector-icon34" alt="" src="/vector3.svg" />
      </div>
      <div className="statistics-parent1">
        <div className="statistics3">Statistics</div>
        <div className="rectangle-parent33">
          <div className="group-child39" />
          <div className="group-child40" />
          <div className="group-child41" />
        </div>
      </div>
      <div className="payment-parent1">
        <div className="payment3">Payment</div>
        <img className="vector-icon35" alt="" src="/vector.svg" />
      </div>
      <div className="logout-parent1">
        <div className="logout3">Logout</div>
        <img className="vector-icon36" alt="" src="/vector4.svg" />
      </div>
      <div className="instance-child3" />
      <img className="shape-icon3" alt="" src="/shape.svg" />
    </div>
  );
};

DashbordShopMenu.propTypes = {
  className: PropTypes.string,
};

export default DashbordShopMenu;
