import React from 'react';
import PropTypes from 'prop-types';

export class ModifiableItem extends React.PureComponent {
  static displayName = 'ModifiableItem';
  static propTypes = {
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super();
    this.state = {
      text: props.text,
    };
  }

  _onCancelClick = () => {
    this.props.onCancelClick(this.props.id, false);
  };

  _onDeleteClick = () => {
    this.props.onDeleteClick(this.props.id);
  };

  _onSaveClick = () => {
    this.props.onSaveClick(this.props.id);
  };

  _changedTextInput = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <form>
        <input type={'text'} name={'itemToModify'} onChange={this._changedTextInput} value={this.state.text}/>
        <input type={'button'} name={'itemToModifySaveButton'} value={'Save'} onClick={this._onSaveClick}/>
        <input type={'button'} name={'itemToModifyCancelButton'} value={'Cancel'} onClick={this._onCancelClick}/>
        <input type={'button'} name={'itemToModifyDeleteButton'} value={'Delete'} onClick={this._onDeleteClick}/>
      </form>
    );
  }
}
