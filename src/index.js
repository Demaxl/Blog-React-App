import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './routes/root';

import Home, {
	loader as homeLoader
}  from './routes/home';

import Post, {
	loader as postLoader
} from './routes/posts';


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: homeLoader
			},
			{
				path: "posts/:postId",
				element: <Post />,
				loader: postLoader
			}
		]
	}
]);


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);





