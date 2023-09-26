import footerImg from "../../assets1/images/6.jpg";

import "./footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__wrapper__all">
          <div className="footer__wrapper1">
            <div className="footer__img">
              <img src={footerImg} alt="footer_image" width={60} />
            </div>
            <h3>URIEL DENTAL CLINIC</h3>
          </div>
          <div className="footer__wrapper__text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              nesciunt. Cum cupiditate qui tempore ratione impedit? Velit, hic!
              voluptas cumque ipsam quae aspernatur cupiditate nam ex
              reiciendis, dolor quos.
            </p>
          </div>
        </div>
        <div className="footer__wrapper2">
          <div>
            <h3>Our Services</h3>
          </div>
          <div className="footer__ul">
            <ul>
              <li>Root Canal Treatment</li>
              <li>Artifical Teeth</li>
              <li>Dental Filling</li>
              <li>Orthodentic Treatment</li>
              <li>Teeth Extraction</li>
            </ul>
          </div>
        </div>
        <div className="footer__wrapper3">
          <div>
            <h3>Contact Us</h3>
          </div>
          <div>
            <form>
              <div className="contact__input">
                <input type="text" className="input" required />
                <label htmlFor="name" className="input__label">
                  Name
                </label>
              </div>

              <div className="contact__input">
                <input type="email" name="email" className="input" required />
                <label htmlFor="email" className="input__label">
                  Email
                </label>
              </div>

              <div className="contact__inpu">
                <textarea name="" id="" cols="30" rows="10" required></textarea>
                <label htmlFor="">message</label>
              </div>
              <button className="footer__submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
