import React from 'react';
import store from './store/store'
import { Provider } from 'react-redux'
import AppContainer from './components/AppContainer'

function App(props) {
  return (   
    <Provider store={store}>
        <AppContainer/>
    </Provider> 
  );
}

export default App;
