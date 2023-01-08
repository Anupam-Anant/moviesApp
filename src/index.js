import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MovieApp from './MovieApp';
import reportWebVitals from './reportWebVitals';
import './components/CounterGroup.js';
import './components/Reset.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //  for reset counter -> App
    // <App /> 
    <BrowserRouter>
        <MovieApp></MovieApp>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
