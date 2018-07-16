import React from 'react';
import PropTypes from 'prop-types';

import { RowItem } from './RowItem';
import { ItemToAdd } from './ItemToAdd';

const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const guid = () => s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();


class TodoTable extends React.PureComponent {
  static displayName = 'TodoTable';
  static propTypes = {
    // item: PropTypes.shape({
    //   id: PropTypes.string.isRequired,
    //   name: PropTypes.string.isRequired
    // }).isRequired
    items: PropTypes.array.isRequired
  };

  render() {
    const table_rows = this.props.items.map(item => <RowItem id={guid()} name={item.name} />);
    return (
      <table>
        <tbody>
          <ol>{table_rows}</ol>
          <ItemToAdd/>
        </tbody>
      </table>
    );
  }
}

export { TodoTable };

