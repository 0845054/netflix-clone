import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Hero from "../../assets/Hero.png";
import Popcorn from "../../assets/Popcorn.png";
import Content1 from "../../assets/Content1.png";
import Content2 from "../../assets/Content2.png";
import Content3 from "../../assets/Content3.png";
import Content4 from "../../assets/Content4.png";

import "./Landing.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

type Props = {};

const Landing = (props: Props) => {
  const navigate = useNavigate();

  const contentList = [
    {
      id: 1,
      title: "Enjoy on your TV",
      subTitle:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blue-ray players, and more.",
      image: Content1,
    },
    {
      id: 2,
      title: "Watch everywhere",
      subTitle:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: Content2,
    },
    {
      id: 3,
      title: "Create profiles for kids",
      subTitle:
        "Send kids on adventures with their favourite characters in a space made just for them--free with your membership.",
      image: Content3,
    },
    {
      id: 4,
      title: "Download your shows to watch offline",
      subTitle: "Watch on plane, train, or submarine...",
      image: Content4,
    },
  ];
  return (
    <div className="landing-container">
      <NavBar />
      <div className="hero1-container">
        <img className="hero1-img" src={Hero} alt="missing"></img>
        <div className="hero1-info">
          <h1 style={{ fontSize: 48 }}>Unlimited movies, TV shows, and more</h1>
          <p style={{ fontSize: 24 }}>Watch anywhere. Cancel anytime.</p>
          <p style={{ fontSize: 20 }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="hero1-email-container">
            <input
              type="email"
              placeholder="Email address"
              className="email-input"
            />
            <button className="hero1-email-btn">Get Started {">"}</button>
          </div>
        </div>
      </div>
      <div className="hero2-container">
        <img src={Popcorn} alt="missing" />
        <div className="hero2-info">
          <p style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>
            The Netflix you love for just $6.99.
          </p>
          <p style={{ fontSize: 18, fontWeight: 400, margin: 0 }}>
            Get the standard with ads plan.
          </p>
          <a href="/" className="hero2-link">
            Learn More {">"}
          </a>
        </div>
      </div>
      <div className="hero3-container">
        {contentList.map((c) => {
          var isEven = c.id % 2 === 0;
          return (
            <div className="hero3-card" key={c.id}>
              <img
                className={isEven ? "hero3-left" : "hero3-right"}
                src={c.image}
                alt="missing"
              />
              <div
                className={
                  isEven
                    ? "hero3-right hero3-info"
                    : "hero3-left hero3-card-info"
                }
              >
                <h1 style={{ fontSize: 48 }}>{c.title}</h1>
                <p style={{ fontSize: 24, textWrap: "wrap" }}>{c.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
