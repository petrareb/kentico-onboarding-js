import React from 'react';
import PropTypes from 'prop-types';

export class RowItem extends React.PureComponent {
  static displayName = 'RowItem';
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onRowClick: PropTypes.func.isRequired
  };

  render() {
    return (
      <tr>
        <td>
          <span onClick={() => this.props.onRowClick(this.props.id)}>{this.props.number + '. ' + this.props.name}</span>
        </td>
      </tr>
    );
  }
}

