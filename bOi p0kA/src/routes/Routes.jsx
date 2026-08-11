// import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Errorpage from '../pages/errorpage/Errorpage';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import BookDetails from '../pages/bookdetails/BookDetails';


export const router = createBrowserRouter([
	{
		path: '/',
		Component: Root,
		errorElement: <Errorpage />,
		children: [
			{
				index: true,
				loader: () =>
					fetch('booksData.json'), //only home loader ei data fetch korbe
				// path: '/',
				Component: Home,
			},
			{
				path: '/about',
				Component: About,
			},
			{
				path: '/bookDetails/:Id',
				loader: () =>
					fetch('booksData.json'),
				Component: BookDetails,
			},
		],
	},
]);
