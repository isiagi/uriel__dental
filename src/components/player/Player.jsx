import React from "react";
import ReactPlayer from "react-player";

function Player({ video }) {
  return (
    <div>
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        url={video}
        pip={true}
        controls={true}
        light={false}
        playing={true}
      />
      <source src={video} type="video/mp4" />
    </div>
  );
}

export default Player;
