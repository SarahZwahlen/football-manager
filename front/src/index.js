import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextComponent } from './context/userContext';

import store from "./store/store.js";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextComponent>
        <Provider store={store}>
            <App />
        </Provider>
        
    </UserContextComponent>
    
);

