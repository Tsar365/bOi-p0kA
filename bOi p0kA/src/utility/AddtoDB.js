const getStoredBooks = () => {

  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  else return [];
};

const addToStoredDB=(id)=>{
  const storedBookData = getStoredBooks();

  if (storedBookData.includes(id)) {
    alert("Book already exists in the database.");
    return;
  }
  else{
    storedBookData.push(id);
    // localStorage.setItem("books", JSON.stringify(storedBooks));
    // console.log(storedBooks);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("books", data);
    alert("Book added to the database.");
  }
}

export { getStoredBooks, addToStoredDB };