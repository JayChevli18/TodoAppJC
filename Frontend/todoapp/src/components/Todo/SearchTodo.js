import React, { useState } from 'react';

const SearchTodo = ({ handleSearchResults }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        handleSearchResults(query);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search tasks by name..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchTodo;
