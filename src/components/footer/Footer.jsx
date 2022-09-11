import footerImg from "../../assets/9.png";

import "./footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__wrapper__all">
          <div className="footer__wrapper1">
            <div className="footer__img">
              <img src={footerImg} alt="footer_image" />
            </div>
            <h3>Arron's Dental Hub</h3>
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
              <li>Tooth Protection</li>
              <li>Dental Implants</li>
              <li>Dental Care</li>
              <li>Teeth Whitening</li>
              <li>Dental Calculus</li>
              <li>Prevention</li>
            </ul>
          </div>
        </div>
        <div className="footer__wrapper3">
          <div>
            <h3>Contact Us</h3>
          </div>
          <div>
            <form>
              <div className='contact__input'>
                <input type="text" required/>
                <label htmlFor="name">Name</label>
              </div>
              <br />
              <div className='contact__input'>
                <input type="email" name="email" required/>
                <label htmlFor="email">Email</label>
              </div>
              <br />
              <div className='contact__inpu'>
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
