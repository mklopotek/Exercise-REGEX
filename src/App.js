import React, { Component } from 'react';
import ValidationForms from './ValidationForms';
import { MuiThemeProvider } from 'material-ui/styles';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <ValidationForms />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
