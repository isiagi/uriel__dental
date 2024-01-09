import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Player } from "video-react";
import "video-react/dist/video-react.css";

import "./dynamic.css";

function Page({ heading, image, data }) {
  return (
    <div className="detail__second">
      <LazyLoadImage className="imgyy" effect="blur" src={image} alt="" />
      <h2>{heading}</h2>
      <p style={{ paddingBottom: "1rem" }}>{data}</p>
      <Player autoPlay>
        <source src="https://res.cloudinary.com/isiagi/video/upload/v1704643602/loid5v7tpvdeci02hj5i.mp4" />
      </Player>
    </div>
  );
}

export default Page;
