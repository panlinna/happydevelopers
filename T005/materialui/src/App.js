import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from './component/AppBar.js';
import Hero from './component/Hero.jsx';
import CircularProgress from './component/Progress.jsx';
import Snackbar from './component/Snackbar.js';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }

  render () {
    return(
      <div>
        <AppBar />
        <Hero />
        <CircularProgress />
        <Snackbar />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
