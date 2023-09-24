import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import $ from 'jquery';
import Base from './pages/Base';
import Home  from './pages/home.js';
import Post from './pages/posts';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Base />}>
					<Route index element={<Home/>}/>
					<Route path='posts/:postId' element={<Post/>} />
					
				</Route>
			</Routes>
		</BrowserRouter>
	)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);


export default App;



