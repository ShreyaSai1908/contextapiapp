import Context from './context';
import React from 'react';

class ParentComp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        msg: 'this is a message on page load'
      }
    }
  
    render() {
      return (
        <Context.Provider value={{ state: this.state,
          onBtnClick: () => this.setState({msg: 'this is the message on button click!'})}}>
              {this.props.children}
        </Context.Provider>
      )
    }
  }
  
  export default ParentComp;