import { useEffect, useState } from "react";
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearch(event) {
    if (event.value.target.value.trim() !== "") {
      setSearchTerm(event.value.target.value.trim());

      useEffect(() => {
        
      
        
      }, [searchTerm]);
      
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
