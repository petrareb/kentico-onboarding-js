import * as React from 'react';
import { connect } from 'react-redux';
import {
  ListError,
  ListErrorDispatchProps
} from '../components/ListError';

import { postItem } from '../actions/thunkActions/postItem';
import { TodoListAction } from '../actions/types/TodoListAction';
import {
  ListItem_Delete_Request,
  ListItem_Post_Request,
} from '../constants/todoActionTypes';
import { deleteItem } from '../actions/thunkActions/deleteItem';

export type ListErrorOwnProps = {
  failedAction: TodoListAction
};

const mapDispatchToProps = (dispatch: ListDispatch, ownProps: ListErrorOwnProps): ListErrorDispatchProps => {
  switch (ownProps.failedAction.type) {
    case ListItem_Post_Request: {
      return {
        onReloadClick: () => dispatch(
          postItem(ownProps.failedAction.payload.item.text, () => ownProps.failedAction.payload.item.id))
      };
    }
    case ListItem_Delete_Request: {
      return {
        onReloadClick: () => dispatch(deleteItem(ownProps.failedAction.payload.id))
      };
    }
    default: {
      return {
        onReloadClick: () => null
      };
    }
  }
};

const mergeProps = (_: any, dispatchProps: ListErrorDispatchProps): ListErrorDispatchProps => {
  return ({
    ...dispatchProps,
  });
};

const ListErrorContainer: React.ComponentClass<ListErrorOwnProps> = connect(null, mapDispatchToProps, mergeProps)(ListError);
export { ListErrorContainer as ListError };
