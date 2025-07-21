import type { FC } from "react";

const SearchBar: FC = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </div>
  );
};

export { SearchBar };
