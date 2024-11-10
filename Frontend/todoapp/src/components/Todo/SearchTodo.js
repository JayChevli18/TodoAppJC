import React, { useState } from 'react';
import './TodoStyle.css';

const SearchTodo = ({ handleSearchResults }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        handleSearchResults(query);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search tasks by name..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
            />
        </div>);
};

export default SearchTodo;
