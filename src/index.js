import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import storeFactory from './store'
import { suggestResortNames } from './actions'

const store = storeFactory()

store.dispatch(
	suggestResortNames('hea')
)

ReactDOM.render(<App />, document.getElementById('root'));

