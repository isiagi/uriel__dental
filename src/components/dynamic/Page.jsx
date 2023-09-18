import img1 from "../../assets/home.jpeg";

function Page({ heading, image }) {
  return (
    <div className="detail__second">
      <img src={image} alt="" />
      <h2>{heading}</h2>
      <p>
        lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor
        sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
        dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
        ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
        ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
        dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
        ipsum dolor sit amet
      </p>
    </div>
  );
}

export default Page;
