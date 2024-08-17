import React from "react";
import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.page}>
      <video className={classes["background-vid"]} autoPlay loop muted>
        {/* Assuming the video is in the public/assets folder */}
        <source src="/pressmaster_pexels.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        className={classes["background-image"]}
        src="/pressmaster_pexels--image.jpg"
        alt="background alternate image"
      />
    </div>
  );
};

export default App;
