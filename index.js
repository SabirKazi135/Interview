function createOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ orderId: 501 });
    }, 1000);
  });
}

function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId === 501) {
        resolve({
          orderId: 501,
          paymentId: 9001,
        });
      } else {
        reject("Payment failed");
      }
    }, 1000);
  });
}

function sendConfirmation(payment) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (payment.paymentId === 9001) {
        resolve("Confirmation email sent");
      } else {
        reject("Confirmation failed");
      }
    }, 1000);
  });
}

async function orderDashboard() {
  try {
    const orderId = await createOrder();
    const payment = await processPayment(orderId.orderId);
    const confirmation = await sendConfirmation(payment);

    console.log(orderId);
    console.log(payment);
    console.log(confirmation);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("finished");
  }
}

orderDashboard();
