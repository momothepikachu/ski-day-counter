import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import storeFactory from './store'
import sampleData from './initialState'
import { Provider } from 'react-redux'
import { addError } from './actions'

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
store.subscribe(saveState)

const handleError = error => {
	store.dispatch(
		addError(error.message)
	)
}

window.React = React
window.store = store
window.addEventListener("error", handleError)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes/>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
