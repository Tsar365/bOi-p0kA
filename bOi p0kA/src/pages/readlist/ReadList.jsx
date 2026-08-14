import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBooks } from '../../utility/AddtoDB';

const ReadList = () => {
  const [readList, setReadList] = useState([]);
const data = useLoaderData();

useEffect(() => {
  const storedBookData = getStoredBooks();
  const ConvertedBookList=storedBookData.map((id) =>parseInt(id));
  const myReadList = data.filter((book) => ConvertedBookList.includes(book.bookId));
  setReadList(myReadList);
},[])


  return (
		<div>
			<Tabs>
				<TabList>
					<Tab>Book List</Tab>
					<Tab>Wish List</Tab>
				</TabList>

				<TabPanel>
					<h2>This is my Book List {readList.length}</h2>
          {
            readList.map((book) => (
              <div key={book.bookId} className="my-4 p-4 border rounded-md shadow-md">
                <h3 className="text-xl font-bold">{book.bookName}</h3>
              </div>
            ))
          }
				</TabPanel>
				<TabPanel>
					<h2>This is my Wish List</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ReadList;