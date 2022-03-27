import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import { Appearance } from 'react-native';


import App from './App';
//import stores from './core/redux';

//const {store, persistor} = stores;

const mode = Appearance.getColorScheme();
const Main = () => {
  return (
    <Provider> 
        
          <PaperProvider>
            <App />
          </PaperProvider>
          
    </Provider>
  );
};

export default Main;
