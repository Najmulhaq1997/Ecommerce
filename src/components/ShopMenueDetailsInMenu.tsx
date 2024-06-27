import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./ShopMenueDetailsInMenu.css";

const ShopMenueDetailsInMenu = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper24 ${className}`}>
      <div className="frame-wrapper25">
        <div className="frame-parent27">
          <div className="frame103">
            <div className="get-directions-container">
              <h2 className="get-directions1" direction>
                Get Directions
              </h2>
            </div>
            <div className="rectangle-parent23">
              <input
                className="rectangle-input2"
                readOnly={true}
                type="checkbox"
                icn
              />
              <img className="group-child15" alt="" src="/vector-1@2x.png" />
            </div>
          </div>
          <div className="rectangle-parent24">
            <TextField
              className="frame-child38"
              color="primary"
              variant="filled"
              sx={{
                "& .MuiInputBase-root": { height: "40px" },
                width: "222px",
              }}
            />
            <div className="div9">+940000000000</div>
          </div>
          <div className="address1">Address</div>
          <div className="frame104">
            <div className="am-10007">9:00 AM - 10:00 PM</div>
          </div>
          <div className="spicy-kitchen-restaurant-container">
            <h1 className="spicy-kitchen-restaurant1">
              Spicy Kitchen Restaurant
            </h1>
          </div>
          <div className="frame-child39" />
          <div className="d-wellawatha-rode-colombo-sri-container">
            <div className="d-wellawatha-rode-container1">
              <p className="d-wellawatha-rode1">
                586,d Wellawatha rode colombo
              </p>
              <p className="d-wellawatha-rode1">{`sri lanka (call to action) `}</p>
            </div>
          </div>
          <button className="frame-child40" />
          <div className="group-container">
            <button className="group1">
              <img className="vector-icon14" alt="" src="/vector@2x.png" />
              <img className="vector-icon15" alt="" src="/vector@2x.png" />
              <img
                className="group-child16"
                alt=""
                src="/rectangle-153845@2x.png"
              />
              <img className="vector-icon16" alt="" src="/vector@2x.png" />
              <img className="vector-icon17" alt="" src="/vector@2x.png" />
              <div className="chat3">Chat</div>
            </button>
          </div>
          <button className="frame-child41" />
          <div className="frame-wrapper26">
            <div className="frame105">
              <div className="am-10007">9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className="frame-wrapper27">
            <div className="frame106">
              <div className="am-10007">9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className="frame-wrapper28">
            <div className="frame107">
              <div className="am-10007">9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className="frame-child42" />
          <div className="frame-wrapper29">
            <div className="frame108">
              <div className="am-10007">9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className="frame-wrapper30">
            <div className="frame109">
              <div className="am-10007">9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className="frame-wrapper31">
            <div className="frame106">
              <div className="am-10007">9:00 AM - 10:00 PM</div>
            </div>
          </div>
          <div className="tuesday-group">
            <div className="tuesday1">Tuesday</div>
            <div className="wednesday-group">
              <div className="wednesday1">{`Wednesday `}</div>
              <div className="thursday1">Thursday</div>
              <div className="sunday-container">
                <div className="sunday1">Sunday</div>
              </div>
              <div className="saturday-container">
                <div className="saturday1">{`Saturday `}</div>
              </div>
              <div className="frame-wrapper32">
                <div className="friday-container">
                  <div className="friday1">{`Friday `}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="monday-container">
            <div className="monday1">{`Monday `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopMenueDetailsInMenu.propTypes = {
  className: PropTypes.string,
};

export default ShopMenueDetailsInMenu;
