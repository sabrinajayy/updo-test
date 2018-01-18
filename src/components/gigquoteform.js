import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, FormControl, FormGroup, InputGroup, SplitButton, MenuItem } from 'react-bootstrap';
import '../css/gigquote.css';

class GigQuoteForm extends Component {

  render() {
    return (
      <div className="gig-quote-form">
        <h2>Quote</h2>
        <Form>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type="text" placeholder="Quote Amount" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <SplitButton
              bsStyle="Default"
              title="Choose Contract"
              key="test"
              id="test"
              className="quote-form-dropdown"
            >
            <MenuItem eventKey={1}>Wedding Contract</MenuItem>
            <MenuItem eventKey={2}>PhotoShoot Contract</MenuItem>

            </SplitButton>
          </FormGroup>
          <FormGroup>
           <FormControl
               style={{height: '200px'}}
               componentClass="textarea"
               placeholder="Send a message"
               value=""
             />
           </FormGroup>
          <button className="button btn-pink btn-full-width" type="submit">
            Send Quote
          </button>
        </Form>

      </div>
    );
  }
}

GigQuoteForm.propTypes = {
  terms: PropTypes.array.isRequired
}

export default GigQuoteForm;
