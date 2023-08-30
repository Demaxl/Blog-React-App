import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import $ from 'jquery';
import Base from './pages/Base';
import Home  from './pages/Home.js';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Base />}>
					<Route index element={<Home/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


export default App;



