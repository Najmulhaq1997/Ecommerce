import { useState } from "react";
import "antd/dist/antd.min.css";
import { TextField, Icon, LinearProgress, Box, Slider } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Slider as AntSlider } from "antd";
import FrameComponent from "../components/FrameComponent";
import "./Dashboard.css";

const Dashboard = () => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="dashboard">
        <div className="frame16">
          <FrameComponent />
        </div>
        <main className="frame17">
          <section className="frame-inner">
            <main className="frame-group">
              <section className="frame-container">
                <div className="dashboard-parent">
                  <h3 className="dashboard1">Dashboard</h3>
                  <div className="frame18">
                    <div className="frame19">
                      <b className="total-views">Total Views</b>
                      <b className="k">500K</b>
                    </div>
                    <img className="frame-icon" alt="" src="/frame.svg" />
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="frame20">
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
              </section>
              <section className="frame-section">
                <div className="frame-div">
                  <div className="frame-wrapper1">
                    <div className="frame-parent1">
                      <div className="frame-parent2">
                        <div className="frame-parent3">
                          <div className="total-views-wrapper">
                            <b className="total-views">Total Views</b>
                          </div>
                          <div className="k-parent">
                            <div className="profit">100k</div>
                            <div className="profit">80k</div>
                            <div className="profit">60k</div>
                            <div className="profit">50k</div>
                            <div className="profit">20k</div>
                            <div className="profit">0</div>
                          </div>
                        </div>
                        <div className="frame21">
                          <div className="ellipse-parent">
                            <div className="ellipse-div" />
                            <div className="profit">Profit</div>
                          </div>
                        </div>
                      </div>
                      <div className="rectangle-parent">
                        <div className="frame-child1" />
                        <div className="jan">Jan</div>
                      </div>
                      <div className="frame-parent4">
                        <img
                          className="frame-child2"
                          alt=""
                          src="/frame-1000003353@2x.png"
                        />
                        <div className="than-last-month-wrapper">
                          <div className="profit">5% than last month</div>
                        </div>
                      </div>
                      <div className="rectangle-group">
                        <div className="frame-child3" />
                        <div className="jan">Feb</div>
                      </div>
                      <div className="rectangle-container">
                        <div className="frame-child4" />
                        <div className="jan">Mar</div>
                      </div>
                      <div className="rectangle-parent1">
                        <div className="frame-child5" />
                        <div className="jan">Apr</div>
                      </div>
                      <div className="rectangle-parent2">
                        <div className="frame-child3" />
                        <div className="jan">May</div>
                      </div>
                      <div className="rectangle-parent3">
                        <div className="frame-child7" />
                        <div className="jan">Jun</div>
                      </div>
                      <div className="rectangle-parent4">
                        <div className="frame-child5" />
                        <div className="jan">Jul</div>
                      </div>
                      <div className="rectangle-parent5">
                        <div className="frame-child4" />
                        <div className="jan">Aug</div>
                      </div>
                      <div className="rectangle-parent6">
                        <div className="frame-child10" />
                        <div className="jan">Sep</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper2">
                  <div className="frame-parent5">
                    <div className="most-viewed-items-wrapper">
                      <b className="total-views">{`Most Viewed Items `}</b>
                    </div>
                    <div className="frame-parent6">
                      <div className="frame-inner">
                        <div className="frame-wrapper1">
                          <div className="frame-parent7">
                            <div className="frame22">
                              <div className="jeans">Jeans</div>
                              <b className="total-views">70%</b>
                            </div>
                            <div className="frame23">
                              <div className="frame-child11" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-wrapper1">
                        <div className="frame-parent7">
                          <div className="frame22">
                            <div className="jeans">Shirts</div>
                            <b className="total-views">40%</b>
                          </div>
                          <Box className="frame25" sx={{ width: "100%" }}>
                            <LinearProgress />
                          </Box>
                        </div>
                      </div>
                      <div className="frame-wrapper1">
                        <div className="frame-parent7">
                          <div className="frame22">
                            <div className="jeans">Belts</div>
                            <b className="total-views">60%</b>
                          </div>
                          <Box className="frame25">
                            <Slider color="primary" />
                          </Box>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent10">
                      <div className="frame-wrapper7">
                        <div className="caps-parent">
                          <div className="caps">Caps</div>
                          <b className="b3">80%</b>
                          <div className="frame-child12" />
                          <div className="frame-child13" />
                        </div>
                      </div>
                      <div className="frame-parent7">
                        <div className="frame22">
                          <div className="jeans">Others</div>
                          <b className="total-views">20%</b>
                        </div>
                        <AntSlider className="frame25" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="frame-wrapper8">
                <div className="frame-inner">
                  <div className="latest-views-parent">
                    <b className="latest-views">Latest Views</b>
                    <textarea className="rectangle-textarea" />
                    <input className="rectangle-input" type="text" />
                    <div className="frame-parent12">
                      <div className="products-parent">
                        <div className="total-views">Products</div>
                        <div className="total-views">Date</div>
                      </div>
                      <div className="iphone-13-pro-parent">
                        <div className="profit">Iphone 13 Pro</div>
                        <div className="total-views">Jun 29,2022</div>
                      </div>
                      <div className="mackbook-pro-parent">
                        <div className="profit">Mackbook Pro</div>
                        <div className="total-views">Jun 29,2022</div>
                      </div>
                      <div className="apple-watch-parent">
                        <div className="profit">Apple Watch</div>
                        <div className="total-views">Jun 29,2022</div>
                      </div>
                      <div className="microsoft-book-parent">
                        <div className="profit">Microsoft Book</div>
                        <div className="total-views">Jun 29,2022</div>
                      </div>
                      <div className="apple-pen-parent">
                        <div className="profit">Apple Pen</div>
                        <div className="total-views">Jun 29,2022</div>
                      </div>
                      <div className="airpods-parent">
                        <div className="profit">Airpods</div>
                        <div className="total-views">Jun 29,2022</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default Dashboard;
