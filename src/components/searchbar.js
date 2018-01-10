import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css';
import '../css/searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  handleDayChange = date => {
    this.setState({ selectedDay: date });
  }

  render() {
    const { selectedDay } = this.state;
    return (
        <div className="searchBar">
          <form className="form-inline">
            <div className="form-group searchbar-field">
              <select className="form-control" type="text">
                <option selected="">Hair</option>
                <option value="1">Makeup</option>
              </select>
              <input className="form-control" placeholder="City" />
              <DayPickerInput
                onDayChange={this.handleDayChange}
                selectedDays={this.state.selectedDay}
                className="form-control DayPickerInput"
                placeholder="Date" />
              <input className="form-control" placeholder="Time" />
              <button class="btn btn-pink" type="submit"><i class="glyphicon glyphicon-search icon-white"></i></button>
            </div>
          </form>
        </div>
    )
  }
}

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SearchBar;
