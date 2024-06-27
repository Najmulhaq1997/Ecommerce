import { useMemo } from "react";
import PropTypes from "prop-types";
import "./MenuelistCom.css";

const MenuelistCom = ({
  className = "",
  component37Position,
  component37Top,
  component37Left,
}) => {
  const component37Style = useMemo(() => {
    return {
      position: component37Position,
      top: component37Top,
      left: component37Left,
    };
  }, [component37Position, component37Top, component37Left]);

  return (
    <div className={`component-37 ${className}`} style={component37Style}>
      <div className="component-37-child" />
      <img
        className="component-37-item"
        alt=""
        src="/rectangle-153842@2x.png"
      />
      <h1 className="hajiyar-hottel">Hajiyar Hottel</h1>
      <div className="mask-group-parent">
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
        <img className="mask-group-icon1" alt="" src="/mask-group@2x.png" />
        <img className="mask-group-icon2" alt="" src="/mask-group@2x.png" />
        <img className="mask-group-icon3" alt="" src="/mask-group@2x.png" />
        <img className="mask-group-icon4" alt="" src="/mask-group@2x.png" />
      </div>
      <div className="group-div">
        <div className="group-child" />
        <div className="div4">4.5</div>
        <div className="rating">500 Rating</div>
      </div>
      <div className="image-2-parent">
        <img className="image-2-icon" alt="" src="/image-2@2x.png" />
        <h1 className="baticalo-sri-lanka">Baticalo, Sri Lanka.</h1>
      </div>
      <div className="people-recently-enquired-parent">
        <div className="people-recently-enquired">
          115 People Recently Enquired
        </div>
        <img className="image-5-icon" alt="" src="/image-5@2x.png" />
      </div>
      <img className="image-6-icon" alt="" src="/image-6@2x.png" />
      <div className="rectangle-parent16">
        <div className="group-item" />
        <div className="group-inner" />
        <img className="image-4-icon" alt="" src="/image-4@2x.png" />
        <h2 className="chat">Chat</h2>
        <input className="group-child1" type="text" />
        <div className="div5">094 700000000</div>
        <h2 className="menu">Menu</h2>
        <div className="line-mdphone-call" />
        <img className="group-icon" alt="" src="/group@2x.png" />
      </div>
    </div>
  );
};

MenuelistCom.propTypes = {
  className: PropTypes.string,

  /** Style props */
  component37Position: PropTypes.any,
  component37Top: PropTypes.any,
  component37Left: PropTypes.any,
};

export default MenuelistCom;
