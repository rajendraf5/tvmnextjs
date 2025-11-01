'use client';

import { useState, useRef, useEffect } from 'react';

export default function LiveSearch() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchRef = useRef(null);
  const elementsRef = useRef([]);

  // Cache searchable elements once
  useEffect(() => {
    elementsRef.current = Array.from(
      document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, li')
    );
  }, []);

  // Handle click outside & Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Ignore clicks on the search button itself
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !event.target.closest('button[aria-label*="search"]')
      ) {
        closeSearch();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeSearch();
      }
    };

    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showSearch]);

  const openSearch = () => {
    setShowSearch(true);
    setQuery('');
    setResults([]);
  };

  const closeSearch = () => {
    setShowSearch(false);
    setQuery('');
    setResults([]);
  };

  const toggleSearch = () => {
    showSearch ? closeSearch() : openSearch();
  };

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);

    if (!q.trim()) return setResults([]);

    // Escape special regex characters
    const escapedQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const matches = elementsRef.current
      .map(el => el.innerText)
      .flatMap(text => {
        const lowerText = text.toLowerCase();
        const indices = [];
        let startIndex = 0;

        while ((startIndex = lowerText.indexOf(q, startIndex)) > -1) {
          indices.push(startIndex);
          startIndex += q.length;
        }

        return indices.map(i => {
          const snippetStart = Math.max(0, i - 20);
          const snippetEnd = Math.min(text.length, i + q.length + 20);
          const snippet = text.slice(snippetStart, snippetEnd);
          return snippet.replace(
            new RegExp(escapedQ, 'gi'),
            match => `<mark>${match}</mark>`
          );
        });
      })
      .slice(0, 20);

    setResults(matches);
  };

  return (
    <div className="position-relative">
      {/* Search Icon */}
      <button
        className="bg-transparent border-0"
        onClick={toggleSearch}
        aria-label={showSearch ? "Close search" : "Open search"}
      >
        <i className="bi bi-search text-white fs-3"></i>
      </button>

      {/* Search Box */}
      {showSearch && (
        <div
          ref={searchRef}
          className="position-absolute bg-dark border border-dark rounded shadow p-3 mt-3"
          style={{ right: 0, width: '320px', zIndex: 2000 }}
        >
          <input
            type="text"
            className="search-box"
            placeholder="Search page content..."
            value={query}
            onChange={handleSearch}
            autoFocus
          />

          {query && (
            <div
              className="mt-3"
              style={{ maxHeight: '250px', overflowY: 'auto' }}
            >
              {results.length > 0 ? (
                <ul className="list-group">
                  {results.map((res, i) => (
                    <li
                      key={i}
                      className="list-group-item small"
                      dangerouslySetInnerHTML={{ __html: res }}
                    />
                  ))}
                </ul>
              ) : (
                <p className="text-muted small mb-0">No matches found.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
