import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./Shopinput.css";

const Shopinput = ({ className = "" }) => {
  return (
    <div className={`frame353 ${className}`}>
      <b className="shop-details4">Shop Details</b>
      <div className="parent1" required={true} autoFocus={true}>
        <label className="label7" for="file-82:6101" />
        <input className="input1" type="file" id="file-82:6101" />
      </div>
      <div className="add-your-shop">Add your Shop banner</div>
      <img
        className="image-upload-icon-260nw-1157421"
        alt=""
        src="/imageuploadicon260nw1157424790-3@2x.png"
      />
      <div className="shop-name">{`Shop Name `}</div>
      <TextField
        className="frame-child75"
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "61px" } }}
      />
      <div className="add-your-shop1">Add your shop Name</div>
      <div className="address2">Address</div>
      <TextField
        className="frame-child76"
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "85px" } }}
      />
      <input
        className="enter-your-shop"
        placeholder="Enter Your Shop Address"
        type="text"
      />
      <TextField
        className="frame-child77"
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "46px" } }}
      />
      <div className="contact-number"> Contact Number</div>
      <input className="input2" placeholder="+94700058000" type="text" />
      <TextField
        className="frame-child78"
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "46px" } }}
      />
      <div className="div19">+94700058000</div>
      <div className="whatsapp-number">WhatsApp Number</div>
    </div>
  );
};

Shopinput.propTypes = {
  className: PropTypes.string,
};

export default Shopinput;
