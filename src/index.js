import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const reactContainer = document.getElementById('root');

const root = ReactDOM.createRoot(reactContainer);

root.render(<App/>)