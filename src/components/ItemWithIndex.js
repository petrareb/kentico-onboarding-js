import React from 'react';
import PropTypes from 'prop-types';

export class ItemWithIndex extends React.PureComponent {
  static displayName = 'ItemWithIndex';
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired
    }),
    index: PropTypes.number.isRequired
  };
}
