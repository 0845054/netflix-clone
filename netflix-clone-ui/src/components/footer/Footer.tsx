import React from "react";

import "./Footer.css";

type Props = {};

const Footer = (props: Props) => {
  const links = [
    { id: 1, name: "FAQ", ref: "" },
    { id: 2, name: "Help Center", ref: "" },
    { id: 3, name: "Account", ref: "" },
    { id: 4, name: "Media Center", ref: "" },
    { id: 5, name: "Investor Relations", ref: "" },
    { id: 6, name: "Jobs", ref: "" },
    { id: 7, name: "Netflix Shop", ref: "" },
    { id: 8, name: "Redeem Gift Cards", ref: "" },
    { id: 9, name: "Buy Gift Cards", ref: "" },
    { id: 10, name: "Ways to Watch", ref: "" },
    { id: 11, name: "Terms of Use", ref: "" },
    { id: 12, name: "Privacy", ref: "" },
    { id: 13, name: "Cookie Preferences", ref: "" },
    { id: 14, name: "Coporate Information", ref: "" },
    { id: 15, name: "Contact Us", ref: "" },
    { id: 16, name: "Speed Test", ref: "" },
    { id: 17, name: "Legal Notices", ref: "" },
    { id: 18, name: "Only on Netflix", ref: "" },
    { id: 19, name: "Do Not Sell or Share Personal Information", ref: "" },
    { id: 20, name: "Ad Choices", ref: "" },
  ];

  return (
    <div className="footer-container">
      <div className="footer-qns">Questions? Call 1-844-505-2993</div>
      <div className="footer-links">
        {links.map((l) => {
          return (
            <div className="footer-link" key={l.id}>
              <span>{l.name}</span>
            </div>
          );
        })}
      </div>
      <div className="footer-language">
        <select className="footer-select">
          <option className="footer-option" value="english">
            English
          </option>
          <option className="footer-option" value="chinese">
            Chinese
          </option>
          <option className="footer-option" value="japanese">
            Japanese
          </option>
          <option className="footer-option" value="korean">
            Korean
          </option>
          <option className="footer-option" value="french">
            French
          </option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
