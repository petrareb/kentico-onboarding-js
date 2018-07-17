import React from 'react';

import { ItemToAdd } from './ItemToAdd';
import { guid } from '../utils/generateID';
import { ListItem } from './ListItem';

export class TodoTable extends React.PureComponent {
  static displayName = 'TodoTable';

  constructor() {
    super();
    this.state = {
      values: [{ text: 'make coffee', id: guid(), chosen: false }, { text: 'sleep', id: guid(), chosen: false }]
    };
  }


  setChosenItem = (itemId) => {
    this.setState(prevState => {
      return {
        values: this._modifyChosenAtId(prevState.values, itemId)
      };
    });
  };

  //TODO
  _modifyChosenAtId = (values, itemId) => {
    values.forEach(el => {
      if (el.id === itemId) {
        el.chosen = true;
      }
    });
    return values;
  }

  addNewItem = (changedText) => {
    const newValue = {
      text: changedText,
      id: guid(),
      chosen: false
    };
    this.setState(prevState => {
      return {
        values: [
          ...prevState.values,
          newValue
        ]
      };
    });
  };

  render() {
    const table_rows = this
      .state
      .values
      .map((item, i) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.text}
          number={i + 1}
          chosen={item.chosen}
          onRowClickFunction={this.setChosenItem}
        />
      ));

    return (
      <div>
        <table>
          <tbody>
          {table_rows}
          </tbody>
        </table>
        <ItemToAdd onAddClick={this.addNewItem}/>
      </div>
    );
  }
}
