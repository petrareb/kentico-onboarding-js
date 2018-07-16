import React from 'react';
import PropTypes from 'prop-types';

class RowItem extends React.PureComponent {
  static displayName = 'RowItem';
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };

  render() {
    return (
      <li> {this.props.name} </li>
    );
  }
}

export { RowItem };
