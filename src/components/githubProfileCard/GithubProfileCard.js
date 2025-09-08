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

            {/* Location مع أيقونة الخريطة */}
            {prof.location && (
              <div className="location-div">
                <span className="desc-prof">
                  <svg
                    viewBox="-0.5 -2 20 19"
                    version="1.1"
                    width="18"
                    height="18"
                    aria-hidden="true"
                    stroke="currentColor"
                    style={{ marginRight: "8px" }}
                  >
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(-2.000000, -2.000000)">
                        <path
                          d="M12,2 C8.13400675,2 5,5.13400675 5,9 C5,14.25 12,21 12,21 C12,21 19,14.25 19,9 C19,5.13400675 15.8659932,2 12,2 Z M12,11.5 C10.6192881,11.5 9.5,10.3807119 9.5,9 C9.5,7.61928813 10.6192881,6.5 12,6.5 C13.3807119,6.5 14.5,7.61928813 14.5,9 C14.5,10.3807119 13.3807119,11.5 12,11.5 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  {prof.location}
                </span>
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
