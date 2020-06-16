import './App.scss';

import React, { Component } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  HashRouter
} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { routes } from './App.routes';
import { FaBars } from 'react-icons/fa';
import SVG from 'react-inlinesvg';
import ReactGA from 'react-ga';

export class App extends Component {
  state = { width: 0, height: 0, sidebarVisible: false };

  constructor(
    props: any
  ) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    ReactGA.initialize('noelitocalma@gmail.com');
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  pageHeader () {
    if (this.state.width <= 768) {
      const logo = () => <SVG src="/assets/images/logo.svg" />
      return (
        <div className="portfolio_header">
          <div className="logo"> { logo() }</div>
          <FaBars onClick={() => this.toggleSidebar()} />
        </div>
      )
    }
  }

  toggleSidebar () {
    const mode = this.state.sidebarVisible;
    this.setState({ sidebarVisible: !mode });
  }

  render () {
    return (
      <div className={'portfolio ' + (this.state.sidebarVisible ? 'open-sidebar' : '')}>
        { this.pageHeader() }

        <HashRouter>
          <Sidebar />
          <div className="portfolio_content">
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App