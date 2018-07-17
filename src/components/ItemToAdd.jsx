import React from 'react';
import PropTypes from 'prop-types';


export class ItemToAdd extends React.PureComponent {
  static displayName = 'ItemToAdd';
  static propTypes = {
    onAddClick: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  _changedTextInput = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  _onAddClick = (event) => {
    event.preventDefault();
    this.props.onAddClick(this.state.text);
    this.setState(() => ({
      text: ''
    }));
  };

  render() {
    return (
      <form>
        <input type={'text'} name={'itemToAdd'} value={this.state.text} onChange={this._changedTextInput} />
        <input type={'submit'} name={'itemToAddSubmitButton'} value={'Add'} onClick={this._onAddClick}/>
      </form>
    );
  }
}
