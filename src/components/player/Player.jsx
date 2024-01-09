import { Player } from "video-react";
import "video-react/dist/video-react.css";

function PlayerComponent({ video, poster }) {
  return (
    <div>
      <Player autoPlay={true} playsInline poster={poster}>
        <source src={video} />
      </Player>
    </div>
  );
}

export default PlayerComponent;
