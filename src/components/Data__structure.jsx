// Our services data imports

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

// Footer imports
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

// Our services data

const services__data = [
  {
    name: "GST Registration & Return Filing",
    link: "#",
    description:
      "We provide various Auditing & Assurance Services to Companies and Firms and Trusts. Audit includes thorough verification of evidences, vouchers & certifications",
    icon: <BsFillCheckCircleFill className="icon" />,
  },
  {
    name: "TDS & TCS Retirn Filing",
    link: "#",
    description:
      "Outsourcing help companies to focus on their core activities and also achieve high level of compliance. We provide accounting outsourcing services for Tally and Quick Books as well.",
    icon: <AiOutlineBarChart className="icon" />,
  },
  {
    name: "ITR (Income Tax Return)",
    link: "#",
    description:
      "Income tax consultancy with effective tax strategies, form an integral part of our advisory. We provide income tax advice to companies as well as non-companies clients.",
    icon: <FaHandsHelping className="icon" />,
  },
  {
    name: "Company Compliance (ROC compliances)",
    link: "#",
    description:
      "Many fast-growing startups and small & medium size businesses need dynamic support in financial decisions.",
    icon: <BiUserCircle className="icon" />,
  },
  {
    name: "Monthly Accounting & Book Keeping",
    link: "#",
    description:
      "In 2015, the Ministry of Corporate Affairs has issued a notification stating a roadmap for implementation of IND-AS converged with IFRS.",
    icon: <BiClipboard className="icon" />,
  },
  {
    name: "Other Legal & Taxation Matters",
    link: "#",
    description:
      "Initial Public Offering (IPO) on Main board i.e. National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) is the ultimate solution.",
    icon: <AiOutlineAreaChart className="icon" />,
  },
  {
    name: "Company Incorporation",
    link: "#",
    description:
      "We provide complete GST advisory & Compliances services including registrations, returns, tax advisory & GST Audits to businesses in India.",
    icon: <GiScales className="icon" />,
  },
  {
    name: "Digital Signature",
    link: "#",
    description:
      "We advise of right model of business and legal structure of the business entity. We assist to incorporate Private Limited, Public Limited, LLP.",
    icon: <AiFillForward className="icon" />,
  },
  {
    name: "Pan & Tan Application",
    link: "#",
    description:
      "We advise foreign entity for setting up subsidiaries, liaison offices, branches offices & project offices in India.",
    icon: <IoAirplane className="icon" />,
  },
  {
    name: "IPR(Trademark, Copyright, Patent)",
    link: "#",
    description:
      "Indian companies are governed by Companies Act 2013 and every Company has to comply with various statutory provisions as per different sections of Companies Act 2013.",
    icon: <RiFilePaperLine className="icon" />,
  },
  {
    name: "Gumasta (Shop Registration)",
    link: "#",
    description:
      "We advise Companies having commercials transactions with its international associate enterprises for tax planning, Calculation of Arm’s Length Pricing, documentation, etc…",
    icon: <BsCurrencyDollar className="icon" />,
  },
  {
    name: "Partnership Deed Registration",
    link: "#",
    description:
      "We advice Indian Companies to set-up Business in Other Countries. It also include RBI Approvals in India and future Compliances. Country wise rules summary is provided.",
    icon: <GiIronCross className="icon" />,
  },
  {
    name: "MSME Registration(Udyog Aadhar)",
    link: "#",
    description:
      "We advise many Companies in getting subsidies and grants for their businesses in India. We assist Companies to get approvals and funds under  Maharashtra State Packaged Scheme of Incentives 2013 (PSI 2013).",
    icon: <AiOutlineHome className="icon" />,
  },
  {
    name: "Property Tax Planing",
    link: "#",
    description:
      "We provide complete Startup advisory services including Startup registrations, business idea validation, financial modeling.",
    icon: <TfiPencilAlt className="icon" />,
  },
  // {
  //   name: "	Fraud Detection and Forensic Audits",
  //   link: "#",
  //   description:
  //     "We provide fraud detection & forensic audit services to many clients. Fraud investigation includes detailed verification’s, evidence collections, legal support for further actions to be taken.",
  //   icon: <GiBinoculars className="icon" />,
  // },
];

// industries we serve data

const industries__list = [
  { name: "Banking & Financial Services" },
  { name: "Cooperative Societies" },
  { name: "Urban Municipal Corporation" },
  { name: "Auto Ancillaries" },
  { name: "Software &Allied Services" },
  { name: "Agro Based Industries" },
  { name: "Real Estate Developers" },
  { name: "Plastic Manufacturing Industries" },
  { name: "Forging Industry" },
  { name: "Tools & Dies Manufacturing" },
  { name: "Domestic Consumable Manufacturing" },
  { name: "Business & Management Consultancy" },
  { name: "Pharma Product Manufacturing" },
  { name: "BioTech & Research Companies" },
  { name: "Industrial Catering, Facility Management Services" },
  { name: "Central & State Government Departments" },
  { name: "E-Commerce Companies" },
  { name: "Startups" },
  { name: "Smart City Development Corporations" },
  { name: "Industrial Manufacturing Companies" },
];

// contact list

const contact__list = [
  {
    href: "tel:+918928755932",
    icon: <BiPhoneCall />,
    text: "+91 89287 55932",
  },
  {
    href: "https://wa.me/+918928755932",
    icon: <BsWhatsapp />,
    text: "WhatsApp",
  },
  {
    href: "mailto:va.office52@gmail.com",
    icon: <MdOutlineEmail />,
    text: "va.office52@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/hamza-bombaywala-17bba0136",
    icon: <BsLinkedin />,
    text: "LinkedIn",
  },
  {
    href: "#",
    icon: <AiOutlineTwitter />,
    text: "Twitter",
  },
  {
    href: "#",
    icon: <BsFacebook />,
    text: "Facebook",
  },
  {
    href: "#",
    icon: <BsInstagram />,
    text: "Instagram",
  },
];

export { services__data };
export { industries__list };
export { contact__list };
