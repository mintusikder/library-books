import { useEffect, useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch data from local file (assuming public/data.json)
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data); // Populate books state
      });
  }, []);

  const filteredBooks = books.filter((item) => {
    const searchTerm = search.toLowerCase();
    return (
      searchTerm === "" ||
      (typeof item.book_title === "string" && item.book_title.toLowerCase().includes(searchTerm)) ||
      (typeof item.author === "string" && item.author.toLowerCase().includes(searchTerm)) ||
      (typeof item.publisher === "string" && item.publisher.toLowerCase().includes(searchTerm)) ||
      (typeof item.isbn === "string" && item.isbn.toLowerCase().includes(searchTerm)) ||
      (typeof item.category === "string" && item.category.toLowerCase().includes(searchTerm)) ||
      (typeof item.volume === "string" && item.volume.toLowerCase().includes(searchTerm)) ||
      (typeof item.price === "string" && item.price.toLowerCase().includes(searchTerm)) ||
      (typeof item.purchase_method === "string" && item.purchase_method.toLowerCase().includes(searchTerm)) ||
      (typeof item.year === "string" && item.year.toLowerCase().includes(searchTerm))
    );
  });

  return (
    <div className="p-4">
      <h1 className="text-center mt-4 text-3xl mb-4 font-bold">Library Book</h1>
      <label className="input input-bordered flex items-center gap-2 mb-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="grow p-2 border rounded-md"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book, index) => (
          <div
            key={book._id}
            className="p-4 border rounded-lg shadow-md bg-white"
          >
            <h2 className="text-xl font-bold">{index + 1}. {book.book_title}</h2>
            <p><strong>Author:</strong> {book?.author}</p>
            <p><strong>Publisher:</strong> {book.publisher}</p>
            <p><strong>Self No:</strong> {book.category}</p>
            <p><strong>Volume:</strong> {book.volume}</p>
            <p><strong>ISBN:</strong> {book.isbn}</p>
            <p><strong>Cost:</strong> {book.price}</p>
            <p><strong>Source:</strong> {book.purchase_method}</p>
            <p><strong>Series:</strong> {book?.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
