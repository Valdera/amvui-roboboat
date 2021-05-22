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

  handleChange = (link) => {
    this.props.history.push(link);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className={`navbar ${this.state.navbar ? 'active' : ''} `}>
        <div className="navbar__logo" onClick={() => this.handleChange('/')}>
          <Logo />
        </div>
        <p onClick={() => this.handleChange('/members')}>Member</p>
        <p onClick={() => this.handleChange('/products')}>Robots</p>
        <p onClick={() => this.handleChange('/achievements')}>Achievements</p>
        <p onClick={() => this.handleChange('/contact')}>Contact</p>
      </div>
    );
  }
}

export default withRouter(Navbar);
