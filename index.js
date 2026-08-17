async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Error after responce");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
}

fetchUsers();
