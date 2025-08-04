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
    <div className="app-container">
      <header>
        <h1>📚 Book Explorer</h1>
        <p>Discover books from Google Books API</p>
      </header>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search for a book, author, or topic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={searchBooks}>🔍 Search</button>
      </div>

      {loading ? (
        <p className="loading">Loading books...</p>
      ) : (
        <div className="book-grid">
          {books.length === 0 ? (
            <p className="no-results">No books found. Try another search!</p>
          ) : (
            books.map((book) => {
              const info = book.volumeInfo;
              return (
                <div className="book-card" key={book.id}>
                  <img
                    src={info.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
                    alt={info.title}
                  />
                  <div className="book-info">
                    <h3>{info.title}</h3>
                    <p>{info.authors?.join(', ')}</p>
                    <p><small>{info.publishedDate}</small></p>
                    {info.previewLink && (
                      <a href={info.previewLink} target="_blank" rel="noreferrer">
                        Preview Book
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default App;
