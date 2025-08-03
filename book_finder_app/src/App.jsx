import { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (!query) return;
    setLoading(true);
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await res.json();
    setBooks(data.items || []);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>📚 Book Finder</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter book name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="book-grid">
          {books.map((book) => {
            const info = book.volumeInfo;
            return (
              <div className="book-card" key={book.id}>
                <img
                  src={info.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
                  alt={info.title}
                />
                <h3>{info.title}</h3>
                <p>{info.authors?.join(', ')}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
