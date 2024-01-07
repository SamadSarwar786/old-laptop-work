const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise is resolved");
    reject("oops there is an error");
  }, 2000);
});

doWorkPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
