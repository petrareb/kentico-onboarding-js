import React from 'react';

class ItemToAdd extends React.PureComponent {
  static displayName = 'ItemToAdd';
  static propTypes = {};
  render() {
    return (
      <form>
        <input type={'text'} name={'itemToAdd'}/>
        <input type={'submit'} name={'itemToAddSubmitButton'} value={'Add'}/>
      </form>
    );
  }
}

export { ItemToAdd };
