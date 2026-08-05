import { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "t1", read: false },
    { id: 2, text: "t2", read: true },
    { id: 3, text: "t3", read: false },
  ]);
  const [newNoti, setNewNoti] = useState("");
  const [error, setError] = useState("");

  function hadleNewNoti(e) {
    e.preventDefault();

    if (newNoti.trim() === "") {
      setError("enter the text first");
      return;
    }
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        id: Math.max(...prevNotifications.map((n) => n.id), 0) + 1,
        text: newNoti,
        read: false,
      },
    ]);

    setNewNoti("");
    setError("");
  }

  function handleMarkAsRead(id) {
    setNotifications((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            read: true,
          };
        }

        return item;
      }),
    );
  }
  function handleDelete(id) {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-8">
      <div className="w-full h-min max-w-2xl bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Notification Center
        </h1>

        <form onSubmit={hadleNewNoti} className="flex gap-3 mb-6">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter notification..."
            value={newNoti}
            onChange={(e) => setNewNoti(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Add
          </button>
        </form>

        <div className="flex justify-between bg-gray-700 rounded-lg p-4 mb-6 text-white">
          <p>Total Notifications: {notifications.length}</p>
          <p>Unread: {notifications.filter((noti) => !noti.read).length}</p>
        </div>

        <div className="space-y-4">
          {notifications.map((noti) => {
            return (
              <div
                key={noti.id}
                className="bg-gray-700 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <div className="text-lg font-semibold text-white">
                    {noti.text}
                  </div>
                  <div
                    className={`text-sm ${
                      noti.read ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    {noti.read === false ? "Unread" : "Read"}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleMarkAsRead(noti.id)}
                    disabled={noti.read}
                    className={`px-4 py-2 text-white rounded-lg transition ${
                      noti.read
                        ? "bg-green-400 cursor-not-allowed opacity-60"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    Mark as Read
                  </button>

                  <button
                    onClick={() => handleDelete(noti.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
