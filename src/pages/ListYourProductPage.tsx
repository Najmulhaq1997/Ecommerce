import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ListYourProductPage.css";

const ListYourProductPage = () => {
  const navigate = useNavigate();

  const onRectangleButtonClick = useCallback(() => {
    navigate("/dashboard-products");
  }, [navigate]);

  const onSubmitTextClick = useCallback(() => {
    // Please sync "Payment plan" to the project
  }, []);

  return (
    <div className="list-your-product-page">
      <div className="parent" required={true} autoFocus={true} src>
        <label className="label1" for="file-58:2896" />
        <input className="input" type="file" id="file-58:2896" />
      </div>
      <div className="add-photos">Add Photos</div>
      <img
        className="image-upload-icon-260nw-115742"
        alt=""
        src="/imageuploadicon260nw1157424790-1@2x.png"
      />
      <TextField
        className="list-your-product-page-child"
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "59px" } }}
      />
      <TextField
        className="list-your-product-page-item"
        color="primary"
        required={true}
        fullWidth={true}
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "59px" } }}
      />
      <div className="title-item-title-container">
        <span className="title-item-title-container1">
          <p className="title">TITLE</p>
          <p className="title">&nbsp;</p>
          <p className="title">Item title</p>
        </span>
      </div>
      <div className="category">{`Category `}</div>
      <img
        className="list-your-product-page-inner"
        alt=""
        src="/rectangle-153867.svg"
      />
      <div className="price">Price</div>
      <div className="item-description">ITEM DESCRIPTION</div>
      <TextField
        className="rectangle-textfield"
        color="primary"
        required={true}
        fullWidth={true}
        sx={{ width: 938 }}
        variant="outlined"
        multiline
      />
      <div className="write-a-detailed">
        Write a detailed description of your item
      </div>
      <button className="rectangle-button" onClick={onRectangleButtonClick} />
      <div className="submit" onClick={onSubmitTextClick}>
        Submit
      </div>
      <div className="list-your-products">{`List Your Products `}</div>
      <div className="rs-9000">RS 9000</div>
    </div>
  );
};

export default ListYourProductPage;
