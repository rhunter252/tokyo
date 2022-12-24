import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/keyboard.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Randy Hunter</h3>
            {/* <p className="job">
              I started playing with computers when I was 11 years-old. Since
              then, I've been tinkering with all sorts of technologies that in
              some way or another led me to work on video production, creating
              websites, and web applications. I'm a lifelong learner 🎓, a
              father👶🏽🧒🏽, a husband💍, and I might have a thing for video games.
              🎮
            </p> */}
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
