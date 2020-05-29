import React, { Component } from 'react';
import { FaBrain, FaCode, FaGit, FaInfoCircle, FaLaptopCode, FaTags, FaUserSecret, FaTimes } from 'react-icons/fa';
import Loader from 'components/Loader/Loader';
import ReactGA from 'react-ga';

class Skills extends Component {
  icons = [
    <FaBrain />,
    <FaCode />,
    <FaGit />,
    <FaLaptopCode />,
    <FaTags />,
    <FaInfoCircle />,
    <FaUserSecret />
  ];

  state = {
    error: null,
    loading: true,
    data: {
      quote: { author: '', text: '' },
      tech: []
    },
    activeSkill: {
      key: '',
      items: []
    }
  };

  level = {
    'Expert': '100%',
    'Proficient': '75%',
    'Advanced': '55%',
    'Beginner': '25%'
  };

  componentDidMount() {
    ReactGA.pageview('Skills');

    fetch('assets/json/skills.json')
      .then(res => res.json())
      .then((result) => {
        this.setState({ loading: false, data: result });
      }, (error) => {
        this.setState({
          loading: false,
          data: {
            quote: { author: '', text: '' },
            tech: []
          }
        });
      });
  }

  setSkillSet(skillset: any) {
    this.setState({ activeSkill: skillset || { key: '', items: [] } })
  }

  listSkillSet () {
    if (!this.state.activeSkill.key) {
      return (
        this.state.data.tech.map((item: any, i: number) => (
          <div className="skills__tech__item" onClick={() => this.setSkillSet(item)} key={i}>
            <div>
              <span>{this.icons[i]}</span>
              <small>{item.key}</small>
            </div>
          </div>
        ))
      )
    } else {
      return (
        this.state.activeSkill.items.map((item: any, i: number) => (
          <div className="skills__tech__item skill-item" key={i}>
            <div>
              <div>
                {/* <div>
                  <img className="skill-icon" src={item.icon} alt=""/>
                </div> */}
                <span className="skill-name">{item.name}</span>
                {item.years && <span className="tag">{item.years} yr/s</span>}
                {item.level && <span className="tag">{item.level}</span>}
              </div>
              <div></div>
            </div>
          </div>
        ))
      )
    }
  }

  render() {
    if (this.state.loading) {
      return (<Loader />)
    }

    return (
      <div className="skills" data-testid="Skills">
        <h2 className="page-title">
          <span>
            Skills > {this.state.activeSkill.key}
          </span>
          { this.state.activeSkill.key && <FaTimes onClick={() => this.setSkillSet(null)} />}
        </h2>

        <div className="skills__tech">
          { this.listSkillSet() }
        </div>

        {/* <div className="skills__quote">
          <div className="skills__quote__text">
            <i>{this.state.data.quote['text']}</i>
          </div>
          <div className="skills__quote__author">
            <small>- {this.state.data.quote['author']}</small>
          </div>
        </div> */}
      </div>
    )
  }
};

export default Skills;