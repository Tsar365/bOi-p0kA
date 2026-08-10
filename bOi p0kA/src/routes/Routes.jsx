// import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Errorpage from '../pages/errorpage/Errorpage';
import Home from '../pages/home/Home';


export const router = createBrowserRouter([
	{
		path: '/',
		Component: Root,
		errorElement: <Errorpage />,
		children: [
			{
				index: true,
				loader: () =>
					fetch('booksData.json').then((response) => response.json()), //only home loader ei data fetch korbe
				// path: '/',
				Component: Home,
			},
		],
	},
]);
