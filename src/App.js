import React from 'react'
import {Provider} from "react-redux"
import { AppRouter } from './routers/AppRouter'
import {ConnectedRouter} from 'connected-react-router'

import configureStore, {history} from './store/store';

export const store = configureStore();


export const  App = () => {
    return (
      <Provider store={store}>
         <ConnectedRouter history={history}>
         <AppRouter />
         </ConnectedRouter>
        
      </Provider>
    );
}
