// import React from 'react';
// import React from 'react';

import { CiStar } from 'react-icons/ci';


const Book = ({ singlebook }) => {
const { bookId, bookName, author, image, rating,category } = singlebook;
 
  return (
		<div className="card bg-base-100 w-96 shadow-sm border p-6">
			<figure className="px-10 pt-10 bg-base-200 w-2/3 mx-auto rounded-lg">
				<img
					className="h-[166px]"
					src={image}
					alt={bookName}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{bookName}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>by {author}</p>

				<div className="card-actions justify-end">
					<div className="badge badge-outline">{category}</div>
					<div className="badge badge-outline">
						{rating} <CiStar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;