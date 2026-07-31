import { useEffect, useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      setError(null);
      setLoading(false);
      return;
    }

    async function fetchData() {
      setLoading(true);
      setError(null);
      setSearchResults([]);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${searchTerm.trim()}`,
        );

        if (!res.ok) {
          throw new Error();
        }

        const data = await res.json();
        setSearchResults(data);
      } catch (error) {
        setError("Failed to fetch users.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Search Users
        </h1>

        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="mt-6">
          {loading ? (
            <p className="text-center text-blue-400">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : searchResults.length > 0 ? (
            <div className="space-y-3">
              {searchResults.map((user) => (
                <div
                  key={user.id}
                  className="bg-gray-700 rounded-lg px-4 py-3 text-white"
                >
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-300">{user.email}</p>
                </div>
              ))}
            </div>
          ) : searchTerm.trim() !== "" ? (
            <p className="text-center text-gray-400">No users found.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Search;
