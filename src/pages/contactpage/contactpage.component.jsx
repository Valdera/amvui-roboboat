import React from 'react';
import Contact from '../../components/contact/contact.component';
import './contactpage.styles.scss';

const ContactPage = () => {
  return (
    <div className="contactpage">
      <div className="contactpage__contact">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
