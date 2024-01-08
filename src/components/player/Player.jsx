import React from "react";
import ReactPlayer from "react-player/lazy";

function Player({ video }) {
  return (
    <div>
      <ReactPlayer
        width="100%"
        height="100%"
        style={{ maxWidth: "100%" }}
        url={video}
        pip={true}
        controls={true}
        light={false}
        playing={true}
      />
    </div>
  );
}

export default Player;
