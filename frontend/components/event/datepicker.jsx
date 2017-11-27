import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Datepicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      newDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    console.log(date);
    console.log(date.toString());
    // console.log(this.props);
    this.setState({
      newDate: date
    });
    // this.props.parseDate(date._d);
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
