import React from 'react';
import PropTypes from 'prop-types';

export class ViewItem extends React.PureComponent {
  static displayName = 'ViewItem';
  static propTypes = {
    itemProps: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired
    }),
    onRowClick: PropTypes.func.isRequired
  };

  _onClick = () => this.props.onRowClick(this.props.itemProps.props.id, true);

  render() {
    return (
      <li className="list-group-item">
          <span
            className="text-left"
            onClick={this._onClick}
          >
            {this.props.itemProps.props.index + '. ' + this.props.itemProps.props.text}
          </span>
      </li>
    );
  }
}
