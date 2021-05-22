import React from 'react';

import './contact.styles.scss';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__content">
        <h2>Contact Us</h2>
        <div className="contact__item">
          <i className="fas fa-map-marked-alt"></i>
          <span>Address : </span>
          <p>
            Jl. Margonda Raya, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa
            Barat 16424
          </p>
        </div>
        <div className="contact__item">
          <i className="fas fa-phone"></i>
          <span>Phone Number :</span>
          <p>+688381932332</p>
        </div>
        <div className="contact__item">
          <i className="fas fa-envelope"></i>
          <span>E-mail :</span>
          <p>roboboat.ui@gmail.com</p>
        </div>

        <span>Social Media : </span>

        <a href="https://www.instagram.com/amv.ui/" className="contact__social">
          <i className="fab fa-instagram-square"></i>
          <p>
            <span>Instagram </span>@amv.ui
          </p>
        </a>
        <a href="https://www.facebook.com/AMVUI/" className="contact__social">
          <i className="fab fa-facebook-square"></i>{' '}
          <p>
            <span>Facebook </span>@AMVUI
          </p>
        </a>
        <a
          href="https://www.linkedin.com/company/amv-ui/"
          className="contact__social">
          <i className="fab fa-linkedin"></i>{' '}
          <p>
            <span>Linkedin </span>Autonomous Marine Vehicle Universitas
            Indonesia{' '}
          </p>
        </a>
      </div>
      <div className="contact__map">
        <iframe
          title="google maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15860.885562968931!2d106.8243239!3d-6.3653881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8f72fb9dd41569d!2sPusat%20Kegiatan%20Mahasiswa%20(Pusgiwa)%20Universitas%20Indonesia!5e0!3m2!1sen!2sid!4v1621099031224!5m2!1sen!2sid"
          allowFullScreen=""
          loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Contact;
