import React from "react";
import "./accordion.scss";
import { AccordIcon } from "./svg";
function Accordion({ props = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) {
  return (
    <div className="accordion">
      {props.map((item, index) => {
        return (
          <div
            className="accordion__item"
            key={`${index}${item?.id}toggler_accord`}
          >
            <input
              type="checkbox"
              className="accord__toggler"
              id={`${index}${item?.id}toggler_accord`}
            />
            <label
              htmlFor={`${index}${item?.id}toggler_accord`}
              className="accordion__item__header"
            >
              <div className="accordion__item__header__title">
                {item?.header}
              </div>
              <div className="accordion__item__header__icon">
                <AccordIcon />
              </div>
            </label>
            <div className="accordion__item__content">
              <div className="accordion__item__content__text">
                {item?.textContent}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
