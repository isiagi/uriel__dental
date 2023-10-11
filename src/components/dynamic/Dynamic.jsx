import Page from "./Page";
import "./dynamic.css";
import img4 from "../../assets1/images/26.jpg";
import img5 from "../../assets1/images/kid.jpg";
import img6 from "../../assets1/images/31.jpg";
import img7 from "../../assets1/images/25.jpg";
import img8 from "../../assets1/images/32.jpg";

function Dynamic({ route }) {
  return (
    <div>
      {(() => {
        switch (route) {
          case "Orthodontics":
            return <Page heading={route} image={img6} data={data[0].data} />;
          case "Prothodontics":
            return <Page heading={route} image={img7} data={data[1].data} />;
          case "Endodontics":
            return <Page heading={route} image={img8} data={data[2].data} />;
          case "Child Dentistry":
            return <Page heading={route} image={img5} data={data[3].data} />;
          case "Cosmetic Dentistry":
            return <Page heading={route} image={img4} data={data[4].data} />;

          default:
            break;
        }
      })()}
    </div>
  );
}

export default Dynamic;

const data = [
  {
    id: 1,
    data: "Orthodontics is a specialized field of dentistry that focuses on correcting misaligned teeth and improper bites. Our orthodontic experts are dedicated to helping you achieve a straighter, more harmonious smile. We offer a range of treatment options, including traditional braces and clear aligners, to cater to your specific needs and preferences. Whether youre a child, teenager, or adult, our orthodontic solutions can enhance both the aesthetics and functionality of your teeth. Discover how orthodontics can boost your confidence and improve your overall oral health.",
  },
  {
    id: 2,
    data: "Prosthodontics is the dental specialty that specializes in the restoration and replacement of missing or damaged teeth. Our prosthodontists are highly trained in designing and crafting dental prostheses such as crowns, bridges, dentures, and dental implants. Whether you require a single tooth restoration or a comprehensive smile makeover, our prosthodontic treatments are personalized to provide you with durable, functional, and aesthetically pleasing results. Restore the full potential of your smile and enjoy improved chewing ability and overall comfort with the help of our prosthodontic specialists.",
  },
  {
    id: 3,
    data: "Endodontics is the branch of dentistry that deals with the diagnosis and treatment of conditions affecting the dental pulp and inner structures of the tooth. If you're experiencing severe tooth pain, sensitivity, or an infection deep within the tooth, our experienced endodontists can help. We specialize in root canal therapy, a procedure aimed at saving compromised teeth while alleviating discomfort. Our goal is to preserve your natural teeth whenever possible, ensuring your long-term oral health and well-being. Trust our skilled endodontic team to provide you with relief and maintain the integrity of your smile.",
  },
  {
    id: 4,
    data: "We understand the importance of early dental care in shaping a lifetime of healthy smiles. Our pediatric specialists create a welcoming and child-friendly environment to ensure your little ones feel comfortable during their dental visits. From routine check-ups and cleanings to preventive treatments such as sealants and fluoride applications, our focus is on promoting good oral hygiene habits from a young age. By partnering with us in your child's dental care journey, you can set them on the path to a lifetime of excellent oral health and confident smiles.",
  },
  {
    id: 5,
    data: "Cosmetic Dentistry is all about enhancing the aesthetics of your smile. Our cosmetic experts offer a comprehensive range of services to address various concerns, from teeth whitening and porcelain veneers to complete smile makeovers. Whether you wish to correct minor imperfections or undergo a complete transformation, our team will work closely with you to understand your goals and preferences. With the latest techniques and technology, we can help you achieve the confident and radiant smile you've always desired. Explore the possibilities of Cosmetic Dentistry and experience the positive impact it can have on your self-esteem and overall appearance.",
  },
];
