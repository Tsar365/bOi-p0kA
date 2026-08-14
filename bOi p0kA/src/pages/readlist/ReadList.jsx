import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../utility/AddtoDB';

const ReadList = () => {
	const [readList, setReadList] = useState([]);
	const [sortBy, setSortBy] = useState(''); // State to hold the selected sort option
	const data = useLoaderData();

	useEffect(() => {
		const storedBookData = getStoredBooks();
		const ConvertedBookList = storedBookData.map((id) => parseInt(id));
		const myReadList = data.filter((book) =>
			ConvertedBookList.includes(book.bookId),
		);
		setReadList(myReadList);
	}, []);

  const handleSort=(type)=>{
    setSortBy(type);
    if(type==='pages'){
      const sortedList = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
      setReadList(sortedList);
    }
    else if(type==='ratings'){
      const sortedList = [...readList].sort((a,b)=> a.rating - b.rating);
      setReadList(sortedList);
    }
  }

	return (
		<div>
			<div className="dropdown">
				<div
					tabIndex={0}
					role="button"
					className="btn m-1">
					Sort by :{sortBy === 'pages' ? ' Pages' : sortBy === 'ratings' ? ' Ratings' : ' None'}
				</div>
				<ul
					tabIndex="-1"
					className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
					<li>
						<a onClick={() => handleSort('pages')}>Pages</a>
					</li>
					<li>
						<a onClick={() => handleSort('ratings')}>Ratings</a>
					</li>
				</ul>
			</div>
			<Tabs>
				<TabList>
					<Tab>Book List</Tab>
					<Tab>Wish List</Tab>
				</TabList>

				<TabPanel>
					<h2>This is my Book List {readList.length}</h2>
					{readList.map((book) => (
						<div
							key={book.bookId}
							className="my-4 p-4 border rounded-md shadow-md">
							<h3 className="text-xl font-bold">{book.bookName}</h3>
						</div>
					))}
				</TabPanel>
				<TabPanel>
					<h2>This is my Wish List</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ReadList;
