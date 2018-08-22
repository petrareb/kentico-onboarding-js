import * as React from 'react';
import { connect } from 'react-redux';
import { ItemToAddDispatchProps, ItemToAdd } from '../components/ItemToAdd';
import { addNewItem } from '../actions/todoActions';
import { Dispatch } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch): ItemToAddDispatchProps => ({
  onAddClick: (text: string) => dispatch(addNewItem(text))
});

const ItemToAddContainer: React.ComponentClass = connect(null, mapDispatchToProps)(ItemToAdd);
export { ItemToAddContainer as ItemToAdd };
