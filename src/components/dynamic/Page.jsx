import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Page({ heading, image, data }) {
  return (
    <div className="detail__second">
      <LazyLoadImage className="img" effect="blur" src={image} alt="" />
      <h2>{heading}</h2>
      <p>{data}</p>
    </div>
  );
}

export default Page;
