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

  changePage = (link) => {
    this.props.history.push(link);
  };

  render() {
    return (
      <div className={`navbar ${this.state.navbar ? 'active' : ''} `}>
        <div
          className="navbar__logo"
          onClick={() => this.props.history.push('/')}>
          <Logo />
        </div>
        <p onClick={() => this.props.history.push('/members')}>Member</p>
        <p onClick={() => this.props.history.push('/products')}>Robots</p>
        <p onClick={() => this.props.history.push('/achievements')}>
          Achievements
        </p>
        <p onClick={() => this.props.history.push('/contact')}>Contact</p>
      </div>
    );
  }
}

export default withRouter(Navbar);
