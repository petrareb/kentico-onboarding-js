import React from 'react';
import PropTypes from 'prop-types';
import { isValidText } from '../utils/validateText';

import classNames from 'classnames';

export class Input extends React.PureComponent {
  static displayName = 'Input';
  static propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  _changedTextInput = (event) => {
    this.setState({
      text: event.target.value,
    });
    this.props.onChange(this.state.text);
  };


  render() {
    return (
      <input
        type="text"
        className={classNames({
          "form-control": true,
          "has-error": !isValidText(this.state.text),
          "has-success": isValidText(this.state.text)
        })}
        name="inputTextBox"
        value={this.state.text}
        onChange={this._changedTextInput}
      />
    );
  }
}
