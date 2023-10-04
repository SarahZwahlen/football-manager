import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextComponent } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserContextComponent>
        <App />
    </UserContextComponent>
    
);

