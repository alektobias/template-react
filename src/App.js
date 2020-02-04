import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from '~/routes';
import GlobalStyle from '~/styles/global';

import store from './store';
import main from './styles/theme/main';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<ThemeProvider theme={main}>
					<Routes />
					<GlobalStyle />
				</ThemeProvider>
			</Router>
		</Provider>
	);
}

export default hot(App);
