import React, { Component } from 'react';

import Loader from 'components/Loader/Loader';
import { FaUserTag, FaMapMarkerAlt } from 'react-icons/fa';
import ReactGA from 'react-ga';

class Events extends Component {
  state = {
    loading: true,
    items: []
  };

  componentDidMount () {
    ReactGA.pageview('Events');

    fetch('assets/json/events.json')
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
      <div className="events" data-testid="Events">
        <h2 className="page-title">events ></h2>

        <div className="events__list">
          {this.state.items.map((item: any, i: number) => (
            <div className="events__list__item" key={i}>
              <div className="events__list__item__name">{item.event}</div>
              <div>
                <small className="events__list__item__date">
                  {item.date}
                </small>
                {item.moreinfo && <span><span className="mx-1">|</span><small><a rel="noopener noreferrer" href={item.moreinfo} target="_blank">View</a></small></span>}
              </div>

              <div>
                <small className="events__list__item__desc"><FaUserTag /> { item.role }</small>
              </div>
              <div>
                <small className="work-experiences__list__item__location">
                  <FaMapMarkerAlt /> {item.location}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Events;
