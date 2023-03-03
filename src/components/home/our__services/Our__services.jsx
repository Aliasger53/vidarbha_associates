import React from "react";
import "./our__services.css";
import { services__data } from "../../Data__structure";

const Our__services = () => {
  return (
    <>
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
    </>
  );
};

export default Our__services;
