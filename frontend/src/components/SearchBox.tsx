import React from "react";

interface SearchBoxProps {
    title: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox: React.FC<SearchBoxProps> = ({
    title,
    onChange
}) => {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <input type="text" id="search_box" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={title} 
            onChange={(e) => {
                onChange(e)
            }}
            />
        </div>
    )
}

export default SearchBox;