import React from "react";
import "./home.css";
import CA1 from "../../assets/CA1.jpg";
import Meeting from "../../assets/Meeting.jpg";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { BiClipboard } from "react-icons/bi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { GiScales } from "react-icons/gi";
import { AiFillForward } from "react-icons/ai";
import { IoAirplane } from "react-icons/io5";
import { RiFilePaperLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { GiIronCross } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { TfiPencilAlt } from "react-icons/tfi";
import { GiBinoculars } from "react-icons/gi";

const services__data = [
  {
    name: "Auditing & Assurance Services",
    link: "#",
    description:
      "We provide various Auditing & Assurance Services to Companies and Firms and Trusts. Audit includes thorough verification of evidences, vouchers & certifications",
    icon: <BsFillCheckCircleFill className="icon" />,
  },
  {
    name: "Outsourcing, Accounting & Payroll Processing",
    link: "#",
    description:
      "Outsourcing help companies to focus on their core activities and also achieve high level of compliance. We provide accounting outsourcing services for Tally and Quick Books as well.",
    icon: <AiOutlineBarChart className="icon" />,
  },
  {
    name: "Income Tax Advisory",
    link: "#",
    description:
      "Income tax consultancy with effective tax strategies, form an integral part of our advisory. We provide income tax advice to companies as well as non-companies clients.",
    icon: <FaHandsHelping className="icon" />,
  },
  {
    name: "Virtual CFO Services",
    link: "#",
    description:
      "Many fast-growing startups and small & medium size businesses need dynamic support in financial decisions.",
    icon: <BiUserCircle className="icon" />,
  },
  {
    name: "Indian GAAPs, IND-AS & IFRS Advisory Services",
    link: "#",
    description:
      "In 2015, the Ministry of Corporate Affairs has issued a notification stating a roadmap for implementation of IND-AS converged with IFRS.",
    icon: <BiClipboard className="icon" />,
  },
  {
    name: "Initial Public Offering (IPO) Advisory & Solutions Services",
    link: "#",
    description:
      "Initial Public Offering (IPO) on Main board i.e. National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) is the ultimate solution.",
    icon: <AiOutlineAreaChart className="icon" />,
  },
  {
    name: "Goods & Service Tax (GST)",
    link: "#",
    description:
      "We provide complete GST advisory & Compliances services including registrations, returns, tax advisory & GST Audits to businesses in India.",
    icon: <GiScales className="icon" />,
  },
  {
    name: "Company Formation in India",
    link: "#",
    description:
      "We advise of right model of business and legal structure of the business entity. We assist to incorporate Private Limited, Public Limited, LLP.",
    icon: <AiFillForward className="icon" />,
  },
  {
    name: "Foreign Company Set-ups In India (India Entry Services)",
    link: "#",
    description:
      "We advise foreign entity for setting up subsidiaries, liaison offices, branches offices & project offices in India.",
    icon: <IoAirplane className="icon" />,
  },
  {
    name: "Company Law Services & Compliances",
    link: "#",
    description:
      "Indian companies are governed by Companies Act 2013 and every Company has to comply with various statutory provisions as per different sections of Companies Act 2013.",
    icon: <RiFilePaperLine className="icon" />,
  },
  {
    name: "Transfer Pricing",
    link: "#",
    description:
      "We advise Companies having commercials transactions with its international associate enterprises for tax planning, Calculation of Arm’s Length Pricing, documentation, etc…",
    icon: <BsCurrencyDollar className="icon" />,
  },
  {
    name: "Advising Indian Firms to register Companies in Foreign Countries",
    link: "#",
    description:
      "We advice Indian Companies to set-up Business in Other Countries. It also include RBI Approvals in India and future Compliances. Country wise rules summary is provided.",
    icon: <GiIronCross className="icon" />,
  },
  {
    name: "Subsidies & Government Grant Advisory",
    link: "#",
    description:
      "We advise many Companies in getting subsidies and grants for their businesses in India. We assist Companies to get approvals and funds under  Maharashtra State Packaged Scheme of Incentives 2013 (PSI 2013).",
    icon: <AiOutlineHome className="icon" />,
  },
  {
    name: "Startup Services",
    link: "#",
    description:
      "We provide complete Startup advisory services including Startup registrations, business idea validation, financial modeling.",
    icon: <TfiPencilAlt className="icon" />,
  },
  {
    name: "	Fraud Detection and Forensic Audits",
    link: "#",
    description:
      "We provide fraud detection & forensic audit services to many clients. Fraud investigation includes detailed verification’s, evidence collections, legal support for further actions to be taken.",
    icon: <GiBinoculars className="icon" />,
  },
];

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
          <div class="row">
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
      <div className="our__services">
        <h4>Our Area of Services are …</h4>
      </div>
      <div class="container text-center">
        <div class="row row__services">
          {services__data.map(({ icon, name, description, link }) => (
            <div class="col">
              <div className="services__head">
                <ul>
                  <li>{icon}</li>
                  <li>
                    <h5>
                      <a href={link}> {name} </a>
                    </h5>
                  </li>
                </ul>
              </div>
              <small className="col__small-service">{description}</small>
              <br />
              <button className="btn services__btn">
                <a href={link}>Read More > </a>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="industries__service">
        <h5>Industries We Serve</h5>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Home;
