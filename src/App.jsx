import { useState } from "react";

function App() {
  const [newNotification, setNewNotification] = useState("");

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      text: "Welcome to the dashboard",
      isRead: false,
    },
    {
      id: 2,
      text: "Your profile is 80% complete",
      isRead: false,
    },
    {
      id: 3,
      text: "New message received",
      isRead: false,
    },
  ]);

  function handleAdd() {
    if (newNotification.trim() === "") return;

    const notification = {
      id: Date.now(),
      text: newNotification.trim(),
      isRead: false,
    };

    setNotifications((prev) => [notification, ...prev]);

    setNewNotification("");
  }

  function handleRead(id) {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification,
      ),
    );
  }

  function handleDelete(id) {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  }

  const unreadCount = notifications.filter(
    (notification) => !notification.isRead,
  ).length;

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Notification Center
        </h1>

        {/* Add Notification */}

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter notification..."
            value={newNotification}
            onChange={(e) => setNewNotification(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleAdd}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition"
          >
            Add
          </button>
        </div>

        {/* Summary */}

        <div className="bg-gray-700 rounded-lg p-4 mb-6 flex justify-between">
          <p className="text-white">
            Total Notifications:{" "}
            <span className="font-bold">{notifications.length}</span>
          </p>

          <p className="text-yellow-400">
            Unread: <span className="font-bold">{unreadCount}</span>
          </p>
        </div>

        {/* Empty State */}

        {notifications.length === 0 ? (
          <div className="text-center text-gray-400 py-10">
            No notifications.
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="bg-gray-700 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <p
                    className={`font-medium ${
                      notification.isRead
                        ? "text-gray-400 line-through"
                        : "text-white"
                    }`}
                  >
                    {notification.text}
                  </p>

                  <p
                    className={`text-sm mt-1 ${
                      notification.isRead ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    {notification.isRead ? "Read" : "Unread"}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    disabled={notification.isRead}
                    onClick={() => handleRead(notification.id)}
                    className={`px-4 py-2 rounded-lg text-white transition ${
                      notification.isRead
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    Mark as Read
                  </button>

                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
