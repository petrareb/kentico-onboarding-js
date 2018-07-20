import React from 'react';
import PropTypes from 'prop-types';

export class ViewItem extends React.PureComponent {
  static displayName = 'ViewItem';
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onRowClick: PropTypes.func.isRequired
  };

  _onClick = () => this.props.onRowClick(this.props.id, true);

  render() {
    return (
      <li className="list-group-item">
          <span
            className="text-left"
            onClick={this._onClick}
          >
            {this.props.index + '. ' + this.props.name}
          </span>
      </li>
    );
  }
}
