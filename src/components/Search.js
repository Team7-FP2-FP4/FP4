import React from "react";
import { useSearch } from "./useSearch";
const Search = (props) => {

    const {
        searchValue,
        setSearchValue,
        handleSubmit,
    } = useSearch(props);

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative flex flex-row">
                <input
                    type="input"
                    value={searchValue}
                    id="default-search"
                    onChange={(event) => setSearchValue(event.target.value)}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-inter" placeholder="Search movies" />
                <button type="submit" className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Search</button>
            </div>
        </form>
    );
}

export default Search;