import DashbordMenueShop from "../components/DashbordMenueShop";
import Shopinput from "../components/Shopinput";
import Time from "../components/Time";
import "./DashboardShopDetails.css";

const DashboardShopDetails = () => {
  return (
    <div className="dashboard-shop-details">
      <DashbordMenueShop />
      <div className="frame62">
        <Shopinput />
      </div>
      <div className="frame63">
        <Time />
      </div>
    </div>
  );
};

export default DashboardShopDetails;
