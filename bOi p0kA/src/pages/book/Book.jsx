// import React from 'react';
// import React from 'react';




const Book = ({ singlebook }) => {
const { bookId, bookName, author, image } = singlebook;
 
  return (
		<div className="card bg-base-100 w-96 shadow-sm">
			<figure className="px-10 pt-10">
				<img
					src={image}
					alt={bookName}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{bookName}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>
					by {author}
				</p>
				
				
				<div className="card-actions justify-end">
					<div className="badge badge-outline">Fashion</div>
					<div className="badge badge-outline">Products</div>
				</div>
			</div>
		</div>
	);
};

export default Book;