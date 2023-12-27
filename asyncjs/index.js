// setTimeout(() => {
//   console.log("Hello world");
// }, 1000);
// console.log("I am not waiting");

// setTimeout(() => {
//   console.log("First msg");
//   setTimeout(() => {
//     console.log("Second msg");
//     setTimeout(() => {
//       console.log("Third msg");
//     }, 1000);
//   }, 1000);
// }, 1000);

// construction de la promese
const isAuth = false;
// const promese = new Promise((resovle, reject) => {
//   if (isAuth) {
//     resovle("User authenticated");
//   } else {
//     reject("User must login");
//   }
// });

// consomation de la promese
// promese
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const printMessage = (message) => {
  return new Promise((resovle, reject) => {
    if (!message) reject("message not found");
    setTimeout(() => {
      console.log(message);
      resovle();
    }, 1000);
  });
};

// printMessage("Hello how are you")
//   .then(() => printMessage("I am fine and you"))
//   .then(() => printMessage("I am doing well"))
//   .then(() => printMessage(""))
//   .catch((error) => console.log(error));

const printAllMessages = async () => {
  try {
    await printMessage("Hi how are you");
    await printMessage("I am fine and you");
    await printMessage();
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

printAllMessages();
