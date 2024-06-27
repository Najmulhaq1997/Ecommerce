import { useMemo } from "react";
import PropTypes from "prop-types";
import "./QuickLink1.css";

const QuickLink1 = ({
  className = "",
  frameSectionWidth,
  frameSectionAlignSelf,
  borderWidth,
  containerWidth,
}) => {
  const frameSection1Style = useMemo(() => {
    return {
      width: frameSectionWidth,
      alignSelf: frameSectionAlignSelf,
    };
  }, [frameSectionWidth, frameSectionAlignSelf]);

  const borderStyle = useMemo(() => {
    return {
      width: borderWidth,
    };
  }, [borderWidth]);

  const containerStyle = useMemo(() => {
    return {
      width: containerWidth,
    };
  }, [containerWidth]);

  return (
    <section
      className={`border-wrapper1 ${className}`}
      style={frameSection1Style}
    >
      <div className="border3" style={borderStyle}>
        <div className="container29">
          <div className="container30">
            <div className="container31">
              <h3 className="quick-links3">Quick Links</h3>
            </div>
            <div className="list5">
              <div className="frame140">
                <div className="itemmargin61">
                  <div className="item61">
                    <div className="link64">
                      <div className="about-us3">About us</div>
                    </div>
                  </div>
                </div>
                <div className="frame141">
                  <div className="itemmargin61">
                    <div className="item62">
                      <div className="link64">
                        <div className="about-us3">Advertise</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame142">
                <div className="itemmargin61">
                  <div className="item63">
                    <div className="link64">
                      <div className="about-us3">Investor Relations</div>
                    </div>
                  </div>
                </div>
                <div className="frame143">
                  <div className="itemmargin61">
                    <div className="item64">
                      <div className="link64">
                        <div className="about-us3">Media</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame144">
                <div className="itemmargin61">
                  <div className="item65">
                    <div className="link64">
                      <div className="about-us3">Customer Care</div>
                    </div>
                  </div>
                </div>
                <div className="frame145">
                  <div className="itemmargin61">
                    <div className="item66">
                      <div className="link64">
                        <div className="about-us3">Feedback</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame146">
                <div className="itemmargin61">
                  <div className="item67">
                    <div className="link64">
                      <div className="about-us3">Free Listing</div>
                    </div>
                  </div>
                </div>
                <div className="frame147">
                  <div className="itemmargin61">
                    <div className="item68">
                      <div className="link64">
                        <div className="about-us3">Business Badge</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame148">
                <div className="itemmargin61">
                  <div className="item69">
                    <div className="link64">
                      <div className="about-us3">What's New</div>
                    </div>
                  </div>
                </div>
                <div className="frame149" />
              </div>
              <div className="itemmargin61">
                <div className="item70">
                  <div className="link64">
                    <div className="about-us3">Report a Bug</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container32" style={containerStyle}>
            <div className="container33">
              <h3 className="sr-verticals2">Sr Verticals</h3>
            </div>
            <div className="list6">
              <div className="frame150">
                <div className="itemmargin61">
                  <div className="item71">
                    <div className="link64">
                      <div className="about-us3">B2B</div>
                    </div>
                  </div>
                </div>
                <div className="frame151">
                  <div className="itemmargin61">
                    <div className="item72">
                      <div className="link64">
                        <div className="about-us3">Colleges</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame152">
                <div className="itemmargin61">
                  <div className="item73">
                    <div className="link64">
                      <div className="about-us3">All India</div>
                    </div>
                  </div>
                </div>
                <div className="frame153">
                  <div className="itemmargin61">
                    <div className="item74">
                      <div className="link64">
                        <div className="about-us3">AC Repair</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame154">
                <div className="frame155">
                  <div className="itemmargin61">
                    <div className="item75">
                      <div className="link64">
                        <div className="about-us3">Restaurants</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame156">
                    <div className="itemmargin61">
                      <div className="item76">
                        <div className="link64">
                          <div className="about-us3">Car Services</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame157">
                  <div className="frame158">
                    <div className="itemmargin61">
                      <div className="item77">
                        <div className="link64">
                          <div className="about-us3">Doctors</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame159">
                      <div className="itemmargin61">
                        <div className="item78">
                          <div className="link64">
                            <div className="about-us3">Hotels</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame160">
                    <div className="frame161">
                      <div className="itemmargin61">
                        <div className="item79">
                          <div className="link64">
                            <div className="about-us3">Hospitals</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame162">
                        <div className="itemmargin61">
                          <div className="item80">
                            <div className="link64">
                              <div className="about-us3">Real Estate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame163">
                      <div className="itemmargin61">
                        <div className="item73">
                          <div className="link64">
                            <div className="about-us3">Schools</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame164">
                        <div className="itemmargin61">
                          <div className="item82">
                            <div className="link64">
                              <div className="about-us3">{`Bills & Recharge`}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

QuickLink1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameSectionWidth: PropTypes.any,
  frameSectionAlignSelf: PropTypes.any,
  borderWidth: PropTypes.any,
  containerWidth: PropTypes.any,
};

export default QuickLink1;
