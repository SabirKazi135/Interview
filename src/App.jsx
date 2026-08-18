import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ]);

  function del() {
    setUsers(
      users.filter((user) => {
        return user.id !== 2;
      }),
    );
    console.log(users);
  }
  return (
    <div>
      <button onClick={() => del()}>update</button>
    </div>
  );
}

export default App;
