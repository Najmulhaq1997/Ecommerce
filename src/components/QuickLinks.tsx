import { useMemo } from "react";
import PropTypes from "prop-types";
import "./QuickLinks.css";

const QuickLinks = ({ className = "", frameDivTop, frameDivLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  return (
    <div className={`border-frame ${className}`} style={frameDivStyle}>
      <div className="border2">
        <div className="container20">
          <div className="container21">
            <div className="container22">
              <h3 className="quick-links2">Quick Links</h3>
            </div>
            <div className="list4">
              <div className="frame89">
                <div className="itemmargin48">
                  <div className="item48">
                    <div className="link51">
                      <b className="about-us2">About us</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame90">
                <div className="itemmargin48">
                  <div className="item49">
                    <div className="link51">
                      <b className="about-us2">Advertise</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame91">
                <div className="itemmargin48">
                  <div className="item50">
                    <div className="link51">
                      <b className="about-us2">Investor Relations</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame92">
                <div className="itemmargin48">
                  <div className="item51">
                    <div className="link51">
                      <b className="about-us2">Media</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame93">
                <div className="itemmargin48">
                  <div className="item52">
                    <div className="link51">
                      <b className="about-us2">We're hiring</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame94">
                <div className="itemmargin48">
                  <div className="item53">
                    <div className="link51">
                      <b className="about-us2">Testimonials</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame95">
                <div className="itemmargin48">
                  <div className="item54">
                    <div className="link51">
                      <b className="about-us2">Customer Care</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame96">
                <div className="itemmargin48">
                  <div className="item55">
                    <div className="link51">
                      <b className="about-us2">Feedback</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame97">
                <div className="itemmargin48">
                  <div className="item56">
                    <div className="link51">
                      <b className="about-us2">Free Listing</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemmargin57">
                <div className="item57">
                  <div className="link51">
                    <b className="about-us2">Business Badge</b>
                  </div>
                </div>
              </div>
              <div className="frame98">
                <div className="itemmargin48">
                  <div className="item58">
                    <div className="link51">
                      <b className="about-us2">What's New</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame99">
                <div className="itemmargin48">
                  <div className="item59">
                    <div className="link51">
                      <b className="about-us2">Report a Bug</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame100">
                <div className="itemmargin48">
                  <div className="item60">
                    <div className="link51">
                      <b className="about-us2">Sr Curated list</b>
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

QuickLinks.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivTop: PropTypes.any,
  frameDivLeft: PropTypes.any,
};

export default QuickLinks;
