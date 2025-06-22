import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./main3.jpg" alt="Our value" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always help you find the right property. <br />
            The best service to buy a home with future value.
          </span>

          <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="accordion">
            {data.map((item, i) => (
              <AccordionItem key={i} uuid={i}>
                <AccordionItemState>
                  {({ expanded }) => (
                    <div className={`accordionItem ${expanded ? "expanded" : "collapsed"}`}>
                      <AccordionItemHeading>
                        <AccordionItemButton className="accordionButton flexCenter">
                          <div className="icon">{item.icon}</div>
                          <span className="primaryText">{item.heading}</span>
                          <div className="icon">
                            <MdOutlineArrowDropDown size={20} />
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="secondaryText">{item.detail}</p>
                      </AccordionItemPanel>
                    </div>
                  )}
                </AccordionItemState>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
