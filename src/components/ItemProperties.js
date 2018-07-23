import React from 'react';
import PropTypes from 'prop-types';

export class ItemProperties extends React.PureComponent {
  static displayName = 'ItemProperties';
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
  }
}
