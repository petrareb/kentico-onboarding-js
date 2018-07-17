import React from 'react';
import PropTypes from 'prop-types';

export class ModifiableItem extends React.PureComponent {
  static displayName = 'ModifiableItem';
  static propTypes = {
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  render() {
    return (
      <form>
        <input type={'text'} name={'itemToModify'} value={this.state.text}/>
        <input type={'button'} name={'itemToModifySaveButton'} value={'Save'} onClick={this._onSaveClick}/>
        <input type={'button'} name={'itemToModifyCancelButton'} value={'Cancel'} onClick={this._onCancelClick}/>
        <input type={'button'} name={'itemToModifyDeleteButton'} value={'Delete'} onClick={this._onDeleteClick}/>
      </form>
    );
  }
}
