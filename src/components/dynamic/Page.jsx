import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./dynamic.css";
import PlayerComponent from "../player/Player";

import img from "../../assets1/images/17.jpg";

function Page({ heading, image, data }) {
  return (
    <div className="detail__second">
      <LazyLoadImage className="imgyy" effect="blur" src={image} alt="" />
      <h2>{heading}</h2>
      <p style={{ paddingBottom: "3rem" }}>{data}</p>
      <PlayerComponent
        video={
          "https://res.cloudinary.com/isiagi/video/upload/v1704643602/loid5v7tpvdeci02hj5i.mp4"
        }
        poster={img}
      />
    </div>
  );
}

export default Page;
