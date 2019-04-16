import {render} from 'react-dom';
import React from 'react';
import App from './views/App'
import { BrowserRouter } from 'react-router-dom';

const app = document.getElementById('app');

render(
<BrowserRouter>
<App/>
</BrowserRouter>,app);