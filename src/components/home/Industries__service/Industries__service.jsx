import React from "react";
import "./industries__service.css";
import { AiOutlineCheck } from "react-icons/ai";
import Manserv from "../../../assets/manserv.png";
import { industries__list } from "../../Data__structure";

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
