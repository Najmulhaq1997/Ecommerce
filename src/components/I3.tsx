import AdminListProduct from "./AdminListProduct";
import PropTypes from "prop-types";
import "./I3.css";

const I3 = ({ className = "" }) => {
  return (
    <div className={`frame270 ${className}`}>
      <div className="frame-wrapper34">
        <div className="frame271">
          <b className="products4">Products</b>
          <div className="frame-parent34">
            <div className="frame272">
              <AdminListProduct kisspngChowMeinChineseNoo="/kisspngchowmeinchinesenoodleslomeinfriednoodlesyayakisoba5b216a6b858fa5-1@2x.png" />
              <div className="frame273">
                <div className="frame-child53" />
              </div>
            </div>
            <div className="frame274">
              <div className="frame275">
                <div className="frame276">
                  <div className="frame277">
                    <div className="frame-child54" />
                  </div>
                  <div className="frame278">
                    <div className="chinese-yakisbo1">{`Chinese Yakisbo `}</div>
                  </div>
                </div>
                <div className="frame279">
                  <div className="frame280">
                    <div className="frame-child55" />
                  </div>
                  <div className="frame281">
                    <div className="amet-minim-mollit">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. `}</div>
                  </div>
                </div>
              </div>
              <div className="frame282">
                <div className="frame283">
                  <div className="frame284">
                    <div className="wrapper">
                      <div className="div11">4.5</div>
                    </div>
                  </div>
                  <div className="frame285">
                    <div className="mask-group-group">
                      <img
                        className="mask-group-icon5"
                        alt=""
                        src="/mask-group@2x.png"
                      />
                      <img
                        className="mask-group-icon6"
                        alt=""
                        src="/mask-group@2x.png"
                      />
                      <img
                        className="mask-group-icon7"
                        alt=""
                        src="/mask-group@2x.png"
                      />
                      <img
                        className="mask-group-icon8"
                        alt=""
                        src="/mask-group@2x.png"
                      />
                      <img
                        className="mask-group-icon9"
                        alt=""
                        src="/mask-group@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="frame286">
                  <img className="frame-icon4" alt="" src="/frame1.svg" />
                  <div className="frame287">
                    <div className="frame287">
                      <div className="div12">$5.08</div>
                    </div>
                    <div className="frame289">
                      <div className="frame-child56" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

I3.propTypes = {
  className: PropTypes.string,
};

export default I3;
