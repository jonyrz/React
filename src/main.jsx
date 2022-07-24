import React from "react";
import {createRoot} from "react-dom/client";
import {CounterApp} from './FirstApp'
import './styles.css'

 
// react 18
const root = createRoot(document.getElementById('root'));
root.render(
    <CounterApp></CounterApp>
);