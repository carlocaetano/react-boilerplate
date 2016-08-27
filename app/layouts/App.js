import React from 'react';
import Header from 'components/shared/Header';

const App = ({ children }) => (
  <div className="App">
    <Header title="Counter App" />
    {children}
  </div>
);

export default App;
