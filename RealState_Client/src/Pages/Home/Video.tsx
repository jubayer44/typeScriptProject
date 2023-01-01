import React from "react";
import pic from '../../Assets/1656012826240.jpg';

const Video = () => {
  return (
    <div>
        

      <video autoPlay muted loop>
        <source src={pic} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
