import React, { Component } from 'react';
import { FaHandPointDown } from 'react-icons/fa';
import Loader from 'components/Loader/Loader.lazy';
import ReactGA from 'react-ga';

class Home extends Component {
  state = {
    error: null,
    loading: true,
    slogan: ''
  };

  componentDidMount() {
    ReactGA.pageview('Home');

    fetch('assets/json/about.json')
      .then(res => res.json())
      .then(({ slogan }) => {
        this.setState({ loading: false, slogan: slogan });
      }, (error) => {
        this.setState({ loading: true });
      });
  }

  render() {
    if (this.state.loading) {
      return (<Loader />)
    }

    return (
      <div className="home" data-testid="Home" >
        <div className="bg-image" style={{ 'backgroundImage': 'url(assets/images/me.jpg)' }}></div>
        <div className="home__content">
          <div>
            <p>Kamusta, Hello, Hola</p>
            <div className="home__content__name">Noelito Calma <FaHandPointDown /></div>
            <p>
              I'm a frontend developer from Philippines <img className="home__content__flag" alt="flag" src="assets/images/flag.png" />
            </p>
            <p>{this.state.slogan}</p>
            <p>
              If you want to get in touch, don't hesitate to contact me on my social media accounts or via <a href="mailto: noelitocalma@gmail.com">noelitocalma@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
