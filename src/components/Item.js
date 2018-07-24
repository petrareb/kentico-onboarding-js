import React from 'react';
import PropTypes from 'prop-types';

export class Item extends React.PureComponent {
  static displayName = 'Item';
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }
}
