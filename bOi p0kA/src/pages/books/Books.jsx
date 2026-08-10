// import React from 'react';

import { Suspense} from 'react';
import Book from '../book/Book';

const Books = ({ data }) => {
	// const [allBooks, setAllBooks] = useState([]);

	//! process-1
	// useEffect(() => {
	//   fetch(
	// 		// 'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json',
	//     "booksData.json"
	// 	)
	// 		.then((response) => response.json())
	//     .then((data) => setAllBooks(data));
	// }, []);

	// console.log(allBooks);

	//! process-2
	// 	const bookPromise = fetch('./booksData.json').then((response) =>
	// 		response.json(),
	// 	);

  //? In the Book component:
	// const Book = ({ bookPromise }) => {
	//   const data = use(bookPromise);
	//   console.log(data);

	return (
		<div>
			<h1>Books</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{data.map((singlebook) => (
						// console.log(singlebook)
						<Book
							key={singlebook.bookId}
							singlebook={singlebook}
						/>
					))}
				</div>
			</Suspense>
		</div>
	);
};

export default Books;
