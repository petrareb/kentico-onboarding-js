import React from 'react';
import PropTypes from 'prop-types';

export class ViewItem extends React.PureComponent {
  static displayName = 'ViewItem';
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired
    }),
    onRowClick: PropTypes.func.isRequired
  };

  _enableEditing = () => this.props.onRowClick(this.props.item.id, true);

  render() {
    return (
      <li className="list-group-item">
          <span
            className="text-left"
            onClick={this._enableEditing}
          >
            {this.props.item.index + '. ' + this.props.item.text}
          </span>
      </li>
    );
  }
}
