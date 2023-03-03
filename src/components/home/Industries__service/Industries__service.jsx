import React from "react";
import "./industries__service.css";
import { AiOutlineCheck } from "react-icons/ai";
import Manserv from "../../../assets/manserv.png";

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

const Industries__service = () => {
  return (
    <div className="industries__service">
      <h5>Industries We Serve</h5>
      <div className="line"></div>
      <div class="container text-center">
        <div class="row row__industries">
          {industries__list.map(({ name }) => (
            <div class="col row__industries-list">
              <div className="industries__list">
                <ul>
                  <li>
                    <AiOutlineCheck />
                  </li>
                  <li>{name}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div class="industries__img">
          <img src={Manserv} alt="man"></img>
        </div>
      </div>
    </div>
  );
};

export default Industries__service;
