import React from 'react';
import PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';

import classNames from 'classnames';

export class Input extends React.PureComponent {
  static displayName = 'Input';
  static propTypes = {
    // text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '', //props.text,
      isValid: isValidText(props.text)
    };
  }

  _changedTextInput = (event) => {
    this.setState({
      text: event.target.value,
      isValid: isValidText(event.target.value)
    });
  };


  render() {
    return (
      <input
        type="text"
        className={classNames({
          "form-control": true,
          "has-error": !this.state.isValid
        })}
        name="inputTextBox"
        value={this.state.text}
        onChange={this._changedTextInput}
      />
    );
  }
}
