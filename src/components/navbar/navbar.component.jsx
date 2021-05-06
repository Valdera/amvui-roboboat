import React, { Component } from 'react';
import './navbar.styles.scss';
import { ReactComponent as Logo } from '../../assets/amv-logo.svg';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeBackground);
  }

  changeBackground = () => {
    if (window.scrollY >= 80) {
      this.setState({
        navbar: true
      });
    } else {
      this.setState({
        navbar: false
      });
    }
  };

  render() {
    return (
      <div className={`navbar ${this.state.navbar ? 'active' : ''} `}>
        <div className="navbar__logo">
          <Logo />
        </div>
        <a href="/">Contacts</a>
        <a href="/shop">Member</a>
        <a href="/products">Robots</a>
        <a href="/">Achievements</a>
      </div>
    );
  }
}

export default withRouter(Navbar);
