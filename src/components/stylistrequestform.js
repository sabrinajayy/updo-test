import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import '../css/stylistrequestform.css';

class StylistRequestForm extends Component {

  render() {
    return (
        <div className="stylist-request-form">
          <form noValidate>
            <TextField
              id="date"
              placeholder="Date"
              type="date"
              defaultValue="2017-05-24"
              className="stylist-request-form__date"
              InputLabelProps={{
                shrink: true,
              }}
              margin="normal"
            />
            <TextField
              id="time"
              placeholder="Time"
              type="time"
              defaultValue="07:30"
              className="stylist-request-form__date"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 900
              }}
              margin="normal"
            />
            <TextField
                id="with-placeholder"
                placeholder="Address"
                className="stylist-request-form"
                margin="normal"
              />
            <TextField
              id="select-service"
              select
              className="stylist-request-form"
              placeholder="Choose a Service"
              value="stylist service"
              SelectProps={{
                native: true,
                MenuProps: {
                  className: "stylist-request-form",
                },
              }}
              margin="normal"
            >
              {this.props.services.map(service => (
                <option key={service.id} value={service.name}>
                  {service.name} - ${service.price}
                </option>
              ))}
            </TextField>
            <TextField
              id="multiline-static"
              placeholder="Message"
              multiline
              rowsMax="5"
              className="stylist-request-form"
              margin="normal"
            />
          </form>
        </div>
    );
  }
}

StylistRequestForm.propTypes = {
  services: PropTypes.array.isRequired
}

export default StylistRequestForm;
