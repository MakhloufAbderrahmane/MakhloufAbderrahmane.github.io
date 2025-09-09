import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";

export default function GithubProfileCard() {
  // بياناتك الشخصية مباشرة هنا
  const prof = {
    name: "Makhlouf Abderrahmane",
    bio: "“Future Computer Science Student | High School Graduate | Passionate about Technology and IT”",
    location: "Algeria",
    avatarUrl: "https://avatars.githubusercontent.com/u/230609543?v=4", // ضع رابط صورتك هنا
    hireable: "Yes"
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">
                Discuss a project or just want to say hi? My Inbox is open for all.
              </p>
            </div>
            <h2 className="bio-text">{emoji(prof.bio)}</h2>
            {prof.location && (
              <div className="location-div">
                <span className="desc-prof">{prof.location}</span>
              </div>
            )}
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: {prof.hireable}
              </span>
            </div>
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            <img
              src={prof.avatarUrl}
              alt={prof.name}
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
