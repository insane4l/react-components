import React from 'react';
import Paginator from './components/paginator/paginator';

function App() {
	return (
		<div className="App">
		<h1>React Components</h1>
		<Paginator currentPage={1} totalItemsCount={222} pageSize={5} onPageSelected={() => {}} />
		</div>
	);
}

export default App;
