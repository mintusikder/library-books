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
      item.book_title?.toLowerCase().includes(searchTerm) ||
      item.author?.toLowerCase().includes(searchTerm) ||
      item.publisher?.toLowerCase().includes(searchTerm) ||
      item.isbn?.toLowerCase().includes(searchTerm) ||
      item.category?.toLowerCase().includes(searchTerm) ||
      item.volume?.toLowerCase().includes(searchTerm) ||
      item.isbn?.toLowerCase().includes(searchTerm) ||
      item.price?.toLowerCase().includes(searchTerm) ||
      item.purchase_method?.toLowerCase().includes(searchTerm) ||
      item.year?.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <h1 className="text-center mt-4 text-3xl mb-4 font-bold">Library Book</h1>
      <label className="input input-bordered flex items-center gap-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="grow"
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

      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>পুস্তকের নাম</th>
            <th>লেখক/সম্পাদক</th>
            <th>প্রকাশক/পাবলিসার</th>
            <th>Self No</th>
            <th>ভলিউম/সংখ্যা</th>
            <th>ISBN</th>
            <th>COST</th>
            <th>SOURCE</th>
            <th>SERIES</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <tr key={book._id}>
              <th>{index + 1}</th>
              <td>{book.book_title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.category}</td>
              <td>{book.volume}</td>
              <td>{book.isbn}</td>
              <td>{book.price}</td>
              <td>{book.purchase_method}</td>
              <td>{book.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
