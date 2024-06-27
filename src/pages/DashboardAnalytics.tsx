import { useState, useCallback } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import DashBordMenuAny from "../components/DashBordMenuAny";
import { useNavigate } from "react-router-dom";
import Frame1 from "../components/Frame1";
import "./DashboardAnalytics.css";

const DashboardAnalytics = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="dashboard-analytics">
        <div className="frame-parent14">
          <div className="frame37">
            <DashBordMenuAny />
            <button className="frame38" onClick={onFrameClick}>
              <div className="dashboard-group">
                <div className="dashboard2">Dashboard</div>
                <img className="vector-icon2" alt="" src="/vector6.svg" />
              </div>
            </button>
          </div>
          <Frame1 />
        </div>
        <div className="frame39">
          <div className="frame40" />
          <div className="frame41">
            <div className="analytics-wrapper">
              <b className="analytics">Analytics</b>
            </div>
            <div className="frame42">
              <DateTimePicker
                label="28 jan, 2021 - 28 Dec, 2021"
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
                    placeholder: "28 jan, 2021 - 28 Dec, 2021",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
          </div>
          <div className="frame43">
            <div className="frame-inner1">
              <div className="frame-parent15">
                <div className="most-viewed-items-container">
                  <b className="most-viewed-items1">{`Most Viewed Items `}</b>
                </div>
                <div className="frame-parent16">
                  <div className="frame-wrapper10">
                    <div className="frame-wrapper11">
                      <div className="frame-parent17">
                        <div className="frame44">
                          <div className="jeans1">Jeans</div>
                          <b className="most-viewed-items1">70%</b>
                        </div>
                        <div className="frame45">
                          <div className="frame-child14" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper11">
                    <div className="frame-parent17">
                      <div className="frame44">
                        <div className="jeans1">Shirts</div>
                        <b className="most-viewed-items1">40%</b>
                      </div>
                      <div className="frame47">
                        <div className="frame-child15" />
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper11">
                    <div className="frame-parent17">
                      <div className="frame44">
                        <div className="jeans1">Belts</div>
                        <b className="most-viewed-items1">60%</b>
                      </div>
                      <div className="frame49">
                        <div className="frame-child16" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent20">
                  <div className="frame-wrapper14">
                    <div className="caps-group">
                      <div className="caps1">Caps</div>
                      <b className="b8">80%</b>
                      <div className="frame-child17" />
                      <div className="frame-child18" />
                    </div>
                  </div>
                  <div className="frame-parent17">
                    <div className="frame44">
                      <div className="jeans1">Others</div>
                      <b className="most-viewed-items1">20%</b>
                    </div>
                    <div className="frame51">
                      <div className="frame-child19" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-inner2">
              <div className="frame-wrapper11">
                <div className="frame-parent22">
                  <div className="frame-parent23">
                    <div className="frame-parent24">
                      <div className="total-views-container">
                        <b className="most-viewed-items1">Total Views</b>
                      </div>
                      <div className="k-group">
                        <div className="k6">100k</div>
                        <div className="k6">80k</div>
                        <div className="k6">60k</div>
                        <div className="k6">50k</div>
                        <div className="k6">20k</div>
                        <div className="k6">0</div>
                      </div>
                    </div>
                    <div className="frame52">
                      <div className="ellipse-group">
                        <div className="frame-child20" />
                        <div className="k6">Profit</div>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-parent7">
                    <div className="frame-child21" />
                    <div className="frame53">
                      <div className="k6">Jan</div>
                    </div>
                  </div>
                  <div className="frame-parent25">
                    <img
                      className="frame-child22"
                      alt=""
                      src="/frame-1000003353.svg"
                    />
                    <div className="than-last-month-container">
                      <div className="k6">5% than last month</div>
                    </div>
                  </div>
                  <div className="rectangle-parent8">
                    <div className="frame-child23" />
                    <div className="frame54">
                      <div className="k6">Feb</div>
                    </div>
                  </div>
                  <div className="rectangle-parent9">
                    <div className="frame-child24" />
                    <div className="frame55">
                      <div className="k6">Mar</div>
                    </div>
                  </div>
                  <div className="rectangle-parent10">
                    <div className="frame-child25" />
                    <div className="frame54">
                      <div className="k6">Apr</div>
                    </div>
                  </div>
                  <div className="rectangle-parent11">
                    <div className="frame-child23" />
                    <div className="frame57">
                      <div className="k6">May</div>
                    </div>
                  </div>
                  <div className="rectangle-parent12">
                    <div className="frame-child27" />
                    <div className="frame58">
                      <div className="k6">Jun</div>
                    </div>
                  </div>
                  <div className="rectangle-parent13">
                    <div className="frame-child25" />
                    <div className="frame59">
                      <div className="k6">Jul</div>
                    </div>
                  </div>
                  <div className="rectangle-parent14">
                    <div className="frame-child24" />
                    <div className="frame55">
                      <div className="k6">Aug</div>
                    </div>
                  </div>
                  <div className="rectangle-parent15">
                    <div className="frame-child30" />
                    <div className="frame54">
                      <div className="k6">Sep</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default DashboardAnalytics;
