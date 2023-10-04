import img1 from "../../assets/home.jpeg";

function Page({ heading, image, data }) {
  return (
    <div className="detail__second">
      <img src={image} alt="" />
      <h2>{heading}</h2>
      <p>{data}</p>
    </div>
  );
}

export default Page;
