const [users, setUsers] = useState([
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 3, name: "C" },
]);

setUsers(
  users.map((user) => {
    if (user.id === 2) {
      return {
        ...user,
        name: "sabir",
      };
    }

    return user;
  }),
);

console.log(users);
