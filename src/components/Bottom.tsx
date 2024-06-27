import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import "./Bottom.css";

const Bottom = memo(
  ({
    className = "",
    containerAlignSelf,
    containerWidth,
    containerWidth1,
    copyrights200824AllFlex,
    linkFlex,
    containerWidth2,
    containerRight,
    containerLeft,
    linkFlex1,
    containerWidth3,
    containerRight1,
    containerLeft1,
    linkFlex2,
    containerPosition,
    containerTop,
    containerLeft2,
    onLinkContainerClick,
    containerHeight,
    containerAlignSelf1,
    privacyFlex,
    divAlignSelf,
    termsFlex,
    divAlignSelf1,
    infringementFlex,
  }) => {
    const container4Style = useMemo(() => {
      return {
        alignSelf: containerAlignSelf,
        width: containerWidth,
        position: containerPosition,
        top: containerTop,
        left: containerLeft2,
        height: containerHeight,
      };
    }, [
      containerAlignSelf,
      containerWidth,
      containerPosition,
      containerTop,
      containerLeft2,
      containerHeight,
    ]);

    const container5Style = useMemo(() => {
      return {
        width: containerWidth1,
        alignSelf: containerAlignSelf1,
      };
    }, [containerWidth1, containerAlignSelf1]);

    const copyrights200824AllStyle = useMemo(() => {
      return {
        flex: copyrights200824AllFlex,
      };
    }, [copyrights200824AllFlex]);

    const linkStyle = useMemo(() => {
      return {
        flex: linkFlex,
      };
    }, [linkFlex]);

    const container6Style = useMemo(() => {
      return {
        width: containerWidth2,
        right: containerRight,
        left: containerLeft,
      };
    }, [containerWidth2, containerRight, containerLeft]);

    const link1Style = useMemo(() => {
      return {
        flex: linkFlex1,
      };
    }, [linkFlex1]);

    const container7Style = useMemo(() => {
      return {
        width: containerWidth3,
        right: containerRight1,
        left: containerLeft1,
      };
    }, [containerWidth3, containerRight1, containerLeft1]);

    const link2Style = useMemo(() => {
      return {
        flex: linkFlex2,
      };
    }, [linkFlex2]);

    const privacyStyle = useMemo(() => {
      return {
        flex: privacyFlex,
      };
    }, [privacyFlex]);

    const divStyle = useMemo(() => {
      return {
        alignSelf: divAlignSelf,
      };
    }, [divAlignSelf]);

    const termsStyle = useMemo(() => {
      return {
        flex: termsFlex,
      };
    }, [termsFlex]);

    const div1Style = useMemo(() => {
      return {
        alignSelf: divAlignSelf1,
      };
    }, [divAlignSelf1]);

    const infringementStyle = useMemo(() => {
      return {
        flex: infringementFlex,
      };
    }, [infringementFlex]);

    return (
      <section className={`container60 ${className}`} style={container4Style}>
        <div className="container61" style={container5Style}>
          <div
            className="copyrights-2008-24-all1"
            style={copyrights200824AllStyle}
          >
            Copyrights 2008-24.  All Rights Reserved.
          </div>
          <div className="link175" style={linkStyle}>
            <div className="privacy1" style={privacyStyle}>
              Privacy
            </div>
            <div className="container62" style={container6Style}>
              <div className="div20" style={divStyle}>
                |
              </div>
            </div>
          </div>
          <div
            className="link176"
            style={link1Style}
            onClick={onLinkContainerClick}
          >
            <div className="privacy1" style={termsStyle}>
              Terms
            </div>
            <div className="container63" style={container7Style}>
              <div className="div20" style={div1Style}>
                |
              </div>
            </div>
          </div>
          <div className="link177" style={link2Style}>
            <div className="div20" style={infringementStyle}>
              Infringement
            </div>
          </div>
        </div>
      </section>
    );
  }
);

Bottom.propTypes = {
  className: PropTypes.string,

  /** Style props */
  containerAlignSelf: PropTypes.any,
  containerWidth: PropTypes.any,
  containerWidth1: PropTypes.any,
  copyrights200824AllFlex: PropTypes.any,
  linkFlex: PropTypes.any,
  containerWidth2: PropTypes.any,
  containerRight: PropTypes.any,
  containerLeft: PropTypes.any,
  linkFlex1: PropTypes.any,
  containerWidth3: PropTypes.any,
  containerRight1: PropTypes.any,
  containerLeft1: PropTypes.any,
  linkFlex2: PropTypes.any,
  containerPosition: PropTypes.any,
  containerTop: PropTypes.any,
  containerLeft2: PropTypes.any,
  containerHeight: PropTypes.any,
  containerAlignSelf1: PropTypes.any,
  privacyFlex: PropTypes.any,
  divAlignSelf: PropTypes.any,
  termsFlex: PropTypes.any,
  divAlignSelf1: PropTypes.any,
  infringementFlex: PropTypes.any,

  /** Action props */
  onLinkContainerClick: PropTypes.func,
};

export default Bottom;
