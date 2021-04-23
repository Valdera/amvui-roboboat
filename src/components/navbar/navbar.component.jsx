import React, { Component } from 'react';
import './navbar.styles.scss';
import { ReactComponent as Logo } from '../../assets/amv-logo.svg';

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
      <div className={`navbar ${this.state.navbar ? 'active' : ''}`}>
        <div className="navbar__logo">
          <Logo />
        </div>
        <a href="/">Contacts</a>
        <a href="/shop">Member</a>
        <a href="/">Robots</a>
        <a href="/">Achievements</a>
      </div>
    );
  }
}

export default Navbar;
