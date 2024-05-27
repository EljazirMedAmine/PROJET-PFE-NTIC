import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { ReducerStore } from './component/Reducer';
// add ReducerStore import here
const store=configureStore({
    reducer:{
    'reservation':ReducerStore.reducer,
    }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


