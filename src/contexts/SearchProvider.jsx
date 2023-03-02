import React, { useState, useContext } from 'react'

const useSearchContext = React.createContext();
const useSearchHandleContext = React.createContext();

export function useMovieSearchContext() {
    return useContext(useSearchContext);
}

export function useMovieHandleContext() {
    return useContext(useSearchHandleContext);
}

export function SearchProvider({ children }) {
    const [search, setSearch] = useState(null);

    const handleSearch = (aux) => {
        setSearch(aux)
    }

    return (
        <useSearchContext.Provider value={search}>
            <useSearchHandleContext.Provider value={handleSearch}>
                {children}
            </useSearchHandleContext.Provider>
        </useSearchContext.Provider>
    )
}
