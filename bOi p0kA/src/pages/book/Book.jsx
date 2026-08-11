// import React from 'react';
// import React from 'react';

import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';

const Book = ({ singlebook }) => {
	const {
		bookId,
		bookName,
		author,
		image,
		rating,
		category,
		tags,
		yearOfPublishing,
	} = singlebook;

	return (
		<Link to={`/bookDetails/${bookId}`}>
			<div className="card bg-base-100 w-96 shadow-sm border p-6 shadow-slate-200 hover:shadow-slate-400 transition-all duration-300">
				<figure className="px-10 pt-10 bg-base-200 w-2/3 mx-auto rounded-lg">
					<img
						className="h-[166px]"
						src={image}
						alt={bookName}
					/>
				</figure>
				<div className="card-body">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="badge badge-outline">
							{tag}
						</span>
					))}

					<h2 className="card-title">
						{bookName}
						<div className="badge badge-secondary">{yearOfPublishing}</div>
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
		</Link>
	);
};

export default Book;
