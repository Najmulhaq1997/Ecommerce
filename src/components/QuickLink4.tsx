import { useMemo } from "react";
import PropTypes from "prop-types";
import "./QuickLink4.css";

const QuickLink4 = ({
  className = "",
  frameSectionAlignSelf,
  frameSectionWidth,
  containerAlignSelf,
  containerWidth,
  listWidth,
  listAlignSelf,
  frameHeight,
  frameHeight1,
  frameHeight2,
  frameHeight3,
  containerFlex,
  containerWidth1,
  containerAlignSelf1,
  containerWidth2,
  listWidth1,
  listAlignSelf1,
  frameFlex,
  frameWidth,
  frameFlex1,
  frameMarginLeft,
  frameWidth1,
  frameSectionPosition,
  frameSectionTop,
  frameSectionLeft,
}) => {
  const frameSection2Style = useMemo(() => {
    return {
      alignSelf: frameSectionAlignSelf,
      width: frameSectionWidth,
      position: frameSectionPosition,
      top: frameSectionTop,
      left: frameSectionLeft,
    };
  }, [
    frameSectionAlignSelf,
    frameSectionWidth,
    frameSectionPosition,
    frameSectionTop,
    frameSectionLeft,
  ]);

  const container1Style = useMemo(() => {
    return {
      alignSelf: containerAlignSelf,
      width: containerWidth,
    };
  }, [containerAlignSelf, containerWidth]);

  const listStyle = useMemo(() => {
    return {
      width: listWidth,
      alignSelf: listAlignSelf,
    };
  }, [listWidth, listAlignSelf]);

  const frame3Style = useMemo(() => {
    return {
      height: frameHeight,
    };
  }, [frameHeight]);

  const frame4Style = useMemo(() => {
    return {
      height: frameHeight1,
    };
  }, [frameHeight1]);

  const frame5Style = useMemo(() => {
    return {
      height: frameHeight2,
    };
  }, [frameHeight2]);

  const frame6Style = useMemo(() => {
    return {
      height: frameHeight3,
    };
  }, [frameHeight3]);

  const container2Style = useMemo(() => {
    return {
      flex: containerFlex,
      width: containerWidth1,
    };
  }, [containerFlex, containerWidth1]);

  const container3Style = useMemo(() => {
    return {
      alignSelf: containerAlignSelf1,
      width: containerWidth2,
    };
  }, [containerAlignSelf1, containerWidth2]);

  const list1Style = useMemo(() => {
    return {
      width: listWidth1,
      alignSelf: listAlignSelf1,
    };
  }, [listWidth1, listAlignSelf1]);

  const frame7Style = useMemo(() => {
    return {
      flex: frameFlex,
      width: frameWidth,
    };
  }, [frameFlex, frameWidth]);

  const frame8Style = useMemo(() => {
    return {
      flex: frameFlex1,
      marginLeft: frameMarginLeft,
      width: frameWidth1,
    };
  }, [frameFlex1, frameMarginLeft, frameWidth1]);

  return (
    <section
      className={`border-wrapper4 ${className}`}
      style={frameSection2Style}
    >
      <div className="border6">
        <div className="container50">
          <div className="container51">
            <div className="container52" style={container1Style}>
              <div className="quick-links6">Quick Links</div>
            </div>
            <div className="list11" style={listStyle}>
              <div className="frame219" style={frame3Style}>
                <div className="itemmargin130">
                  <div className="item130">
                    <div className="link133">
                      <div className="about-us6">About us</div>
                    </div>
                  </div>
                </div>
                <div className="frame220">
                  <div className="itemmargin130">
                    <div className="item131">
                      <div className="link133">
                        <div className="about-us6">Advertise</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame221" style={frame4Style}>
                <div className="itemmargin130">
                  <div className="item132">
                    <div className="link133">
                      <div className="about-us6">Investor Relations</div>
                    </div>
                  </div>
                </div>
                <div className="frame222">
                  <div className="itemmargin130">
                    <div className="item133">
                      <div className="link133">
                        <div className="about-us6">Media</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame223">
                <div className="itemmargin130">
                  <div className="item134">
                    <div className="link133">
                      <div className="about-us6">We're hiring</div>
                    </div>
                  </div>
                </div>
                <div className="frame224">
                  <div className="itemmargin130">
                    <div className="item135">
                      <div className="link133">
                        <div className="about-us6">Testimonials</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame225" style={frame5Style}>
                <div className="itemmargin130">
                  <div className="item136">
                    <div className="link133">
                      <div className="about-us6">Customer Care</div>
                    </div>
                  </div>
                </div>
                <div className="frame226">
                  <div className="itemmargin130">
                    <div className="item137">
                      <div className="link133">
                        <div className="about-us6">Feedback</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame227" style={frame6Style}>
                <div className="itemmargin130">
                  <div className="item138">
                    <div className="link133">
                      <div className="about-us6">Free Listing</div>
                    </div>
                  </div>
                </div>
                <div className="frame228">
                  <div className="itemmargin130">
                    <div className="item139">
                      <div className="link133">
                        <div className="about-us6">Business Badge</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame229">
                <div className="itemmargin130">
                  <div className="item140">
                    <div className="link133">
                      <div className="about-us6">What's New</div>
                    </div>
                  </div>
                </div>
                <div className="frame230">
                  <div className="itemmargin130">
                    <div className="item141">
                      <div className="link133">
                        <div className="about-us6">Sr Curated list</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemmargin130">
                <div className="item142">
                  <div className="link133">
                    <div className="about-us6">Report a Bug</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container53" style={container2Style}>
            <div className="container52" style={container3Style}>
              <div className="sr-verticals5">Sr Verticals</div>
            </div>
            <div className="list12" style={list1Style}>
              <div className="frame231">
                <div className="itemmargin130">
                  <div className="item143">
                    <div className="link133">
                      <div className="about-us6">B2B</div>
                    </div>
                  </div>
                </div>
                <div className="frame232">
                  <div className="itemmargin130">
                    <div className="item144">
                      <div className="link133">
                        <div className="about-us6">Colleges</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame233">
                <div className="itemmargin130">
                  <div className="item145">
                    <div className="link133">
                      <div className="about-us6">All India</div>
                    </div>
                  </div>
                </div>
                <div className="frame234">
                  <div className="itemmargin130">
                    <div className="item146">
                      <div className="link133">
                        <div className="about-us6">AC Repair</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame235">
                <div className="frame236">
                  <div className="itemmargin130">
                    <div className="item147">
                      <div className="link133">
                        <div className="about-us6">Restaurants</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame237">
                    <div className="itemmargin130">
                      <div className="item148">
                        <div className="link133">
                          <div className="about-us6">Car Services</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame238">
                  <div className="frame239">
                    <div className="itemmargin130">
                      <div className="item149">
                        <div className="link133">
                          <div className="about-us6">Doctors</div>
                        </div>
                      </div>
                    </div>
                    <div className="frame240">
                      <div className="itemmargin130">
                        <div className="item150">
                          <div className="link133">
                            <div className="about-us6">Hotels</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame241">
                    <div className="frame242" style={frame7Style}>
                      <div className="itemmargin130">
                        <div className="item151">
                          <div className="link133">
                            <div className="about-us6">Hospitals</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame243">
                        <div className="itemmargin130">
                          <div className="item152">
                            <div className="link133">
                              <div className="about-us6">Real Estate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame244" style={frame8Style}>
                      <div className="itemmargin130">
                        <div className="item145">
                          <div className="link133">
                            <div className="about-us6">Schools</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame245">
                        <div className="itemmargin130">
                          <div className="item154">
                            <div className="link133">
                              <div className="about-us6">{`Bills & Recharge`}</div>
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

QuickLink4.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameSectionAlignSelf: PropTypes.any,
  frameSectionWidth: PropTypes.any,
  containerAlignSelf: PropTypes.any,
  containerWidth: PropTypes.any,
  listWidth: PropTypes.any,
  listAlignSelf: PropTypes.any,
  frameHeight: PropTypes.any,
  frameHeight1: PropTypes.any,
  frameHeight2: PropTypes.any,
  frameHeight3: PropTypes.any,
  containerFlex: PropTypes.any,
  containerWidth1: PropTypes.any,
  containerAlignSelf1: PropTypes.any,
  containerWidth2: PropTypes.any,
  listWidth1: PropTypes.any,
  listAlignSelf1: PropTypes.any,
  frameFlex: PropTypes.any,
  frameWidth: PropTypes.any,
  frameFlex1: PropTypes.any,
  frameMarginLeft: PropTypes.any,
  frameWidth1: PropTypes.any,
  frameSectionPosition: PropTypes.any,
  frameSectionTop: PropTypes.any,
  frameSectionLeft: PropTypes.any,
};

export default QuickLink4;
