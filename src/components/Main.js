import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import logojd from '../jd.png';
import bkgrd from '../jd222.jpg';
import Main2 from './Main2';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "coconut" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (<Main2 />);
  }
}

export default Main
