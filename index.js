function login(loginId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (loginId === 101) {
        resolve({ userId: 101 });
      } else {
        reject("wrong login id");
      }
    }, 1000);
  });
}

function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 101) {
        resolve({ Id: 101, name: "sabir" });
      } else {
        reject("wrong user id");
      }
    }, 1000);
  });
}

function getOrders(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId.name === "sabir") {
        resolve(["Laptop", "Mouse", "Keyboard"]);
      } else {
        reject("wrong order id");
      }
    }, 1000);
  });
}

login(101)
  .then((result) => {
    console.log(result);
    getUser(result.userId);
  })
  .then((result) => {
    console.log(result);
    return getOrders(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Order processing finished");
  });
