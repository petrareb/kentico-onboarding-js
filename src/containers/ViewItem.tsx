import { connect } from 'react-redux';
import { ViewItem } from '../components/ViewItem';
import { toggleEdited } from '../actions/todoActions';
import { Dispatch } from 'redux';
import { IItem } from '../constants/IItem';

export interface IViewItemContainerProps {
  index: number,
  item: IItem
  onRowClick: Function
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onRowClick: (itemId: string) => dispatch(toggleEdited(itemId))
});

const ViewItemContainer = connect(null, mapDispatchToProps)(ViewItem);
export { ViewItemContainer as ViewItem };
