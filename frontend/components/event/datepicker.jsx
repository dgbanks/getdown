import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Datepicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      newDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      newDate: date
    });
  }

  render() {
    return <DatePicker
      selected={this.state.newDate}
      onChange={this.handleChange}
      inline
      dateFormat="LLL"
    />;
  }
}

export default Datepicker;
