import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ListItem } from '../models/ListItem';
import { PulseLoader } from 'react-spinners';
import classNames from 'classnames';
import { ListError } from '../containers/ListError';
import { TodoListAction } from '../actions/types/TodoListAction';

export type ViewItemOwnProps = {
  readonly index: number,
  readonly item: ListItem,
};

export type ViewItemDispatchProps = {
  readonly onItemClick: () => TodoListAction,
};

export type ViewItemStateProps = {
  readonly failedAction: TodoListAction | null | undefined
};

export type ViewItemProps = ViewItemDispatchProps & ViewItemOwnProps & ViewItemStateProps;

export const ViewItem: React.StatelessComponent<ViewItemProps> = ({item, index, onItemClick, failedAction}) => {
  const classes = classNames(
    'col-lg-10 col-md-10 col-sm-10 col-xs-12',
    failedAction && 'has-error'
  );
  return (
    <li className="list-group-item">
      <div className="row">
        <div
          className={classes}
          onClick={onItemClick}
        >
          {index}.&nbsp;
          {item.text}
        </div>
        {failedAction &&
        <div className="input-group-append">
          <ListError
            failedAction={failedAction}
          />
        </div>}

        {item.isFetching && (
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <PulseLoader size={15} color={'#36D7B7'} />
          </div>
        )}
      </div>
    </li>
  );
};


ViewItem.displayName = 'ViewItem';

ViewItem.propTypes = {
  item: PropTypes.instanceOf(ListItem).isRequired,
  index: PropTypes.number.isRequired,
  // React's d.ts can't handle failedAction property with possible value of undefined
  failedAction: PropTypes.shape({
    type: PropTypes.string,
    payload: PropTypes.any}
  ) as any,
  onItemClick: PropTypes.func.isRequired
};
