// import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
	const { Id } = useParams();
	const bookId = parseInt(Id);
	const data = useLoaderData();
	const singleBook = data.find((book) => book.bookId === bookId);

	const {
		bookName,
		author,
		image,
		review,
		totalPages,
		rating,
		category,
		tags,
		publisher,
		yearOfPublishing,
	} = singleBook;

	return (
		<div className="max-w-5xl mx-auto my-10 px-4">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
				{/* Left: book cover */}
				<div className="bg-gray-100 rounded-md flex items-center justify-center py-16">
					<img
						src={image}
						alt={bookName}
						className="w-56 md:w-64 rounded-sm shadow-[12px_12px_25px_rgba(0,0,0,0.25)]"
					/>
				</div>

				{/* Right: details */}
				<div className="flex flex-col">
					<h1 className="text-4xl font-serif font-bold text-gray-900">
						{bookName}
					</h1>
					<p className="text-gray-600 mt-2">By : {author}</p>

					<hr className="my-4 border-gray-200" />
					<p className="text-gray-800">{category}</p>
					<hr className="my-4 border-gray-200" />

					<p className="text-gray-700 leading-relaxed">
						<span className="font-bold text-gray-900">Review : </span>
						{review}
					</p>

					<div className="flex items-center gap-3 mt-6">
						<span className="font-bold text-gray-900">Tag</span>
						{tags?.map((tag) => (
							<span
								key={tag}
								className="text-green-600 bg-green-50 text-sm px-3 py-1 rounded-full">
								#{tag}
							</span>
						))}
					</div>

					<hr className="my-4 border-gray-200" />

					<div className="space-y-2 text-gray-700">
						<div className="flex justify-between max-w-xs">
							<span>Number of Pages:</span>
							<span className="font-semibold">{totalPages}</span>
						</div>
						<div className="flex justify-between max-w-xs">
							<span>Publisher:</span>
							<span className="font-semibold">{publisher}</span>
						</div>
						<div className="flex justify-between max-w-xs">
							<span>Year of Publishing:</span>
							<span className="font-semibold">{yearOfPublishing}</span>
						</div>
						<div className="flex justify-between max-w-xs">
							<span>Rating:</span>
							<span className="font-semibold">{rating}</span>
						</div>
					</div>

					<div className="flex gap-4 mt-8">
						<button className="px-6 py-2 border border-gray-300 rounded-md font-semibold text-gray-800 hover:bg-gray-50">
							Read
						</button>
						<button className="px-6 py-2 bg-sky-500 text-white rounded-md font-semibold hover:bg-sky-600">
							Wishlist
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookDetails;
