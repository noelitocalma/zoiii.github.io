import React, { Component } from 'react';
import Loader from 'components/Loader/Loader';
import ReactGA from 'react-ga';

class Projects extends Component {
  state = {
    loading: true,
    items: []
  };

  componentDidMount () {
    ReactGA.pageview('Projects');

    fetch('assets/json/projects.json')
      .then(res => res.json())
      .then((result) => {
        this.setState({ loading: false, items: result });
      }, (error) => {
        this.setState({ loading: false, items: [] });
      });
  }

  render () {
    if (this.state.loading) {
      return (<Loader />)
    }

    return (
      <div className="projects" data-testid="Projects">
        <h2 className="page-title">projects ></h2>

        <div className="projects__list">
          {this.state.items.map((item: any, i: number) => (
            <div className="projects__list__item" key={i}>
              <div className="projects__list__item__name">{item.name}</div>
              <div>
                <small className="projects__list__item__date">
                  {item.year}
                </small>
                <span className="mx-1">|</span>
                <small className="projects__list__item__stack">
                  {item.stack}
                </small>

                {item.moreinfo && <span><span className="mx-1">|</span><small><a rel="noopener noreferrer" href={item.moreinfo} target="_blank">View</a></small></span>}
              </div>

              <div>
                <small className="projects__list__item__desc">{ item.desc }</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Projects;