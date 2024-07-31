import React from "react";
import dog from "../../assets/Dog.png";
import kid from "../../assets/Kid.png";
import penguin from "../../assets/Penguin.png";
import Add from "../../assets/Add.png";

import "./ProfilePage.css";

type Props = {};

const profiles = [
  { name: "Kayden", image: dog },
  { name: "Mary", image: kid },
  { name: "Kids", image: penguin },
  { name: "Add Profile", image: Add },
];

const profileCard = (name: string, image: string) => {
  var cn = "profile-img";
  if (name === "Add Profile") {
    cn = "add-profile-img";
  }
  return (
    <div className="profile-card" key={name}>
      <img src={image} alt="Missing" className={cn} />
      <div className="profile-name">{name}</div>
    </div>
  );
};

const ProfilePage = (props: Props) => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Who's Watching?</h1>
      <div className="profile-list-card">
        {profiles.map((p) => profileCard(p.name, p.image))}
      </div>
      <div className="profile-manage">Manage Profile</div>
    </div>
  );
};

export default ProfilePage;
