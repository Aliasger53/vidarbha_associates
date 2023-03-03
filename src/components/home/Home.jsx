import React from "react";
import "./home.css";
import CA1 from "../../assets/CA1.jpg";
import Meeting from "../../assets/Meeting.jpg";
import Industries__service from "./Industries__service/Industries__service";
import Our__services from "./our__services/Our__services";

const Home = () => {
  return (
    <>
      <div className="container__home">
        <img src={CA1} alt="CA" />
        <div className="welcome__msg">
          <h3> Welcome To Vidarbha Associates</h3>Accounting, Tax & Audit Firm
        </div>
        <div class="container">
          <h2 className="about__short-home">
            Accounting , Audit ,Taxation & Corporate Advisory Firm
          </h2>
          <div className="line"></div>
          <div class="row row__about-short">
            <div class="col-sm">
              <img src={Meeting} alt="Meeting" />
            </div>
            <div class="col-sm">
              Vidarbha Associates, CA firm in Nagpur, India established in the
              year 2022. We are team of Chartered Accountants, Lawyers in India
              we have been rendering a multitude of services under one roof over
              the past 1 years in the field of Accounts outsourcing, Auditing,
              Company formation in India, Business Taxation, Direct and Indirect
              Taxation, International Taxation, Starting business in India,
              registration of foreign companies, transfer pricing, Goods &
              Services Tax (GST), Company Law Consultancy, NRI Taxation, Startup
              Services and Book-Keeping & Outsourcing Services, Valuations and
              Insolvency Advisory Services.
              <br />
              <button className="about__short-btn btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="our__services-short">
        <h3>WHAT WE DO</h3>
        <h5>
          We assist clients in Audits, Tax & Accounting and other services
        </h5>
        <div className="line__services-short"></div>
        <small>
          We at Vidarbha Associates provide many services for Income Tax,
          International Tax and Transfer Pricing , Goods and Services Tax (
          GST), Book Keeping & Accounting in Tally as well as Quickbooks
          Accounting , Auditing , India Entry Services and Overseas Business
          Setup Services and many more financial services.
        </small>
      </div>
      <Our__services />
      <Industries__service />
    </>
  );
};

export default Home;
