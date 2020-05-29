import React, { Component } from 'react';
import Loader from 'components/Loader/Loader';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReactGA from 'react-ga';

class WorkExperience extends Component {
  state = {
    error: null,
    loading: true,
    items: []
  };

  componentDidMount () {
    ReactGA.pageview('Work Experiences');
    fetch('assets/json/work-experience.json')
      .then(res => res.json())
      .then((result) => {
        this.setState({ loading: false, items: result });
      }, (error) => {
        this.setState({ loading: true });
      });
  }

  render () {
    if (this.state.loading) {
      return (<Loader />)
    }

    return (
      <div className="work-experiences" data-testid="WorkExperience">
        <h2 className="page-title">Work Experience ></h2>

        <div className="work-experiences__list">
          {this.state.items.map((item: any, i: number) => (
            <div className="work-experiences__list__item" key={i}>
              <div className="work-experiences__list__item__position">{item.position}</div>
              <div>
                <small className="work-experiences__list__item__date">
                  {item.date}
                </small>
                <span className="mx-1">|</span>
                <small className="work-experiences__list__item__company">
                  {item.company}
                </small>
              </div>

              <div>
                <small className="work-experiences__list__item__location">
                  <FaMapMarkerAlt /> {item.location}
                </small>
              </div>

              <div className="work-experiences__list__item__tasks">
                {item.tasks.map((task: any, ti: number) => (<div key={ti}>- {task}</div>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default WorkExperience;
