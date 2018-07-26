import React from 'react';
import PropTypes from 'prop-types';

export class ViewItem extends React.PureComponent {
  static displayName = 'ViewItem';
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,

    onRowClick: PropTypes.func.isRequired
  };

  _enableEditing = () => this.props.onRowClick(this.props.item.id);

  render() {
    return (
      <li className="list-group-item">
          <span
            className="text-left"
            onClick={this._enableEditing}
          >
            {this.props.index + '. ' + this.props.item.text}
          </span>
      </li>
    );
  }
}
