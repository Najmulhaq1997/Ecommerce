import { memo } from "react";
import PropTypes from "prop-types";
import "./QuickLink.css";

const QuickLink = memo(({ className = "" }) => {
  return (
    <section className={`border-container ${className}`}>
      <div className="border1">
        <div className="container12">
          <div className="container13">
            <div className="container14">
              <div className="quick-links1">Quick Links</div>
            </div>
            <div className="list2">
              <div className="itemmargin23">
                <div className="item23">
                  <div className="link26">
                    <div className="bills-recharge">About us</div>
                  </div>
                </div>
              </div>
              <div className="frame72">
                <div className="itemmargin24">
                  <div className="item24">
                    <div className="link26">
                      <div className="bills-recharge">Advertise</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemmargin25">
                <div className="item25">
                  <div className="link26">
                    <div className="bills-recharge">Investor Relations</div>
                  </div>
                </div>
              </div>
              <div className="frame73">
                <div className="itemmargin24">
                  <div className="item26">
                    <div className="link26">
                      <div className="bills-recharge">Media</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemmargin27">
                <div className="item27">
                  <div className="link26">
                    <div className="bills-recharge">We're hiring</div>
                  </div>
                </div>
              </div>
              <div className="frame74">
                <div className="itemmargin24">
                  <div className="item28">
                    <div className="link26">
                      <div className="bills-recharge">Testimonials</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemmargin29">
                <div className="item29">
                  <div className="link26">
                    <div className="bills-recharge">Customer Care</div>
                  </div>
                </div>
              </div>
              <div className="frame75">
                <div className="itemmargin24">
                  <div className="item30">
                    <div className="link26">
                      <div className="bills-recharge">Feedback</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemmargin31">
                <div className="item31">
                  <div className="link26">
                    <div className="bills-recharge">Free Listing</div>
                  </div>
                </div>
              </div>
              <div className="frame76">
                <div className="itemmargin24">
                  <div className="item32">
                    <div className="link26">
                      <div className="bills-recharge">Business Badge</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemmargin33">
                <div className="item33">
                  <div className="link26">
                    <div className="bills-recharge">What's New</div>
                  </div>
                </div>
              </div>
              <div className="frame77">
                <div className="itemmargin24">
                  <div className="item34">
                    <div className="link26">
                      <div className="bills-recharge">Sr Curated list</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemmargin35">
                <div className="item35">
                  <div className="link26">
                    <div className="bills-recharge">Report a Bug</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container15">
            <div className="container16">
              <div className="sr-verticals1">Sr Verticals</div>
            </div>
            <div className="list3">
              <div className="itemmargin36">
                <div className="item36">
                  <div className="link26">
                    <div className="bills-recharge">B2B</div>
                  </div>
                </div>
              </div>
              <div className="itemmargin37">
                <div className="item37">
                  <div className="link26">
                    <div className="bills-recharge">All India</div>
                  </div>
                </div>
              </div>
              <div className="itemmargin38">
                <div className="item38">
                  <div className="link26">
                    <div className="bills-recharge">Restaurants</div>
                  </div>
                </div>
              </div>
              <div className="itemmargin39">
                <div className="item39">
                  <div className="link26">
                    <div className="bills-recharge">Doctors</div>
                  </div>
                </div>
              </div>
              <div className="itemmargin40">
                <div className="item40">
                  <div className="link26">
                    <div className="bills-recharge">Hospitals</div>
                  </div>
                </div>
              </div>
              <div className="frame78">
                <div className="itemmargin24">
                  <div className="item41">
                    <div className="link26">
                      <div className="bills-recharge">Colleges</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame79">
                <div className="itemmargin24">
                  <div className="item42">
                    <div className="link26">
                      <div className="bills-recharge">AC Repair</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame80">
                <div className="itemmargin24">
                  <div className="item43">
                    <div className="link26">
                      <div className="bills-recharge">Car Services</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame81">
                <div className="itemmargin24">
                  <div className="item44">
                    <div className="link26">
                      <div className="bills-recharge">Hotels</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame82">
                <div className="itemmargin24">
                  <div className="item45">
                    <div className="link26">
                      <div className="bills-recharge">Real Estate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame83">
              <div className="itemmargin24">
                <div className="item46">
                  <div className="link26">
                    <div className="bills-recharge">{`Bills & Recharge`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="itemmargin24">
              <div className="item37">
                <div className="link26">
                  <div className="bills-recharge">Schools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

QuickLink.propTypes = {
  className: PropTypes.string,
};

export default QuickLink;
