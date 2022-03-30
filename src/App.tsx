import React from 'react';
import { Paginator } from './components/Paginator/Paginator';
import { SuperRange } from './components/SuperRange/SuperRange';


function App() {
	return (
		<div className="App">
			<h1 style={{margin: '100px auto'}}>React Components</h1>
			<Paginator currentPage={1} totalItemsCount={222} pageSize={5} onPageSelected={() => {}} />
			<div style={{width: '400px', margin: '100px auto'}}>
				<SuperRange />
			</div>
		</div>
	);
}

export default App;
