import { useState } from "react";

function App() {
  const [userSearch, setUserSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    if (userSearch.trim() === "") {
      setError("Please enter a user name.");
      setData([]);
      setLoading(false);
      return;
    }

    async function fetchData() {
      setLoading(true);
      setError("");
      setData([]);

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name_like=${userSearch}`,
        );

        if (!response.ok) {
          setError("Unable to fetch users.");
        }

        const data = await response.json();

        if (data.length === 0) {
          setError("No users found.");
          setData([]);
          return;
        }

        setData(data);
      } catch (error) {
        setError("Unable to fetch users.");
        console.error("Error fetching user data:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          User Search
        </h1>

        <form onSubmit={handleSearch} className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search users..."
            value={userSearch}
            onChange={(e) => setUserSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        <div>
          {loading ? (
            <p className="text-center text-blue-400 font-medium">Loading...</p>
          ) : (
            data.length > 0 && (
              <div className="space-y-4">
                {data.map((user) => (
                  <div
                    key={user.id}
                    className="bg-gray-700 rounded-lg p-4 border border-gray-600"
                  >
                    <p className="text-lg font-semibold text-white">
                      {user.name}
                    </p>

                    <p className="text-gray-300">
                      <span className="font-medium">Email:</span> {user.email}
                    </p>
                  </div>
                ))}
              </div>
            )
          )}

          {error && (
            <p className="mt-4 text-center text-red-400 font-medium">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
