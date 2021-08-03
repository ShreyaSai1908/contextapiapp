import Context from './context';
import React from 'react';

class ChildComp extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {(context) => (
            <div>
              <p>{context.state.msg} </p>
              <button onClick={context.onBtnClick}>Click Here</button>
             </div>
           )}
        </Context.Consumer>
      )
    }
  }

  export default ChildComp;