import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PropTypes from "prop-types";
import "./Time.css";

const Time = ({ className = "" }) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const [frameDateTimePicker1Value, setFrameDateTimePicker1Value] =
    useState(null);
  const [frameDateTimePicker2Value, setFrameDateTimePicker2Value] =
    useState(null);
  const [frameDateTimePicker3Value, setFrameDateTimePicker3Value] =
    useState(null);
  const [frameDateTimePicker4Value, setFrameDateTimePicker4Value] =
    useState(null);
  const [frameDateTimePicker5Value, setFrameDateTimePicker5Value] =
    useState(null);
  const [frameDateTimePicker6Value, setFrameDateTimePicker6Value] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={`frame354 ${className}`}>
        <div className="frame-parent39">
          <div className="frame-parent40">
            <div className="frame355">
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePickerValue}
                onChange={(newValue) => {
                  setFrameDateTimePickerValue(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className="frame355">
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker1Value}
                onChange={(newValue) => {
                  setFrameDateTimePicker1Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className="frame355">
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker2Value}
                onChange={(newValue) => {
                  setFrameDateTimePicker2Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className="frame355">
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker3Value}
                onChange={(newValue) => {
                  setFrameDateTimePicker3Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className="frame355">
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker4Value}
                onChange={(newValue) => {
                  setFrameDateTimePicker4Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className="frame355">
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker5Value}
                onChange={(newValue) => {
                  setFrameDateTimePicker5Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className="frame355">
              <TimePicker
                label="9:00 AM - 10:00 PM"
                value={frameDateTimePicker6Value}
                onChange={(newValue) => {
                  setFrameDateTimePicker6Value(newValue);
                }}
                sx={{}}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: true,
                    error: false,
                    color: "primary",
                    placeholder: "9:00 AM - 10:00 PM",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
          </div>
          <div className="frame-parent41">
            <div className="monday-frame">
              <div className="monday2">{`Monday `}</div>
            </div>
            <div className="monday-frame">
              <div className="monday2">Tuesday</div>
            </div>
            <div className="wednesday-wrapper">
              <div className="wednesday2">{`Wednesday `}</div>
            </div>
            <div className="monday-frame">
              <div className="monday2">Thursday</div>
            </div>
            <div className="friday-frame">
              <div className="friday2">{`Friday `}</div>
            </div>
            <div className="saturday-frame">
              <div className="saturday2">{`Saturday `}</div>
            </div>
            <div className="monday-frame">
              <div className="monday2">Sunday</div>
            </div>
          </div>
        </div>
        <div className="shop-opening-hours">Shop Opening Hours</div>
        <nav className="frame-nav">
          <div className="frame362">
            <div className="get-directions-wrapper1">
              <h2 className="get-directions3" direction>
                Get Directions
              </h2>
            </div>
            <input
              className="rectangle-input4"
              readOnly={true}
              type="checkbox"
              icn
            />
          </div>
          <img className="frame-child79" alt="" src="/vector-1@2x.png" />
        </nav>
      </div>
    </LocalizationProvider>
  );
};

Time.propTypes = {
  className: PropTypes.string,
};

export default Time;
