import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  function hadleSearch(e) {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      setLoading(true);
      setError("");
      setData([]);
      async function fetchData() {
        try {
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/users?name_like=${searchValue}`,
          );

          if (!res.ok) {
            setError("error after fetch");
            return;
          }

          const data = await res.json();

          setData(data);
          console.log(data);
        } catch (error) {
          setError(`Error in fetch: ${error}`);
        } finally {
          setLoading(false);
          console.log("done");
        }
      }
      fetchData();
    } else {
      return;
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <form
        onSubmit={hadleSearch}
        className="w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg flex gap-3"
      >
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading ? (
          <p className="text-center text-blue-400">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : data.length > 0 ? (
          <div className="space-y-3">
            {data.map((user) => (
              <div
                key={user.id}
                className="bg-gray-700 text-white p-4 rounded-lg"
              >
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-300">{user.email}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
