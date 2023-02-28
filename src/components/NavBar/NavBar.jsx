import React from "react";
import "./navBar.css";

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
    icon: <BsFillCheckCircleFill />,
  },
  {
    name: "Outsourcing, Accounting & Payroll Processing",
    link: "#",
    description:
      "Outsourcing help companies to focus on their core activities and also achieve high level of compliance. We provide accounting outsourcing services for Tally and Quick Books as well.",
    icon: <AiOutlineBarChart />,
  },
  {
    name: "Income Tax Advisory",
    link: "#",
    description:
      "Income tax consultancy with effective tax strategies, form an integral part of our advisory. We provide income tax advice to companies as well as non-companies clients.",
    icon: <FaHandsHelping />,
  },
  {
    name: "Virtual CFO Services",
    link: "#",
    description:
      "Many fast-growing startups and small & medium size businesses need dynamic support in financial decisions.",
    icon: <BiUserCircle />,
  },
  {
    name: "Indian GAAPs, IND-AS & IFRS Advisory Services",
    link: "#",
    description:
      "In 2015, the Ministry of Corporate Affairs has issued a notification stating a roadmap for implementation of IND-AS converged with IFRS.",
    icon: <BiClipboard />,
  },
  {
    name: "Initial Public Offering (IPO) Advisory & Solutions Services",
    link: "#",
    description:
      "Initial Public Offering (IPO) on Main board i.e. National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) is the ultimate solution.",
    icon: <AiOutlineAreaChart />,
  },
  {
    name: "Goods & Service Tax (GST)",
    link: "#",
    description:
      "We provide complete GST advisory & Compliances services including registrations, returns, tax advisory & GST Audits to businesses in India.",
    icon: <GiScales />,
  },
  {
    name: "Company Formation in India",
    link: "#",
    description:
      "We advise of right model of business and legal structure of the business entity. We assist to incorporate Private Limited, Public Limited, LLP.",
    icon: <AiFillForward />,
  },
  {
    name: "Foreign Company Set-ups In India (India Entry Services)",
    link: "#",
    description:
      "We advise foreign entity for setting up subsidiaries, liaison offices, branches offices & project offices in India.",
    icon: <IoAirplane />,
  },
  {
    name: "Company Law Services & Compliances",
    link: "#",
    description:
      "Indian companies are governed by Companies Act 2013 and every Company has to comply with various statutory provisions as per different sections of Companies Act 2013.",
    icon: <RiFilePaperLine />,
  },
  {
    name: "Transfer Pricing",
    link: "#",
    description:
      "We advise Companies having commercials transactions with its international associate enterprises for tax planning, Calculation of Arm’s Length Pricing, documentation, etc…",
    icon: <BsCurrencyDollar />,
  },
  {
    name: "Advising Indian Firms to register Companies in Foreign Countries",
    link: "#",
    description: "",
    icon: <GiIronCross />,
  },
  {
    name: "Subsidies & Government Grant Advisory",
    link: "#",
    description:
      "We advise many Companies in getting subsidies and grants for their businesses in India. We assist Companies to get approvals and funds under  Maharashtra State Packaged Scheme of Incentives 2013 (PSI 2013).",
    icon: <AiOutlineHome />,
  },
  {
    name: "Startup Services",
    link: "#",
    description:
      "We provide complete Startup advisory services including Startup registrations, business idea validation, financial modeling.",
    icon: <TfiPencilAlt />,
  },
  {
    name: "	Fraud Detection and Forensic Audits",
    link: "#",
    description:
      "We provide fraud detection & forensic audit services to many clients. Fraud investigation includes detailed verification’s, evidence collections, legal support for further actions to be taken.",
    icon: <GiBinoculars />,
  },
];

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          Vidarbha Associates
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SERVICES
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {services__data.map(({ name, link }) => (
                  <a className="dropdown-item" href={link}>
                    {name}
                  </a>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
