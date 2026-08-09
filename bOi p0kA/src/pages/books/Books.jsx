// import React from 'react';

import { useEffect, useState } from "react";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch(
			'https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json',
		)
			.then((response) => response.json())
      .then((data) => setAllBooks(data));
  }, []);

  console.log(allBooks);
  return (
    <div>
      <h1>Books</h1>
    </div>
  );
};

export default Books;