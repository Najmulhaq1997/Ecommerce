import { useCallback } from "react";
import I3 from "../components/I3";
import { useNavigate } from "react-router-dom";
import I2 from "../components/I2";
import I1 from "../components/I1";
import I from "../components/I";
import DashbordMenu from "../components/DashbordMenu";
import "./DashboardProducts.css";

const DashboardProducts = () => {
  const navigate = useNavigate();

  const onComponentClick = useCallback(() => {
    navigate("/list-your-product-page");
  }, [navigate]);

  return (
    <div className="dashboard-products">
      <div className="frame-frame">
        <div className="frame30">
          <div className="frame31">
            <div className="frame-parent13">
              <div className="frame32">
                <I3 />
                <button className="component-15" onClick={onComponentClick}>
                  <div className="component-15-child" />
                  <div className="list-your-products1">List Your Products</div>
                </button>
                <I2 />
                <div className="frame33" />
              </div>
              <div className="frame34">
                <div className="frame35">
                  <I1 />
                  <I />
                  <I frameLeft="-22px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame36">
        <button className="frame-button">
          <DashbordMenu />
        </button>
      </div>
    </div>
  );
};

export default DashboardProducts;
