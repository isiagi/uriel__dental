import Page from "./Page";
import "./dynamic.css";

import img1 from "../../assets1/images/20.jpg";
import img2 from "../../assets1/images/21.png";
import img3 from "../../assets1/images/22.jpeg";
import img4 from "../../assets1/images/24.jpg";
import img5 from "../../assets1/images/kid.jpg";

function Dynamic({ route }) {
  return (
    <div>
      {(() => {
        switch (route) {
          case "Orthodontics":
            return <Page heading={route} image={img1} />;
          case "Prothodontics":
            return <Page heading={route} image={img2} />;
          case "Endodontics":
            return <Page heading={route} image={img3} />;
          case "Child Dentistry":
            return <Page heading={route} image={img5} />;
          case "Cosmetic Dentistry":
            return <Page heading={route} image={img4} />;

          default:
            break;
        }
      })()}
    </div>
  );
}

export default Dynamic;
