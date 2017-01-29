import React from 'react';
import Header from './Header.js';
//React - componet
// the return has to be wrap by one tags
const App = () => {
  return (
    <div className="App">
      <Header message="Naming Contests"/>
      <div>
        ...
      </div>
    </div>
  );
};

App.defaultProps = {
  headerMessage : 'Hello!!2'
};

export default App;