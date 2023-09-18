import "./show.css";
import img1 from "../../assets1/images/11.jpg";

function Show() {
  return (
    <div className="show__container">
      <div className="show__wrapper">
        <div className="show__image__div">
          <img src={img1} alt="" />
          <div className="show__img__overlay">hello</div>
        </div>
        <div>
          <h2>Hello There</h2>
        </div>
      </div>
    </div>
  );
}

export default Show;
