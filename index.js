function createShoppingCart() {
  let items = [];

  function addItem(item) {
    if (item.trim() !== "") {
      items.push(item);
      console.log(`Item added: ${item}`);
    } else {
      console.log("Item name cannot be empty.");
    }
  }

  function removeItem(item) {
    if (items.includes(item)) {
      items = items.filter((currentItem) => currentItem !== item);
      console.log(`Item Removed: ${item}`);
    } else {
      console.log("Item not found.");
    }
  }

  function showItems() {
    if (items.length !== 0) {
      console.log("Shopping Cart:");
      items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
      });
    } else {
      console.log("Shopping cart is empty");
    }
  }

  function totalItems() {
    console.log(`Total Items: ${items.length}`);
  }

  return {
    addItem,
    removeItem,
    showItems,
    totalItems,
  };
}

console.log("========== SABIR CART ==========");

const sabirCart = createShoppingCart();

sabirCart.showItems(); // Empty cart

sabirCart.totalItems();

console.log("\n--- Add Items ---");

sabirCart.addItem("Laptop");
sabirCart.addItem("Mouse");
sabirCart.addItem("Keyboard");
sabirCart.showItems();

sabirCart.totalItems();

console.log("\n--- Add Duplicate ---");

sabirCart.addItem("Mouse");
sabirCart.showItems();

sabirCart.totalItems();

console.log("\n--- Invalid Item ---");

sabirCart.addItem("");
sabirCart.addItem("   ");

console.log("\n--- Remove Existing Item ---");

sabirCart.removeItem("Mouse");
sabirCart.showItems();

sabirCart.totalItems();

console.log("\n--- Remove Non Existing Item ---");

sabirCart.removeItem("Phone");

console.log("\n--- Remove Remaining Items ---");

sabirCart.removeItem("Laptop");
sabirCart.removeItem("Keyboard");
sabirCart.removeItem("Mouse");

sabirCart.showItems();

sabirCart.totalItems();

console.log("\n===============================");
console.log("========== JOHN CART ==========");
console.log("===============================");

const johnCart = createShoppingCart();

johnCart.showItems();

johnCart.addItem("Phone");
johnCart.addItem("Charger");

johnCart.showItems();

johnCart.totalItems();

console.log("\n===============================");
console.log("====== INDEPENDENCE TEST ======");
console.log("===============================");

console.log("Sabir Cart:");
sabirCart.showItems();

console.log("John Cart:");
johnCart.showItems();

console.log("\n--- Add New Item To John Only ---");

johnCart.addItem("Earphones");

console.log("Sabir Cart:");
sabirCart.showItems();

console.log("John Cart:");
johnCart.showItems();

console.log("\n===============================");
console.log("========= FINAL CHECK =========");
console.log("===============================");

sabirCart.totalItems();
johnCart.totalItems();
