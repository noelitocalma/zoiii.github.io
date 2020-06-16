import React, { Component } from 'react';
import { FaCodepen, FaEnvelope, FaFacebookSquare, FaGithubAlt, FaHeart, FaLinkedin, FaUserTie, FaWrench, FaToolbox, FaHandshake, FaClipboardList, FaCalendarAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import { routes } from '../../App.routes';
import SVG from 'react-inlinesvg';
import Loader from '../Loader/Loader.lazy';

interface Props {}
interface State {
  loading: boolean;
  data: object[];
  sidebarVisible: boolean;
}

class Sidebar extends Component {
  icons: any = {
    'facebook': <FaFacebookSquare />,
    'linkedin': <FaLinkedin />,
    'github': <FaGithubAlt />,
    'mail': <FaEnvelope />,
    'codepen': <FaCodepen />,
    'FaUserTie': <FaUserTie />,
    'FaWrench': <FaWrench />,
    'FaToolbox': <FaToolbox />,
    'FaHandshake': <FaHandshake />,
    'FaClipboardList': <FaClipboardList />,
    'FaCalendarAlt': <FaCalendarAlt />
  }

  state: State = {
    loading: true,
    data: [],
    sidebarVisible: false
  };

  constructor (props: any) {
    super(props);
  }

  handleClick () {
    // this.app.setState({ sidebarVisible: false });
  }

  componentDidMount () {
    fetch('assets/json/social-sites.json')
      .then(res => res.json())
      .then((result) => {
        this.setState({ loading: false, data: result });
      }, (error) => {
        this.setState({ loading: false, data: [] });
      });
  }

  setLogo () {
    const logo = () => <SVG src="/assets/images/logo.svg" />
    return (
      <div className="portfolio_sidebar__logo">
        { logo() }
      </div>
    )
  }

  setRoutes () {
    return (
      <div className="portfolio_sidebar__links">
        {routes.map((route, i) => (
          <div className="portfolio_sidebar__links__item" key={route.path} onClick={() => this.handleClick()}>
            <NavLink exact={true} activeClassName="active" to={route.path}>{this.icons[route.icon]} {route.title}</NavLink>
          </div>
        ))}
      </div>
    )
  }

  render () {
    if (this.state.loading) {
      return (<Loader />)
    }

    return (
      <div className="portfolio_sidebar" data-testid="Sidebar">
        { this.setLogo() }
        { this.setRoutes() }

        <div className="portfolio_sidebar__social">
          <div className="d-flex">
            {this.state.data.map((item: any, i: number) => (
              <div className="portfolio_sidebar__social__item" key={i}>
                <a target="_blank" rel="noopener noreferrer" href={item.link}>{this.icons[item['icon']]}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio_sidebar__footer">
          <small>Made with <FaHeart /> using <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>.</small>
        </div>
      </div>
    )
  }
}

export default Sidebar;