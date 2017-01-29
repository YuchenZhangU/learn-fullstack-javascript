import React from 'react';
import Header from './Header.js';
//React - componet
// the return has to be wrap by one tags
class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {test: 42};
  // }
  // or just use class props
  state = {
    pageHeader: 'Naming Contests'
  };
  //Lifecycle methods
  componentDidMount(){
    //ajax...
    //timers, listeners
    console.log('did Mount');
    debugger;
  }
  componentWillUnmount(){
    //clean timers, listeners
    console.log('will Unmount');
    debugger;
  }
  render(){   //same as render: function(){}
    return (
    <div className="App">
      <Header message={this.state.pageHeader}/>
      <div>
        {this.state.test}
      </div>
    </div>
    );
  }
}

App.defaultProps = {
  headerMessage : 'Hello!!2'
};

export default App;