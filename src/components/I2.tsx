import AdminListProduct from "./AdminListProduct";
import DashbordProductList from "./DashbordProductList";
import PropTypes from "prop-types";
import "./I2.css";

const I2 = ({ className = "" }) => {
  return (
    <div className={`frame-parent35 ${className}`}>
      <div className="frame304">
        <div className="frame305">
          <div className="frame-child60" />
        </div>
        <AdminListProduct
          kisspngChowMeinChineseNoo="/kisspngchowmeinchinesenoodleslomeinfriednoodlesyayakisoba5b216a6b858fa5-1@2x.png"
          propPosition="absolute"
          propTop="0px"
          propLeft="0px"
        />
        <div className="frame-parent36">
          <div className="frame306">
            <div className="frame305">
              <div className="frame-child60" />
            </div>
            <div className="kisspng-chow-mein-chinese-nood-group">
              <img
                className="kisspng-chow-mein-chinese-nood-icon1"
                alt=""
                src="/kisspngchowmeinchinesenoodleslomeinfriednoodlesyayakisoba5b216a6b858fa5-1@2x.png"
              />
              <div className="chinese-yakisbo3">{`Chinese Yakisbo `}</div>
              <div className="frame-child62" />
            </div>
          </div>
          <div className="frame308">
            <div className="frame309">
              <div className="frame310">
                <div className="frame311">
                  <div className="frame-child63" />
                </div>
                <div className="frame312">
                  <div className="chinese-yakisbo4">{`Chinese Yakisbo `}</div>
                </div>
              </div>
              <div className="frame313">
                <div className="frame314">
                  <div className="frame-child64" />
                </div>
                <div className="frame315">
                  <div className="amet-minim-mollit2">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</div>
                </div>
              </div>
            </div>
            <div className="frame316">
              <div className="frame317">
                <img className="frame-icon6" alt="" src="/frame1.svg" />
                <div className="frame318">
                  <div className="frame318">
                    <div className="div15">$5.08</div>
                  </div>
                  <div className="frame320">
                    <div className="frame-child65" />
                  </div>
                </div>
              </div>
              <div className="frame321">
                <div className="frame322">
                  <div className="wrapper2">
                    <div className="div16">4.5</div>
                  </div>
                </div>
                <div className="frame323">
                  <div className="mask-group-parent1">
                    <img
                      className="mask-group-icon15"
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <img
                      className="mask-group-icon16"
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <img
                      className="mask-group-icon17"
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <img
                      className="mask-group-icon18"
                      alt=""
                      src="/mask-group@2x.png"
                    />
                    <img
                      className="mask-group-icon19"
                      alt=""
                      src="/mask-group@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashbordProductList
        maskGroup="/mask-group@2x.png"
        maskGroup1="/mask-group@2x.png"
        maskGroup2="/mask-group@2x.png"
        maskGroup3="/mask-group@2x.png"
        maskGroup4="/mask-group@2x.png"
      />
    </div>
  );
};

I2.propTypes = {
  className: PropTypes.string,
};

export default I2;
